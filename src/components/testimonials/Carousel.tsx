import { useState } from 'react';
import arrowIcon from '../../assets/home.testimonials/arrow.svg';
import quotesIcon from '../../assets/home.testimonials/quotes.svg';
import { ToggleLabels } from './Testimonials';
import testimonialsData from './testimonials.data';

function Carousel({ active }: { active: ToggleLabels }) {
	const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
	const previusReviewIndex =
		currentReviewIndex === 0
			? testimonialsData.individuals.length - 1
			: currentReviewIndex - 1;
	const nextReviewIndex =
		currentReviewIndex === testimonialsData.individuals.length - 1
			? 0
			: currentReviewIndex + 1;
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
		<div className="flex flex-col justify-center items-center xl:flex-row overflow-x-visible">
			<button
				onClick={previous}
				className="hidden min-w-max xl:block p-3 mr-[3.12rem] rounded-full border border-grey-800 bg-grey-900 2xl:p-[0.88rem]"
			>
				<img
					className="2xl:w-[2.125rem]"
					src={arrowIcon}
				/>
			</button>
			<div className="relative lg:grid lg:grid-cols-3">
				<div className="absolute left-0 h-full w-[50%] bg-gradient-to-r from-grey-1000/60"></div>
				<div className="hidden p-5 lg:flex flex-col justify-start items-center rounded-xl">
					<div className="mb-[1.88rem] w-full flex justify-center items-center">
						<div className="w-full h-px mr-4 bg-gradient-to-l from-grey-800 from-[70%]"></div>
						<img
							className="w-11 2xl:w-[3.75rem]"
							src={quotesIcon}
							alt="quotes icon"
						/>
						<div className="w-full h-px ml-4 bg-gradient-to-r from-grey-800 from-[70%]"></div>
					</div>
					<p className="mb-[1.88rem] text-white-100 font-normal text-center text-[1rem] leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{data[previusReviewIndex].content}
					</p>
					<p className="text-green-800 text-[1rem] leading-[1.5rem] font-medium 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{data[previusReviewIndex].username}
					</p>
				</div>
				<div className="relative p-5 flex flex-col justify-start items-center border border-grey-800 rounded-xl lg:border-none">
					<div className="absolute left-0 h-full w-[50%] bg-gradient-to-r from-grey-1000/60 lg:hidden"></div>
					<div className="absolute right-0 h-full w-[50%] bg-gradient-to-l from-grey-1000/60 lg:hidden"></div>
					<div className="mb-[1.88rem] w-full flex justify-center items-center">
						<div className="w-full h-px mr-4 bg-gradient-to-l from-grey-800 from-[70%]"></div>
						<img
							src={quotesIcon}
							alt="quotes icon"
						/>
						<div className="w-full h-px ml-4 bg-gradient-to-r from-grey-800 from-[70%]"></div>
					</div>
					<p className="mb-[1.88rem] text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal text-center lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{data[currentReviewIndex].content}
					</p>
					<p className="text-green-800 text-[1rem] leading-[1.5rem] font-medium 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{data[currentReviewIndex].username}
					</p>
				</div>
				<div className="hidden relative p-5 lg:flex flex-col justify-start items-center border-grey-800 rounded-xl">
					<div className="mb-[1.88rem] w-full flex justify-center items-center">
						<div className="w-full h-px mr-4 bg-gradient-to-l from-grey-800 from-[70%]"></div>
						<img
							src={quotesIcon}
							alt="quotes icon"
						/>
						<div className="w-full h-px ml-4 bg-gradient-to-r from-grey-800 from-[70%]"></div>
					</div>
					<p className="mb-[1.88rem] text-white-100 font-normal text-center text-[1rem] leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{data[nextReviewIndex].content}
					</p>
					<p className="text-green-800 text-[1rem] leading-[1.5rem] font-medium 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{data[nextReviewIndex].username}
					</p>
				</div>
				<div className="absolute right-0 h-full w-[50%] bg-gradient-to-l from-grey-1000/60"></div>
			</div>
			<button
				onClick={next}
				className="hidden min-w-max p-3 ml-[3.12rem] rounded-full border border-grey-800 bg-grey-900 xl:block 2xl:p-[0.88rem]"
			>
				<img
					className="transform rotate-180 2xl:w-[2.125rem]"
					src={arrowIcon}
				/>
			</button>
			<div className="mt-[30px] xl:hidden">
				<button
					onClick={previous}
					className="p-3 mr-3 rounded-full border border-grey-800 bg-grey-900 lg:mr-14"
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
