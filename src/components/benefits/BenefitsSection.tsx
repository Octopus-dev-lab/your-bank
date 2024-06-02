import React from 'react';
import CrossDivider from '../shared/CrossDivider';
import DashedDivider from '../shared/DashedDivider';
import benefitsData from './benefits.data';

function BenefitsSection() {
	return (
		<div className="mt-20 px-4 lg:mt-[7.5rem] lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Benefits'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:mb-[0.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start lg:mb-[3.75rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-20">
				At YourBank, we value our employees and are dedicated to their
				well-being and success. We offer a comprehensive range of
				benefits designed to support their personal and professional
				growth.
			</p>
			<div className="lg:relative lg:grid lg:grid-cols-2 lg:auto-rows-fr lg:gap-[3.76rem] lg:overflow-clip 2xl:gap-[6.24rem]">
				<CrossDivider />
				{benefitsData.map((benefit, index) => (
					<React.Fragment key={index}>
						<div className="relative mx-auto p-px -z-30 rounded-t-[2.5rem] rounded-b-[0.875rem] bg-gradient-to-tr from-grey-800 to-[#3A441F] from-[80%]">
							<div className="relative h-full w-full  flex flex-col gap-5 rounded-md bg-[#1A1A1A] -z-20 rounded-t-[2.5rem] rounded-b-[0.875rem]">
								<div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80 rounded-t-[2.5rem] rounded-b-[0.875rem] bg-plywood" />
								<div className="h-full w-full p-6 bg-gradient-to-l from-[#1A1A1A] from-40% to-green-800/[0.02] rounded-t-[2.5rem] rounded-b-[0.875rem] lg:p-10 2xl:p-[3.12rem]">
									<div className="flex items-center gap-[0.62rem] mb-5 lg:mb-6 lg:gap-[0.88rem] 2xl:gap-5">
										<benefit.icon className="w-[4.25rem] h-[4.25rem] 2xl:w-[5.38rem] 2xl:h-[5.38rem]" />
										<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal lg:text-[1.25rem] lg:leading-[1.875rem] 2xl:text-[1.5rem] 2xl:leading-[2.25rem]">
											{benefit.title}
										</h3>
									</div>
									<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
										{benefit.description}
									</p>
								</div>
							</div>
						</div>
						{index !== benefitsData.length - 1 && (
							<DashedDivider className="my-6 lg:hidden w-full h-px" />
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default BenefitsSection;
