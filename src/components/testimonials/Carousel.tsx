import { useState } from 'react';
import arrowIcon from '../../assets/home.testimonials/arrow.svg';
import Review from './Review';
import { ToggleLabels } from './Testimonials';
import testimonialsData from './testimonials.data';

function Carousel({ active }: { active: ToggleLabels }) {
	const [animationDirection, setAnimationDirection] = useState<
		'left' | 'right' | 'none'
	>('none');
	const data =
		active === ToggleLabels.INDIVIDUALS
			? testimonialsData.individuals
			: testimonialsData.businesses;
	const move = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			setAnimationDirection('left');
			setTimeout(() => {
				setAnimationDirection('none');
				const movedItem = data.shift();
				data.push(movedItem!);
			}, 700);
		} else if (direction === 'right') {
			setAnimationDirection('right');
			setTimeout(() => {
				setAnimationDirection('none');
				const movedItem = data.pop();
				data.unshift(movedItem!);
			}, 700);
		}
	};

	return (
		<div className="flex flex-col justify-between items-center w-full h-[26rem]  xl:flex-row">
			<button
				onClick={() => move('right')}
				className="hidden min-w-max xl:block p-3 mr-[3.12rem] rounded-full border border-grey-800 bg-grey-900 2xl:p-[0.88rem] z-20"
			>
				<img
					className="2xl:w-[2.125rem]"
					src={arrowIcon}
				/>
			</button>
			<div className="relative flex w-full">
				<div className="absolute left-0 z-10 h-full w-[50%] bg-gradient-to-r from-grey-1000/60"></div>
				<div className="w-full grid -translate-x-[200%] auto-cols-[100%] grid-flow-col lg:-translate-x-[33.3333%] lg:auto-cols-[33.3333%]">
					{data.slice(0, 5).map((review, index) => (
						<Review
							key={index}
							position={index}
							username={review.username}
							content={review.content}
							animationDirection={animationDirection}
						/>
					))}
				</div>
				<div className="absolute -right-0 z-10 h-full w-[50%] bg-gradient-to-l from-grey-1000/60"></div>
			</div>
			<button
				onClick={() => move('left')}
				className="hidden min-w-max p-3 ml-[3.12rem] rounded-full border border-grey-800 bg-grey-900 xl:block 2xl:p-[0.88rem] z-20"
			>
				<img
					className="transform rotate-180 2xl:w-[2.125rem]"
					src={arrowIcon}
				/>
			</button>
			<div className="mt-[30px] xl:hidden">
				<button
					onClick={() => move('right')}
					className="p-3 mr-3 rounded-full border border-grey-800 bg-grey-900 lg:mr-14"
				>
					<img src={arrowIcon} />
				</button>
				<button
					onClick={() => move('left')}
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
