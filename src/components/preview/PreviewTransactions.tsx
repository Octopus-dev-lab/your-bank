import PreviewTransactionsStack from './PreviewTransactionsStack';

function PreviewTransactions() {
	return (
		<div className="flex flex-col gap-[0.64rem]">
			<h6 className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-medium">
				Your Transactions
			</h6>
			<div className="w-full flex flex-col items-center">
				<PreviewTransactionsStack />
			</div>
		</div>
	);
}

export default PreviewTransactions;
