import React from 'react';
import divider from '../../assets/careers.benefits/divider.svg';
import benefitsData from './benefits.data';

function Benefits() {
	return (
		<div className="mt-20 px-4 lg:mt-[7.5rem] lg:px-20">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Benefits'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start lg:mb-[3.75rem]">
				At YourBank, we value our employees and are dedicated to their
				well-being and success. We offer a comprehensive range of
				benefits designed to support their personal and professional
				growth.
			</p>
			<div className="lg:relative lg:grid lg:grid-cols-2 lg:auto-rows-fr lg:gap-[3.76rem] lg:overflow-clip">
				<div
					className={
						'hidden lg:block absolute top-1/2 -translate-y-1/2 w-full h-[3.76rem] bg-repeat-x bg-left opacity-50'
					}
					style={{ backgroundImage: `url('${divider}')` }}
				/>

				<div
					className={
						'hidden lg:block absolute top-1/2 w-full h-[3.76rem] bg-repeat-x bg-left rotate-90 opacity-50'
					}
					style={{ backgroundImage: `url('${divider}')` }}
				/>
				{benefitsData.map((benefit, index) => (
					<React.Fragment key={index}>
						<div className="relative mx-auto p-px -z-30 rounded-t-[2.5rem] rounded-b-[0.875rem] bg-gradient-to-tr from-grey-800 to-[#3A441F] from-[80%]">
							<div className="relative h-full w-full  flex flex-col gap-5 rounded-md bg-[#1A1A1A] -z-20 rounded-t-[2.5rem] rounded-b-[0.875rem]">
								<div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80 rounded-t-[2.5rem] rounded-b-[0.875rem] bg-plywood" />
								<div className="h-full w-full p-6 bg-gradient-to-l from-[#1A1A1A] from-40% to-green-800/[0.02] rounded-t-[2.5rem] rounded-b-[0.875rem] lg:p-10">
									<div className="flex items-center gap-[0.62rem] mb-5 lg:mb-6 lg:gap-[0.88rem]">
										<img
											src={benefit.icon}
											alt={benefit.alt}
										/>
										<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal lg:text-[1.25rem] lg:leading-[1.875rem]">
											{benefit.title}
										</h3>
									</div>
									<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-6">
										{benefit.description}
									</p>
								</div>
							</div>
						</div>
						{index !== benefitsData.length - 1 && (
							<img
								className="my-6 lg:hidden"
								src={divider}
							/>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default Benefits;
