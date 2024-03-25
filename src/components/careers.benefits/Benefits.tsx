import React from 'react';
import bgTexture from '../../assets/careers.benefits/bg-texture.webp';
import divider from '../../assets/careers.benefits/divider.svg';
import benefitsData from './benefits.data';

function Benefits() {
	return (
		<div className="mt-20 px-4">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Benefits'] after:text-green-800">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				At YourBank, we value our employees and are dedicated to their
				well-being and success. We offer a comprehensive range of
				benefits designed to support their personal and professional
				growth.
			</p>
			{benefitsData.map((benefit, index) => (
				<React.Fragment key={index}>
					<div className="relative mx-auto p-px -z-30 rounded-t-[2.5rem] rounded-b-[0.875rem] bg-gradient-to-tr from-grey-800 to-[#3A441F] from-[80%]">
						<div className="relative h-full w-full  flex flex-col gap-5 rounded-md bg-[#1A1A1A] -z-20 rounded-t-[2.5rem] rounded-b-[0.875rem]">
							<img
								className="absolute top-0 left-0 w-full h-full -z-10 opacity-80 rounded-t-[2.5rem] rounded-b-[0.875rem]"
								src={bgTexture}
								alt="background texture"
							/>
							<div className="h-full w-full p-6 bg-gradient-to-l from-[#1A1A1A] from-40% rounded-t-[2.5rem] rounded-b-[0.875rem]">
								<div className="flex items-center gap-[0.62rem] bg-gradient-to-l from-[#1A1A1A] from-55%">
									<img
										src={benefit.icon}
										alt={benefit.alt}
									/>
									<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal">
										{benefit.title}
									</h3>
								</div>
								<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
									{benefit.description}
								</p>
							</div>
						</div>
					</div>
					{index !== benefitsData.length - 1 && (
						<img
							className="my-6"
							src={divider}
						/>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

export default Benefits;
