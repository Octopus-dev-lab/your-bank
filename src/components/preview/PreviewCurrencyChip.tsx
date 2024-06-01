import Bitcoin from '../../assets/svg/bitcoin-oval.svg?react';
import Dollar from '../../assets/svg/dollar-oval.svg?react';
import Ethereum from '../../assets/svg/ethereum-oval.svg?react';
import Euro from '../../assets/svg/euro-oval.svg?react';

function PreviewCurrencyChip() {
	return (
		<div
			id="currency-chip"
			className="hidden-on-start relative bottom-0 -right-5 w-fit mr-0 ml-auto mt-[0.65rem] pl-[0.77rem] pr-[0.32rem] py-[0.32rem] gap-[0.37rem] flex rounded-full bg-[#22251B] items-center lg:-right-10 lg:py-[0.45rem] lg:pr-[0.45rem] lg:pl-4 2xl:py-[0.54rem] 2xl:pl-[1.3rem] 2xl:pr-[0.54rem] 2xl:gap-[0.65rem]"
		>
			<h6 className="currency text-white-100 text-[0.57694rem] leading-[0.86538rem] font-normal text-nowrap lg:text-[0.77475rem] lg:leading-[1.16213rem] 2xl:text-[0.97544rem] 2xl:leading-[1.46313rem]">
				Supported Currency
			</h6>
			<div className="flex rounded-full p-[0.32rem] gap-1 border border-grey-800 bg-grey-1000 lg:p-[0.43rem] lg:gap-[0.34rem] 2xl:p-[0.53rem] 2xl:gap-[0.43rem]">
				<Dollar className="w-[1.28556rem] lg:w-[1.72638rem] 2xl:w-[2.16756rem]" />
				<Euro className="w-[1.28556rem] lg:w-[1.72638rem] 2xl:w-[2.16756rem]" />
				<Bitcoin className="w-[1.28556rem] lg:w-[1.72638rem] 2xl:w-[2.16756rem]" />
				<Ethereum className="w-[1.28556rem] lg:w-[1.72638rem] 2xl:w-[2.16756rem]" />
			</div>
		</div>
	);
}

export default PreviewCurrencyChip;
