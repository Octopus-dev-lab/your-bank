import RadialAbstract from '../../assets/svg/radial-abstract.svg?react';

function DualPaneCard({
	imageSm,
	imageMd,
	imageLg,
	children
}: {
	imageSm: string;
	imageMd: string;
	imageLg: string;
	children: React.ReactNode;
}) {
	return (
		<div className="relative w-full p-[0.88rem] rounded-2xl bg-grey-900 md:p-5 lg:max-w-[640px] lg:mx-auto min-[1180px]:p-10 min-[1180px]:max-w-none 2xl:p-[3.12rem]">
			<RadialAbstract className="absolute top-0 right-0 w-[12.4375rem] h-[11.8125rem] z-10 lg:w-[20.875rem] lg:h-[19.8125rem] 2xl:w-[31.5625rem] 2xl:h-[30rem] rotate-90" />
			<div className="relative w-full z-20 min-[1180px]:flex min-[1180px]:flex-row-reverse">
				<picture className="relative top-0 left-0 w-full min-[1180px]:min-w-[66.666667%] min-[1180px]:w-2/3 min-[1180px]:self-start min-[1180px]:flex-auto">
					<source
						media="(min-width: 1180px)"
						srcSet={imageLg}
					/>
					<source
						media="(min-width: 430px)"
						srcSet={imageMd}
					/>
					<img
						className="w-full rounded-2xl"
						src={imageSm}
						alt="Job interview"
					/>
				</picture>
				<div className="relative w-full -mt-6 p-6 z-10 rounded-3xl bg-grey-1000 md:-mt-16 md:p-8 min-[1180px]:p-[3.75rem] min-[1180px]:min-w-[50%] min-[1180px]:w-1/2 min-[1180px]:h-min min-[1180px]:mt-0 min-[1180px]:-right-[16.666667%] min-[1180px]:rounded-tr-[0] min-[1180px]:rounded-l-[1.25rem] min-[1180px]:rounded-br-[3.75rem] 2xl:p-20 2xl:rounded-br-[5rem]">
					{children}
				</div>
			</div>
		</div>
	);
}

export default DualPaneCard;
