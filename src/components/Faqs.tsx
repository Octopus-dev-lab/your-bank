import { useState } from 'react';
import downArrowIcon from '../assets/home.faqs/down-arrow.svg';
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
		<div className="mt-20 px-4 flex flex-col justify-center items-center">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] text-center before:content-['Frequently'] before:text-green-800">
				Asked Questions
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				Still you have any questions? Contact our Team via
				support@yourbank.com
			</p>
			<div className="relative">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="relative mb-5 p-[1.88rem] flex flex-col items-center border border-grey-800 rounded-md"
					>
						<h3 className="text-white-100 text-[1.125rem] leading-normal font-medium">
							{faq.title}
						</h3>
						<div className="my-5 w-full h-px bg-grey-800"></div>
						<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
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
				className="py-[0.88rem] px-5 rounded-full border border-grey-800 bg-grey-900 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal flex gap-1"
			>
				{allShown ? 'Hide' : "Load More FAQ'S"}
				<img
					className={allShown ? 'transform rotate-180' : ''}
					src={downArrowIcon}
					alt="arrow"
				/>
			</button>
		</div>
	);
}

export default Faqs;
