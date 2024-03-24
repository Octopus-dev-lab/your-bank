import React from 'react';
import dashedDivider from '../assets/home.products/shared/dashed-divider.svg';
import radialAbstract from '../assets/home.products/shared/radial-abstract.svg';
import useCasesData from './useCases.data';

function UseCases({ individuals = true }: { individuals?: boolean }) {
	const data = individuals ? useCasesData.individuals : useCasesData.business;
	return (
		<div className="mt-20 p-4 flex flex-col justify-center items-center">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-medium">
				Use Cases
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				At YourBank, we cater to the diverse needs of individuals and
				businesses alike, offering a wide range of financial solutions
			</p>
			<div className="relative">
				<img
					className="absolute top-0 left-0"
					src={radialAbstract}
				/>
				<div className="mb-[1.88rem] p-5 grid grid-cols-2 grid-rows-2 rounded-2xl bg-grey-900 gap-[0.62rem]">
					{data.cardsData.map((card, index) => (
						<div
							key={index}
							className="py-5 px-[0.88rem] border border-grey-800 rounded-lg bg-grey-1000 z-10"
						>
							<img
								className="mx-auto mb-[0.88rem]"
								src={card.icon}
							/>
							<h4 className="text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center">
								{card.title}
							</h4>
						</div>
					))}
				</div>
			</div>
			<h3 className="mb-[0.62rem] text-white-100 text-[1.25rem] leading-[1.875rem] font-medium">
				{data.title}
			</h3>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				{data.description}
			</p>
			<div className="flex flex-col mb-[3.12rem]">
				{data.stats.map((stat, index) => (
					<React.Fragment key={index}>
						<div>
							<h3 className="mb-[0.12rem] text-green-800 text-[2.5rem] leading-[3.75rem] font-medium text-center">
								{stat.percentage}
							</h3>
							<h4 className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
								{stat.title}
							</h4>
						</div>
						{index !== data.stats.length - 1 && (
							<img
								className="my-[1.88rem]"
								src={dashedDivider}
							/>
						)}
					</React.Fragment>
				))}
			</div>
			<button className="py-[0.88rem] px-5 bg-grey-900 rounded-full border border-grey-800 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal">
				Learn More
			</button>
		</div>
	);
}

export default UseCases;
