import React from 'react';
import productsData from './products.data';

function Services() {
	return (
		<div className="px-[0.62rem] flex flex-col justify-center items-center">
			{productsData.map((product, index) => (
				<React.Fragment key={index}>
					<div className="flex flex-col justify-center items-center">
						<img
							className="mb-5"
							src={product.icon}
						/>
						<h3 className="mb-3 text-white-100 text-[1.25rem] leading-[1.875rem] font-normal">
							{product.title}
						</h3>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
							{product.description}
						</p>
					</div>
					{index !== productsData.length - 1 && (
						<div className="my-[1.88rem] h-px w-full bg-grey-800"></div>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

export default Services;
