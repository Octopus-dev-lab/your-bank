import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import closeIcon from '../../assets/navbar/close-hamburger.svg';
import hamburgerIcon from '../../assets/navbar/hamburger.svg';
import logo from '../../assets/navbar/logo.svg';
import logoText from '../../assets/navbar/your-bank.svg';
import MobileMenu from './MobileMenu';
import { authenticationPages, pages } from './navbar.data';

function Navbar() {
	const navbarRef = useRef<HTMLDivElement>(null);
	const location = useLocation().pathname;
	const [isOpen, setIsOpen] = useState(false);
	const [tl, setTl] = useState<gsap.core.Timeline>();

	const { contextSafe } = useGSAP(
		() => {
			gsap.set(navbarRef.current, { y: -40, autoAlpha: 0 });
			gsap.to(navbarRef.current, {
				y: 0,
				autoAlpha: 1,
				duration: 0.5
			});
			const tl = gsap.timeline({ paused: true });
			tl.to('.background', {
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				duration: 0.5
			});
			setTl(tl);
		},
		{ scope: navbarRef }
	);

	const closeMenu = contextSafe(() => {
		if (tl) {
			tl.reverse().eventCallback('onReverseComplete', () => {
				const newTl = gsap.timeline({ paused: true });
				newTl.to('.background', {
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
					duration: 0.5
				});
				setTl(newTl);
				setIsOpen(false);
			});
		} else {
			setIsOpen(false);
		}
	});

	const openMenu = contextSafe(() => {
		setIsOpen(true);
	});

	return (
		// The external div is utilized to provide the navbar with enough distance from the top of the screen. Using margin (which would be the first margin in the file) would cause the root to be translated downward.
		<div
			ref={navbarRef}
			className="relative w-full pt-[5vh] h-[15vh]"
		>
			<div
				onTouchMove={closeMenu}
				onClick={closeMenu}
				className={`${isOpen ? 'visible' : 'hidden'} background fixed z-30 top-0 left-0 w-screen h-screen`}
			></div>

			<div
				className={`absolute z-50 w-[92%] mx-[calc(8%/2)] py-[0.875rem] pl-6 pr-[0.875rem] flex flex-col items-center bg-grey-900 ${isOpen ? 'rounded-[2rem]' : 'rounded-full'} border border-grey-800 lg:static lg:w-[calc(100%-10rem)] lg:max-w-[1240px] lg:mx-auto 2xl:w-[calc(100%-20rem)] 2xl:max-w-[1680px] 2xl:mx-auto 2xl:py-5 2xl:px-[2.12rem]`}
			>
				<div className="w-full flex justify-between items-center">
					<Link
						to={'/your-bank/'}
						onClick={closeMenu}
						className={`flex gap-1 ${location === '/your-bank/' && 'hover:cursor-default'}`}
					>
						<img
							className="w-[1.625rem] lg:w-[1.875rem] 2xl:w-10"
							src={logo}
							alt="YourBank logo"
						/>
						<img
							className="w-[4.5rem] lg:w-[5.23438rem] 2xl:w-28"
							src={logoText}
							alt="YourBank name"
						/>
					</Link>
					<nav className="hidden md:block">
						<ul className="flex">
							{pages.map((page, index) => (
								<li key={index}>
									<Link
										to={page.link}
										className={`py-[0.5rem] px-[0.81rem] text-[0.875rem] leading-[1.3125rem] font-normal 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] rounded-full ${location === page.link ? 'text-green-800 hover:cursor-default' : ' hover:bg-grey-800 text-white-100'}`}
									>
										{page.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<nav className="hidden md:block">
						<ul className="flex gap-2 items-center text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
							{authenticationPages.map((page, index) => (
								<li key={index}>
									<Link
										to={page.link}
										className={`${page.name === 'Login' ? 'px-6 py-3 bg-green-800 text-grey-900 2xl:px-[1.88rem] 2xl:py-[0.88rem] hover:bg-green-800/95' : 'hover:bg-grey-800 px-6 py-3'} rounded-full `}
									>
										{page.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<button
						onClick={isOpen ? closeMenu : openMenu}
						className={`px-3 py-1 rounded-full ${isOpen ? '' : 'bg-green-800'} md:hidden`}
					>
						<img
							className="w-7"
							src={isOpen ? closeIcon : hamburgerIcon}
							alt="menu icon"
						/>
					</button>
				</div>
				{isOpen && (
					<MobileMenu
						closeMenu={closeMenu}
						timeline={tl}
					/>
				)}
			</div>
		</div>
	);
}

export default Navbar;
