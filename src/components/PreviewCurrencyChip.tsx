import bitcoinIcon from '../assets/bitcoin.svg';
import dollarIcon from '../assets/dollar.svg';
import ethereumIcon from '../assets/ethereum.svg';
import euroIcon from '../assets/euro.svg';

function PreviewCurrencyChip() {
	return (
		<div className="w-fit mr-0 ml-auto mt-[0.65rem] pl-[0.77rem] pr-[0.32rem] py-[0.32rem] gap-[6px] flex rounded-full bg-[#22251B] items-center">
			<h6 className="text-white-100 text-[0.57694rem] leading-[0.86538rem] font-normal text-nowrap">
				Supported Currency
			</h6>
			<div className="flex rounded-full p-[0.32rem] gap-1 border border-grey-800 bg-grey-1000">
				<img
					src={dollarIcon}
					alt="dollar icon"
				/>
				<img
					src={euroIcon}
					alt="euro icon"
				/>
				<img
					src={bitcoinIcon}
					alt="bitcoin icon"
				/>
				<img
					src={ethereumIcon}
					alt="ethereum icon"
				/>
			</div>
		</div>
	);
}

export default PreviewCurrencyChip;
