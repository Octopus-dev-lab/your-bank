import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Chip from './Chip';

function WelcomeSection() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);
	const linkRef = useRef(null);
	const [timeline, setTimeline] = useState<gsap.core.Timeline>();

	useGSAP(
		() => {
			const tilmeline = gsap.timeline({ duration: 0.7 });
			setTimeline(tilmeline);
			tilmeline.from(titleRef.current, {
				opacity: 0
			});
			timeline?.addLabel('paragraph');
			tilmeline.from(
				paragraphRef.current,
				{
					opacity: 0,
					y: -20
				},
				'paragraph'
			);
			tilmeline.from(
				linkRef.current,
				{
					opacity: 0,
					y: -30
				},
				'paragraph'
			);
		},
		{ scope: containerRef }
	);

	return (
		<div
			ref={containerRef}
			className="px-4 flex flex-col justify-center items-center gap-2 lg:w-1/2 lg:items-start"
		>
			<Chip timeline={timeline} />
			<h1
				ref={titleRef}
				className="text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Financial_Journey'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:text-[3rem] 2xl:leading-[4.5rem]"
			>
				Welcome to YourBank
				<br />
				Empowering Your
			</h1>
			<p
				ref={paragraphRef}
				className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
			>
				At YourBank, our mission is to provide comprehensive banking
				solutions that empower individuals and businesses to achieve
				their financial goals. We are committed to delivering
				personalized and innovative services that prioritize our
				customers' needs.
			</p>
			<Link
				ref={linkRef}
				to={'/your-bank/signup'}
				className="open-account mt-6 py-[0.88rem] px-6 bg-green-800 rounded-full text-grey-900 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:py-[1.12rem] 2xl:px-[1.88rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] hover:bg-green-800/95"
			>
				Open account
			</Link>
		</div>
	);
}

export default WelcomeSection;
