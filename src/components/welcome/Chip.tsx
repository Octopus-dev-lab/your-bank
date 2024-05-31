import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import CheckIcon from '../../assets/svg/check.svg?react';

function Chip({ timeline }: { timeline: gsap.core.Timeline | undefined }) {
	const chipRef = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			timeline &&
				timeline.from(
					chipRef.current,
					{
						opacity: 0,
						y: 20
					},
					'paragraph'
				);
		},
		{ dependencies: [timeline], revertOnUpdate: true }
	);

	return (
		<div
			ref={chipRef}
			className="w-fit pl-2 pr-4 py-2 mb-3 gap-1 flex justify-center items-center bg-grey-800 rounded-full 2xl:py-[0.62rem] 2xl:px-5 2xl:gap-[0.38rem]"
		>
			<CheckIcon className="w-5 h-5 2xl:w-6 2xl:h-6" />
			<p className="text-white-100 text-xs leading-6 font-light lg:text-[0.875rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-6">
				No LLC Required, No Credit Check.
			</p>
		</div>
	);
}

export default Chip;
