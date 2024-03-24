import { useState } from 'react';
import arrowIcon from '../../assets/home.testimonials/arrow.svg';
import quotesIcon from '../../assets/home.testimonials/quotes.svg';
import { ToggleLabels } from './Testimonials';
import testimonialsData from './testimonials.data';

function Carousel({ active }: { active: ToggleLabels }) {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	const data =
		active === ToggleLabels.INDIVIDUALS
			? testimonialsData.individuals
			: testimonialsData.businesses;

	const previous = () => {
		if (currentReviewIndex === 0) {
			setCurrentReviewIndex(data.length - 1);
		} else {
			setCurrentReviewIndex(currentReviewIndex - 1);
		}
	};
	const next = () => {
		if (currentReviewIndex === data.length - 1) {
			setCurrentReviewIndex(0);
		} else {
			setCurrentReviewIndex(currentReviewIndex + 1);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="relative p-5 flex flex-col justify-center items-center border border-grey-800 rounded-xl">
				<div className="absolute left-0 h-full w-[50%] bg-gradient-to-r from-grey-1000/60"></div>
				<div className="absolute right-0 h-full w-[50%] bg-gradient-to-l from-grey-1000/60"></div>
				<div className="mb-[1.88rem] w-full flex justify-center items-center">
					<div className="w-full h-px mr-4 bg-gradient-to-l from-grey-800 from-[70%]"></div>
					<img
						src={quotesIcon}
						alt="quotes icon"
					/>
					<div className="w-full h-px ml-4 bg-gradient-to-r from-grey-800 from-[70%]"></div>
				</div>
				<p className="mb-[1.88rem] text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center">
					{data[currentReviewIndex].content}
				</p>
				<p className="text-green-800 text-[1rem] leading-[1.5rem] font-medium">
					{data[currentReviewIndex].username}
				</p>
			</div>
			<div className="mt-[30px]">
				<button
					onClick={previous}
					className="p-3 mr-[10px] rounded-full border border-grey-800 bg-grey-900"
				>
					<img src={arrowIcon} />
				</button>
				<button
					onClick={next}
					className="p-3 ml-[10px] rounded-full border border-grey-800 bg-grey-900"
				>
					<img
						className="transform rotate-180"
						src={arrowIcon}
					/>
				</button>
			</div>
		</div>
	);
}

export default Carousel;
