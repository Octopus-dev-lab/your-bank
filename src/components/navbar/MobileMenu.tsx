import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { authenticationPages, pages } from './navbar.data';

function MobileMenu({
	closeMenu,
	timeline
}: {
	closeMenu: () => void;
	timeline: gsap.core.Timeline | undefined;
}) {
	const ref = useRef(null);
	useGSAP(
		() => {
			timeline &&
				timeline

					.to(
						ref.current,
						{
							height: 'auto',
							duration: 0.75,
							ease: 'power4.out'
						},
						'<'
					)
					.from(
						'.divider',
						{
							width: 0,
							duration: 0.5,
							stagger: 0.1
						},
						'-=0.6'
					)
					.fromTo(
						'.link',
						{
							autoAlpha: 0,
							y: 20
						},
						{
							autoAlpha: 1,
							y: 0,
							duration: 0.5,
							stagger: 0.1
						},
						'<'
					)
					.from(
						'.signup',
						{
							autoAlpha: 0,
							x: -100,
							duration: 0.5
						},
						'<'
					)
					.from(
						'.login',
						{
							autoAlpha: 0,
							x: 100,
							duration: 0.5
						},
						'<'
					);
			timeline?.play();
		},
		{ scope: ref }
	);

	return (
		<nav
			ref={ref}
			className="h-0 w-full flex flex-col justify-center items-center pt-10 px-10 pb-[1.625rem] overflow-hidden"
		>
			<ul className="w-full mb-10 text-center text-white text-lg md:hidden flex flex-col gap-4">
				{pages.map((page, index) => (
					<React.Fragment key={index}>
						<li className="link text-white-100 text-[1.125rem] leading-[1.6875rem] font-light">
							<Link
								to={page.link}
								onClick={closeMenu}
							>
								{page.name}
							</Link>
						</li>

						<li>
							<div className="divider h-px w-full bg-white-500 opacity-5"></div>
						</li>
					</React.Fragment>
				))}
			</ul>
			<div className="flex gap-2 justify-center items-center text-white-100 text-[1.125rem] leading-[1.6875rem] font-light">
				{authenticationPages.map((page, index) => (
					<Link
						className={`px-6 py-[0.88rem] ${page.name === 'Login' ? 'bg-green-800 text-grey-900 login' : 'signup'} rounded-full`}
						key={index}
						to={page.link}
						onClick={closeMenu}
					>
						{page.name}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default MobileMenu;
