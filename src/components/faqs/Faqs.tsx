import { useState } from 'react';
import downArrowIcon from '../../assets/home.faqs/down-arrow.svg';
import faqsData from './faqs.data';

function Faqs() {
	const [contentQty, setContentQty] = useState(4);
	const faqs = faqsData.slice(0, contentQty);
	const allShown = contentQty >= faqsData.length;

	const handleLoadMore = () => {
		if (!allShown) {
			setContentQty(contentQty + 4);
		} else {
			setContentQty(4);
		}
	};

	return (
		<div className="mt-20 px-4 flex flex-col justify-center items-center lg:pt-[7.5rem] lg:px-20 lg:items-start 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center before:content-['Frequently_'] before:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] 2xl:text-[3rem] 2xl:leading-[4.5rem] 2xl:mb-[0.88rem]">
				Asked Questions
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 2xl:mb-20 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				Still you have any questions? Contact our Team via
				support@yourbank.com
			</p>
			<div className="relative lg:mb-5 lg:grid lg:grid-cols-2 lg:gap-5 2xl:gap-[1.88rem]">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="relative mb-5 p-[1.88rem] flex flex-col items-center border border-grey-800 rounded-md lg:mb-0 lg:p-10 2xl:p-[3.12rem]"
					>
						<h3 className="text-white-100 text-[1.125rem] leading-normal font-medium 2xl:text-[1.25rem]">
							{faq.title}
						</h3>
						<div className="my-5 w-full h-px bg-grey-800 lg:my-6 2xl:my-[1.88rem]"></div>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
							{faq.description}
						</p>
					</div>
				))}
				{!allShown && (
					<div className="absolute bottom-0 z-10 w-full h-[300px] bg-gradient-to-t from-grey-1000"></div>
				)}
			</div>
			<button
				onClick={handleLoadMore}
				className="py-[0.88rem] px-5 rounded-full border border-grey-800 bg-grey-900 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal flex gap-1 lg:self-center 2xl:px-6 2xl:py-[1.12rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
			>
				{allShown ? 'Hide' : "Load More FAQ'S"}
				<img
					className={`w-[1.125rem] 2xl:w-[1.375rem] my-auto ${allShown ? 'transform rotate-180' : ''}`}
					src={downArrowIcon}
					alt="arrow"
				/>
			</button>
		</div>
	);
}

export default Faqs;
