import plusIcon from '../assets/plus.svg';

function PreviewFloatingChip() {
	return (
		<div className="absolute -top-[1.61rem] -left-[0.61rem] z-10 py-[0.6rem] px-[0.64rem] flex gap-[0.32rem] items-center justify-center rounded-lg bg-[#22251B]">
			<div className="rounded-full bg-green-800 p-[0.32rem]">
				<img
					src={plusIcon}
					alt="plus icon"
				/>
			</div>
			<div className="">
				<p className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-normal">
					+ $5000,00
				</p>
				<p className="text-white-500 text-[0.51281rem] leading-[0.76919] font-light">
					Monthly Income
				</p>
			</div>
		</div>
	);
}

export default PreviewFloatingChip;
