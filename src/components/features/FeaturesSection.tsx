import { useState } from 'react';
import Features from './Features';
import FiltersMenu from './FiltersMenu';
import { Filters, featuresContent } from './features.data';

function FeaturesSection() {
	const [activeFilter, setActiveFilter] = useState<Filters>(
		Filters.ONLINE_BANKING
	);
	const content = featuresContent[activeFilter];
	return (
		<div className="mt-20 px-4 lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Features'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:text-[3rem] 2xl:leading-[4.5rem] 2xl:mb-[0.88rem]">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start lg:mb-[3.75rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-20">
				Experience a host of powerful features at YourBank, including
				seamless online banking, secure transactions, and personalized
				financial insights, all designed to enhance your banking
				experience
			</p>
			<div className="lg:flex lg:justify-start lg:gap-5">
				<FiltersMenu
					activeFilter={activeFilter}
					setActiveFilter={setActiveFilter}
				/>
				<Features content={content} />
			</div>
		</div>
	);
}

export default FeaturesSection;
