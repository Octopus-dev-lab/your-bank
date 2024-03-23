import transactionIcon from '../assets/home.preview/transaction.svg';

const transactionData = [
	{
		name: 'Joel Kenley',
		amount: '-$68.00'
	},
	{
		name: 'Mark Smith',
		amount: '-$68.00'
	},
	{
		name: 'Lenen Roy',
		amount: '-$68.00'
	}
];

const cardsWidths = ['w-full', 'w-[92%]', 'w-[85%]'];
const cardsOpacity = ['opacity-100', 'opacity-50', 'opacity-20'];

function getStackRelatedStyles(index: number) {
	const width = cardsWidths[index];
	const opacity = cardsOpacity[index];
	const zIndex = `z-${transactionData.length - index}0`;
	const margin = index === 0 ? '' : '-mt-[0.9rem]';
	return width + ' ' + opacity + ' ' + margin + ' ' + zIndex;
}

function PreviewTransactionsStack() {
	return (
		<>
			{transactionData.map((transaction, index) => {
				const styles = getStackRelatedStyles(index);
				return (
					<div
						className={`${styles} flex justify-between items-center py-2 px-3 rounded-md border border-grey-800 bg-grey-900`}
					>
						<div className="flex gap-[0.32rem] items-center">
							<div className="w-fit rounded-full p-[0.32rem] bg-green-800">
								<img src={transactionIcon} />
							</div>
							<div>
								<p className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-light">
									Transaction
								</p>
								<h6 className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-normal">
									{transaction.name}
								</h6>
							</div>
						</div>
						<h5 className="text-white-100 text-[0.76919rem] leading-[1.15381rem] font-medium">
							{transaction.amount}
						</h5>
					</div>
				);
			})}
		</>
	);
}

export default PreviewTransactionsStack;
