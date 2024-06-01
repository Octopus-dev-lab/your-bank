import indianFlag from '../../assets/images/indian-flag.webp';
import usaFlag from '../../assets/images/usa-flag.webp';

function PreviewExchangeTable() {
	return (
		<div
			id="exchange-table"
			className="hidden-on-start grid grid-cols-2 auto-rows-min bg-grey-900 border border-grey-800 rounded-md"
		>
			<div className="table-content hidden-on-start p-[0.64rem] border-r border-r-grey-800 border-b border-b-grey-800 lg:p-[0.86rem] 2xl:p-[1.08rem]">
				<div className="flex items-center gap-[0.32rem] mb-[0.32rem] lg:gap-[0.43rem] lg:mb-[0.43rem] 2xl:gap-[0.54rem] 2xl:mb-[0.54rem]">
					<img
						className="w-[1.28556rem] h-[1.28556rem] lg:w-[1.72638rem] lg:h-[1.72638rem] 2xl:w-[2.16756rem] 2xl:h-[2.16756rem] rounded-full"
						src={indianFlag}
						alt="indian flag"
					/>
					<p className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-normal lg:text-[0.77475rem] lg:leading-[1.16213rem] 2xl:text-[0.97544rem] 2xl:leading-[1.46313rem]">
						INR
					</p>
				</div>
				<p className="text-white-500 text-[0.51281rem] leading-[0.76919rem font-light lg:text-[0.68869rem] lg:leading-[1.033rem] 2xl:text-[0.86706rem] 2xl:leading-[1.30056rem]">
					Indian Rupees
				</p>
			</div>
			<div className="table-content hidden-on-start p-[0.64rem] border-b border-b-grey-800 lg:p-[0.86rem] 2xl:p-[1.08rem]">
				<div className="flex items-center gap-[0.32rem] mb-[0.32rem] lg:gap-[0.43rem] lg:mb-[0.43rem] 2xl:gap-[0.54rem] 2xl:mb-[0.54rem]">
					<img
						className="w-[1.28556rem] h-[1.28556rem] lg:w-[1.72638rem] lg:h-[1.72638rem] 2xl:w-[2.16756rem] 2xl:h-[2.16756rem] rounded-full"
						src={usaFlag}
						alt="USA flag"
					/>
					<p className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-normal lg:text-[0.77475rem] lg:leading-[1.16213rem] 2xl:text-[0.97544rem] 2xl:leading-[1.46313rem]">
						USD
					</p>
				</div>
				<p className="text-white-500 text-[0.51281rem] leading-[0.76919rem font-light lg:text-[0.68869rem] lg:leading-[1.033rem] 2xl:text-[0.86706rem] 2xl:leading-[1.30056rem]">
					United States Dollar
				</p>
			</div>
			<div className="table-content hidden-on-start px-[0.64rem] py-[0.96rem] border-r border-r-grey-800 lg:px-[0.86rem] lg:py-[1.29rem] 2xl:px-[1.08rem] 2xl:py-[1.63rem]">
				<p className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-medium lg:text-[0.86081rem] lg:leading-[1.29125rem] 2xl:text-[1rem] 2xl:leading-[1.62569rem]">
					5,000
				</p>
			</div>
			<div className="table-content hidden-on-start px-[0.64rem] py-[0.96rem] lg:px-[0.86rem] lg:py-[1.29rem] 2xl:px-[1.08rem] 2xl:py-[1.63rem]">
				<p className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-medium lg:text-[0.86081rem] lg:leading-[1.29125rem] 2xl:text-[1rem] 2xl:leading-[1.62569rem]">
					12.00
				</p>
			</div>
		</div>
	);
}

export default PreviewExchangeTable;
