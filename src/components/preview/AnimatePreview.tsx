import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function AnimatePreview({
	scope,
	children
}: {
	scope: React.RefObject<HTMLElement>;
	children: React.ReactNode;
}) {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			if (scope.current) {
				gsap.set(containerRef.current, {
					height: scope.current.offsetHeight
				});
			}

			gsap.set(containerRef.current, { opacity: 0 });

			const stackTimeline = gsap.timeline();
			stackTimeline.to('#transaction-0-card', {
				y: 0,
				opacity: 1
			});
			stackTimeline.to(
				'#transaction-1-card',
				{
					y: 0,
					opacity: 0.5
				},
				'<0.1'
			);
			stackTimeline.to(
				'#transaction-2-card',
				{
					opacity: 0.2
				},
				0
			);

			const tableTimeline = gsap.timeline();
			tableTimeline.to('#exchange-table', {
				scaleX: 1,
				opacity: 1
			});
			tableTimeline.to('.table-content', { opacity: 1, stagger: 0.1 });
			tableTimeline.to('#exchange-button', { opacity: 1, y: 0 }, '<0.2');

			const mainTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: '20% bottom'
				}
			});
			mainTimeline.set(containerRef.current, { opacity: 1 });
			mainTimeline.set('.hidden-on-start', { opacity: 0 }, 0);
			mainTimeline.set('.titles', { y: -20 }, 0);
			mainTimeline.set('#preview-box', { opacity: 0, height: 0 }, 0);
			mainTimeline.set(
				'#transaction-0-card',
				{
					y: '200%'
				},
				0
			);
			mainTimeline.set(
				'#transaction-1-card',
				{
					y: '100%'
				},
				0
			);
			mainTimeline.set('#exchange-table', { scaleX: 0 }, 0);
			mainTimeline.set('#exchange-button', { y: -40 }, 0);
			mainTimeline.to('#preview-box', {
				opacity: 1,
				height: 'auto'
			});
			mainTimeline.to(
				'.titles',
				{
					opacity: 1,
					y: 0
				},
				'<0.4'
			);
			mainTimeline.addLabel('start-contents', '<0.2');
			mainTimeline.add(stackTimeline, 'start-contents');
			mainTimeline.add(tableTimeline, 'start-contents');
			mainTimeline.to(
				'#currency-chip',
				{
					keyframes: {
						zIndex: [-50, -50, 0],
						opacity: [0, 1, 1],
						y: ['-60%', '60%', '0%']
					},
					duration: 1
				},
				'<0.2'
			);
			mainTimeline.from(
				'#floating-chip',
				{
					keyframes: {
						zIndex: [-50, -50, 0],
						opacity: [0, 1, 1],
						y: ['60%', '-60%', '0%'],
						x: ['50%', '-50%', '0%']
					},
					duration: 1
				},
				'<0.2'
			);
		},
		{ scope }
	);

	return (
		<div
			ref={containerRef}
			className="mt-20 relative max-w-[398px] mx-auto lg:max-w-none lg:w-1/2"
		>
			{children}
		</div>
	);
}

export default AnimatePreview;
