import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function BackToTop() {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useGSAP(() => {
		gsap.set(buttonRef.current, { y: '50px' });
		gsap.to(buttonRef.current, {
			scrollTrigger: {
				trigger: 'body',
				start: () => '+=' + window.innerHeight * 1.8 + ' bottom',
				toggleActions: 'play none none reverse',
				endTrigger: 'footer',
				end: 'top bottom',
				onLeave: () => {
					const footerDistance =
						document.querySelector('footer')?.offsetTop;
					if (footerDistance && buttonRef.current) {
						gsap.set(buttonRef.current, {
							position: 'absolute',
							top: () =>
								footerDistance! -
								buttonRef.current!.offsetHeight * 2
						});
					}
				},
				onEnterBack: () => {
					gsap.set(buttonRef.current, {
						clearProps: 'top',
						position: 'fixed'
					});
				},
				invalidateOnRefresh: true,
				markers: true
			},
			display: 'block',
			opacity: 1,
			y: 0,
			duration: 0.5
		});
	});

	return (
		<button
			ref={buttonRef}
			className="fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10 w-14 h-14 rounded-full bg-green-800 hover:bg-green-800/95 hidden opacity-0"
			onClick={() =>
				gsap.to(window, {
					scrollTo: 0,
					duration: 1,
					ease: 'power2.out'
				})
			}
		>
			<svg
				className="m-auto"
				xmlns="http://www.w3.org/2000/svg"
				height="32px"
				viewBox="0 -960 960 960"
				width="32px"
				fill="#1c1c1c"
			>
				<path d="m296-345-56-56 240-240 240 240-56 56-184-183-184 183Z" />
			</svg>
		</button>
	);
}

export default BackToTop;
