import { useState } from 'react';
import DesktopButton from './DesktopButton';
import MobileButtons from './MobileButtons';
import Review from './Review';
import { ToggleLabels } from './TestimonialsSection';
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
			<DesktopButton onClick={() => move('right')} />
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
			<DesktopButton
				isNext={true}
				onClick={() => move('left')}
			/>
			<MobileButtons
				onClickLeft={() => move('right')}
				onClickRight={() => move('left')}
			/>
		</div>
	);
}

export default Carousel;
