import React from 'react';
import productsData from './products.data';

function Services() {
	return (
		<div className="px-[0.62rem] flex flex-col justify-center items-center lg:flex-row">
			{productsData.map((product, index) => (
				<React.Fragment key={index}>
					<div className="flex flex-col justify-center items-center">
						<product.icon className="mb-5 w-16 h-16 2xl:w-[5.38rem] 2xl:h-[5.38rem]" />
						<h3 className="mb-3 text-white-100 text-[1.25rem] leading-[1.875rem] font-normal lg:mb-4 2xl:text-[1.5rem] 2xl:leading-9 2xl:mb-5">
							{product.title}
						</h3>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
							{product.description}
						</p>
					</div>
					{index !== productsData.length - 1 && (
						<div className="my-[1.88rem] h-px w-full bg-grey-800 lg:h-[16rem] lg:w-1 lg:mx-10 lg:my-0 2xl:mx-[3.12rem]"></div>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

export default Services;
