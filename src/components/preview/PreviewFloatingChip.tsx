import Plus from '../../assets/svg/plus.svg?react';

function PreviewFloatingChip() {
	// timeline.from(
	// 	'.chip',
	// 	{
	// 		keyframes: {
	// 			zIndex: [-50, -50, 0],
	// 			opacity: [0, 1, 1],
	// 			y: ['60%', '-60%', '0%'],
	// 			x: ['50%', '-50%', '0%']
	// 		},
	// 		duration: 0.7
	// 	},
	// 	'<'
	// );

	return (
		<div
			id="floating-chip"
			className="hidden-on-start absolute -top-[1.61rem] -left-[0.61rem] z-10 py-[0.6rem] px-[0.64rem] flex gap-[0.32rem] items-center justify-center rounded-lg bg-[#22251B] lg:-top-10 lg:-left-12 lg:py-[0.69rem] lg:px-[0.86rem] lg:gap-[0.43rem] 2xl:gap-[0.54rem] 2xl:py-[0.88rem] 2xl:px-[1.08rem]"
		>
			<div className="rounded-full bg-green-800 p-[0.32rem] lg:p-[0.42rem]  2xl:p-[0.54rem] ">
				<Plus className="w-3 lg:w-4 2xl:w-[1.3rem]" />
			</div>
			<div>
				<p className="text-white-100 text-[0.641rem] leading-[0.9615rem] font-normal lg:text-[0.86081rem] lg:leading-[1.29125rem] 2xl:text-[1rem] 2xl:leading-[1.62569rem]">
					+ $5000,00
				</p>
				<p className="text-white-500 text-[0.51281rem] leading-[0.76919] font-light lg:text-[0.68869rem] lg:leading-[1.033rem] 2xl:text-[0.86706rem] 2xl:leading-[1.30056rem]">
					Monthly Income
				</p>
			</div>
		</div>
	);
}

export default PreviewFloatingChip;
