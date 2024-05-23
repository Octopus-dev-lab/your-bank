import PreviewExchangeTable from './PreviewExchangeTable';

function PreviewExchange() {
	return (
		<div className="flex flex-col gap-[0.93rem] lg:gap-5 2xl:gap-[1.57rem]">
			<h6
				id="exchange-title"
				className="hidden-on-start titles text-white-100 text-[0.642rem] leading-[0.9615rem] font-medium lg:text-[0.86081rem] lg:leading-[1.29125rem] 2xl:text-[1rem] 2xl:leading-[1.62569rem]"
			>
				Money Exchange
			</h6>
			<PreviewExchangeTable />
			<button
				id="exchange-button"
				className="hidden-on-start py-2 px-4 rounded-full bg-[#22251B] text-green-700 text-[0.57694rem] leading-[0.86538rem] font-normal lg:px-5 lg:py-[0.69rem] lg:text-[0.77475rem] lg:leading-[1.16213rem] 2xl:px-[1.63rem] 2xl:py-[0.87rem] 2xl:text-[0.97544rem] 2xl:leading-[1.46313rem]"
			>
				Exchange
			</button>
		</div>
	);
}

export default PreviewExchange;
