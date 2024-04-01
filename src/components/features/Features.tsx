import { useState } from 'react';
import linkArrowIcon from '../../assets/home.features/link-arrow.svg';
import { Filters, featuresContent } from './features.data';

function Features() {
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
				<div className="p-5 rounded-lg bg-grey-900 overflow-auto whitespace-nowrap min-[690px]:flex min-[690px]:justify-center min-[690px]:gap-5 min-[690px]:overflow-hidden lg:flex lg:flex-col lg:p-10 lg:h-min lg:w-max lg:overflow-visible 2xl:p-[3.12rem]">
					{Object.values(Filters).map((filter) => (
						<button
							key={filter}
							className={`mr-5 py-[0.88rem] px-5 border border-grey-800 rounded-full ${
								activeFilter === filter
									? 'bg-grey-1000 text-green-800'
									: 'text-white-100'
							} text-[0.875rem] leading-[1.3125rem] font-normal min-[690px]:mr-0 lg:w-full 2xl:px-6 2xl:py-[1.12rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]`}
							onClick={() => setActiveFilter(filter)}
						>
							{filter}
						</button>
					))}
				</div>
				<div className="lg:grid lg:grid-cols-2 lg:gap-5 2xl:gap-[1.88rem]">
					{content.map((feature, index) => (
						<div
							key={index}
							className="mt-5 p-[1.88rem] rounded-md border border-grey-800 bg-grey-900 lg:mt-0 lg:p-10 2xl:p-[3.12rem]"
						>
							<div className="mb-5 flex justify-between items-center lg:mb-6 2xl:mb-[1.88rem]">
								<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal 2xl:text-[1.375rem] 2xl:leading-[2.0625rem]">
									{feature.title}
								</h3>
								<img src={linkArrowIcon} />
							</div>
							<p className="text-grey-200 text-[0.875rem] leading-[1.3125] font-light -tracking-[0.00525rem] lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
