import PreviewExchangeTable from './PreviewExchangeTable';

function PreviewExchange() {
	return (
		<div className="flex flex-col gap-[0.93rem]">
			<h6 className="text-white-100 text-[0.642rem] leading-[0.9615rem] font-medium">
				Money Exchange
			</h6>
			<PreviewExchangeTable />
			<button className="py-2 px-4 rounded-full bg-[#22251B] text-green-700 text-[0.57694rem] leading-[0.86538rem] font-normal">
				Exchange
			</button>
		</div>
	);
}

export default PreviewExchange;
