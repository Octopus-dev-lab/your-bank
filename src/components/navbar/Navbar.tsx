import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import AuthLinks from './AuthLinks';
import Hamburger from './Hamburger';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import PagesLinks from './PagesLinks';

function Navbar() {
	const navbarRef = useRef<HTMLDivElement>(null);
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
			className="relative w-full pt-[5vh] h-[15vh] z-50"
		>
			<div
				className={`absolute z-10 w-[92%] h-max mx-[calc(8%/2)] py-[0.875rem] pl-6 pr-[0.875rem] flex flex-col items-center bg-grey-900 ${isOpen ? 'rounded-[2rem]' : 'rounded-full'} border border-grey-800 lg:static lg:w-[calc(100%-10rem)] lg:max-w-[1240px] lg:mx-auto 2xl:w-[calc(100%-20rem)] 2xl:max-w-[1680px] 2xl:mx-auto 2xl:py-5 2xl:px-[2.12rem]`}
			>
				<div className="w-full flex justify-between items-center">
					<Logo closeMenu={closeMenu} />
					<PagesLinks />
					<AuthLinks />
					<Hamburger
						isOpen={isOpen}
						openMenu={openMenu}
						closeMenu={closeMenu}
					/>
				</div>
				{isOpen && (
					<MobileMenu
						closeMenu={closeMenu}
						timeline={tl}
					/>
				)}
			</div>
			<div
				onTouchMove={closeMenu}
				onClick={closeMenu}
				className={`${isOpen ? 'visible' : 'hidden'} background fixed top-0 left-0 w-screen h-screen`}
			></div>
		</div>
	);
}

export default Navbar;

//TODO: Sostituire il logo composto da due immagini con un'unica immagine SVG
//TODO: Caricare l'svg del logo in base alla dimensione dello schermo
