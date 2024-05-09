/* eslint-disable indent */
import quotesIcon from '../../assets/home.testimonials/quotes.svg';

function Review({
	position,
	username,
	content,
	animationDirection = 'none'
}: {
	position: number;
	username: string;
	content: string;
	animationDirection: 'left' | 'right' | 'none';
}) {
	return (
		<div
			className={`border  border-grey-800 min-h-[20rem] overflow-y-hidden p-5 flex-col justify-start items-center rounded-xl md:min-h-[18rem] lg:border-none lg:flex col-span-1 ${getCssAnimationProperties(position, animationDirection)}`}
		>
			<div className="mb-[1.88rem] flex justify-center items-center">
				<div className="w-full h-px mr-4 bg-gradient-to-l from-grey-800 from-[70%]"></div>
				<img
					className="w-11 2xl:w-[3.75rem]"
					src={quotesIcon}
					alt="quotes icon"
				/>
				<div className="w-full h-px ml-4 bg-gradient-to-r from-grey-800 from-[70%]"></div>
			</div>
			<p className="mb-[1.88rem] text-white-100 font-normal text-center text-[1rem] leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				{content}
			</p>
			<p className="text-green-800 text-[1rem] leading-[1.5rem] font-medium text-center 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				{username}
			</p>
		</div>
	);
}

function getCssAnimationProperties(
	position: number,
	animationDirection: 'left' | 'right' | 'none'
) {
	let cssRules = '';

	if (animationDirection != 'none') {
		cssRules += 'transition-transform duration-700 ';
		if (animationDirection === 'left') {
			cssRules += '-translate-x-full origin-left ';
			switch (position) {
				case 0:
					cssRules += 'opacity-0 ';
					break;
				case 1:
					cssRules +=
						'opacity-0 lg:animate-opacity-disappear lg:opacity-0 ';
					break;
				case 2:
					cssRules +=
						'max-lg:animate-opacity-disappear opacity-0 lg:opacity-100 ';
					break;
				case 3:
					cssRules += 'max-lg:animate-opacity-appear opacity-100 ';
					break;
				case 4:
					cssRules +=
						'opacity-0 lg:animate-opacity-appear lg:opacity-100 ';
					break;
				default:
					break;
			}
		} else {
			cssRules += 'translate-x-full origin-right ';
			switch (position) {
				case 0:
					cssRules +=
						'opacity-0 lg:animate-opacity-appear lg:opacity-100 ';
					break;
				case 1:
					cssRules += 'max-lg:animate-opacity-appear opacity-100 ';
					break;
				case 2:
					cssRules +=
						'max-lg:animate-opacity-disappear opacity-0 lg:opacity-100 ';
					break;
				case 3:
					cssRules += 'lg:animate-opacity-disappear opacity-0 ';
					break;
				case 4:
					cssRules += 'opacity-0 ';
					break;
				default:
					break;
			}
		}
	} else if (position === 0 || position === 4) {
		cssRules += 'opacity-0 ';
	} else if (position === 1 || position === 3) {
		cssRules += 'opacity-0 lg:opacity-100 ';
	}
	return cssRules;
}

export default Review;
