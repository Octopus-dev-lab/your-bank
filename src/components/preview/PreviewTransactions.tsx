import PreviewTransactionsStack from './PreviewTransactionsStack';

function PreviewTransactions() {
	return (
		<div className="flex flex-col gap-[0.64rem] lg:gap-[0.86rem] 2xl:gap-[1.08rem]">
			<h6
				id="transactions-title"
				className="hidden-on-start titles text-white-100 text-[0.641rem] leading-[0.9615rem] font-medium lg:text-[0.86081rem] lg:leading:text-[1.29125rem] 2xl:text-[1rem] 2xl:leading-[1.62569rem]"
			>
				Your Transactions
			</h6>
			<div className="w-full flex flex-col items-center">
				<PreviewTransactionsStack />
			</div>
		</div>
	);
}

export default PreviewTransactions;
