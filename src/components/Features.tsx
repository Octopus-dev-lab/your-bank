import { useState } from 'react';
import linkArrowIcon from '../assets/home.features/link-arrow.svg';
import { Filters, featuresContent } from './features.data';

function Features() {
	const [activeFilter, setActiveFilter] = useState<Filters>(
		Filters.ONLINE_BANKING
	);
	const content = featuresContent[activeFilter];
	return (
		<div className="mt-20 px-4">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Features'] after:text-green-800">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				Experience a host of powerful features at YourBank, including
				seamless online banking, secure transactions, and personalized
				financial insights, all designed to enhance your banking
				experience
			</p>
			<div className="p-5 rounded-lg bg-grey-900 overflow-auto whitespace-nowrap">
				{Object.values(Filters).map((filter) => (
					<button
						key={filter}
						className={`mr-5 py-[0.88rem] px-5 border border-grey-800 rounded-full ${
							activeFilter === filter
								? 'bg-grey-1000 text-green-800'
								: 'text-white-100'
						} text-[0.875rem] leading-[1.3125rem] font-normal`}
						onClick={() => setActiveFilter(filter)}
					>
						{filter}
					</button>
				))}
			</div>
			<div>
				{content.map((feature, index) => (
					<div
						key={index}
						className="mt-5 p-[1.88rem] rounded-md border border-grey-800 bg-grey-900"
					>
						<div className="mb-5 flex justify-between items-center">
							<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal">
								{feature.title}
							</h3>
							<img src={linkArrowIcon} />
						</div>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125] font-light tracking-[0.00525rem]">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Features;
