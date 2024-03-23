import indianFlag from '../assets/indian-flag.svg';
import usaFlag from '../assets/usa-flag.svg';

function PreviewExchangeTable() {
	return (
		<div className="grid grid-cols-2 auto-rows-min bg-grey-900 border border-grey-800 rounded-md">
			<div className="p-[0.64rem] border-r border-r-grey-800 border-b border-b-grey-800">
				<div className="flex items-center gap-[0.32rem] mb-[0.32rem]">
					<img
						src={indianFlag}
						alt="india-flag"
					/>
					<p className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-normal">
						INR
					</p>
				</div>
				<p className="text-white-500 text-[0.51281rem] leading-[0.76919rem font-light">
					Indian Rupees
				</p>
			</div>
			<div className="p-[0.64rem] border-b border-b-grey-800">
				<div className="flex items-center gap-[0.32rem] mb-[0.32rem]">
					<img
						src={usaFlag}
						alt="usa-flag"
					/>
					<p className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-normal">
						USD
					</p>
				</div>
				<p className="text-white-500 text-[0.51281rem] leading-[0.76919rem font-light">
					United States Dollar
				</p>
			</div>
			<div className="px-[0.64rem] py-[0.96rem] border-r border-r-grey-800">
				<p className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-medium">
					5,000
				</p>
			</div>
			<div className="px-[0.64rem] py-[0.96rem]">
				<p className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-medium">
					12.00
				</p>
			</div>
		</div>
	);
}

export default PreviewExchangeTable;
