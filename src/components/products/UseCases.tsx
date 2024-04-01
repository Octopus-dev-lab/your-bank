import React from 'react';
import dashedDividerVertical from '../../assets/home.products/shared/dashed-divider-vertical.svg';
import dashedDivider from '../../assets/home.products/shared/dashed-divider.svg';
import radialAbstract from '../../assets/home.products/shared/radial-abstract.svg';
import { ToggleLabels } from './Products';
import useCasesData from './useCases.data';

function UseCases({
	active = ToggleLabels.INDIVIDUALS
}: {
	active?: ToggleLabels;
}) {
	const data =
		active === ToggleLabels.INDIVIDUALS
			? useCasesData.individuals
			: useCasesData.businesses;
	return (
		<div className="mt-20 p-4 flex flex-col justify-center items-center lg:items-start 2xl:mt-40">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-medium lg:text-[2.375rem] lg:leading-[3.5625rem] 2xl:text-[3rem] 2xl:leading-[4.5rem] 2xl:mb-[0.88rem]">
				Use Cases
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-20">
				At YourBank, we cater to the diverse needs of individuals and
				businesses alike, offering a wide range of financial solutions
			</p>
			<div
				className={`lg:flex lg:justify-between ${active === ToggleLabels.BUSINESS ? 'lg:flex-row-reverse' : ''}`}
			>
				<div className="relative lg:w-[50%]">
					<img
						className="absolute top-0 left-0 lg:w-1/3"
						src={radialAbstract}
					/>
					<div className="mb-[1.88rem] p-5 grid grid-cols-2 grid-rows-2 rounded-2xl bg-grey-900 gap-[0.62rem] lg:p-10 2xl:p-[3.12rem]">
						{data.cardsData.map((card, index) => (
							<div
								key={index}
								className="py-5 px-[0.88rem] border border-grey-800 rounded-lg bg-grey-1000 z-10 lg:p-6 2xl:p-[1.88rem]"
							>
								<img
									className="mx-auto mb-[0.88rem] lg:w-[3.5rem] 2xl:mb-6 2xl:w-[4.26rem]"
									src={card.icon}
								/>
								<h4 className="text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center lg:text-[1rem] lg:leading-6 2xl:text-[1.25rem] 2xl:leading-[1.875rem]">
									{card.title}
								</h4>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center justify-center lg:items-start lg:w-[45%]">
					<h3 className="mb-[0.62rem] text-white-100 text-[1.25rem] leading-[1.875rem] font-medium text-center lg:text-[1.625rem] lg:leading-[2.4375rem] lg:text-start 2xl:text-[1.875rem] 2xl:leading-[2.8125rem] 2xl:mb-[0.88rem]">
						{data.title}
					</h3>
					<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-[3.88rem]">
						{data.description}
					</p>
					<div className="flex flex-col mb-[3.12rem] md:flex-row md:overflow-clip gap-[1.88rem] 2xl:mb-[3.88rem]">
						{data.stats.map((stat, index) => (
							<React.Fragment key={index}>
								<div>
									<h3 className="mb-[0.12rem] text-green-800 text-[2.5rem] leading-[3.75rem] font-medium text-center 2xl:text-[3.625rem] 2xl:leading-[5.4375rem] 2xl:mb-[0.31rem]">
										{stat.percentage}
									</h3>
									<h4 className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[0.9375rem] lg:leading-[1.40625rem] lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
										{stat.title}
									</h4>
								</div>
								{index !== data.stats.length - 1 && (
									<>
										<img
											className="md:hidden"
											src={dashedDivider}
										/>
										<img
											className="hidden md:block"
											src={dashedDividerVertical}
										/>
									</>
								)}
							</React.Fragment>
						))}
					</div>
					<button className="py-[0.88rem] px-5 bg-grey-900 rounded-full border border-grey-800 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:px-6 2xl:py-[1.12rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
}

export default UseCases;
