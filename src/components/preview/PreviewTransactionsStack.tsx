import transactionIcon from '../../assets/home.preview/transaction.svg';

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
						id={`transaction-${index}-card`}
						key={index}
						className={`hidden-on-start ${styles} flex justify-between items-center py-2 px-3 rounded-md border border-grey-800 bg-grey-900 lg:px-4 lg:py-[0.7rem] 2xl:px-[1.3rem] 2xl:py-[0.87rem]`}
					>
						<div className="flex gap-[0.32rem] items-center lg:gap-[0.43rem] 2xl:gap-[0.54rem]">
							<div className="w-fit rounded-full p-[0.32rem] bg-green-800 lg:p-[0.43rem] 2xl:p-[0.54rem]">
								<img
									className="w-[0.77131rem] lg:w-4 2xl:w-[1.3rem]"
									src={transactionIcon}
								/>
							</div>
							<div>
								<p className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-light lg:text-[0.77475rem] lg:leading-[1.16213rem] 2xl:text-[0.97544rem] 2xl:leading-[1.46313rem]">
									Transaction
								</p>
								<h6 className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-normal lg:text-[0.86081rem] lg:leading-[1.29125rem] 2xl:text-[1.08381rem] 2xl:leading-[1.62569rem]">
									{transaction.name}
								</h6>
							</div>
						</div>
						<h5 className="text-white-100 text-[0.76919rem] leading-[1.15381rem] font-medium lg:text-[1rem] lg:leading-[1.5495rem] 2xl:text-[1.3rem] 2xl:leading-[1.95081rem]">
							{transaction.amount}
						</h5>
					</div>
				);
			})}
		</>
	);
}

export default PreviewTransactionsStack;
