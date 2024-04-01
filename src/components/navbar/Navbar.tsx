import { useState } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/navbar/close-hamburger.svg';
import hamburgerIcon from '../../assets/navbar/hamburger.svg';
import logo from '../../assets/navbar/logo.svg';
import logoText from '../../assets/navbar/your-bank.svg';
import MobileMenu from './MobileMenu';
import { authenticationPages, pages } from './navbar.data';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		// The external div is utilized to provide the navbar with enough distance from the top of the screen. Using margin (which would be the first margin in the file) would cause the root to be translated downward.
		<div className="relative w-full pt-[5vh] h-[15vh]">
			{isOpen && (
				<div
					onTouchMove={toggleMenu}
					onClick={toggleMenu}
					className="fixed z-30 top-0 left-0 w-screen h-screen bg-black opacity-40"
				></div>
			)}
			<div
				className={`absolute z-50 w-[92%] mx-[calc(8%/2)] py-[0.875rem] pl-6 pr-[0.875rem] flex flex-col items-center bg-grey-900 ${isOpen ? 'rounded-[2rem]' : 'rounded-full'} border border-grey-800 lg:w-[calc(100%-10rem)] lg:mx-20 2xl:w-[calc(100%-20rem)] 2xl:mx-40 2xl:py-5 2xl:px-[2.12rem] 2xl:max-w-[1680px] min-[2000px]:mx-[calc(50%-840px)]`}
			>
				<div className="w-full flex justify-between items-center">
					<Link
						to={'/'}
						onClick={() => setIsOpen(false)}
						className="flex gap-1"
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
						<ul className="flex gap-[1.62rem]">
							{pages.map((page, index) => (
								<li
									key={index}
									className="text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
								>
									<Link to={page.link}>{page.name}</Link>
								</li>
							))}
						</ul>
					</nav>
					<nav className="hidden md:block">
						<ul className="flex gap-5 items-center text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:gap-[1.88rem]">
							{authenticationPages.map((page, index) => (
								<li
									className={`${page.name === 'Login' ? 'px-6 py-3 bg-green-800 text-grey-900 2xl:px-[1.88rem] 2xl:py-[0.88rem]' : ''} rounded-full `}
									key={index}
								>
									<Link to={page.link}>{page.name}</Link>
								</li>
							))}
						</ul>
					</nav>
					<button
						onClick={toggleMenu}
						className={`px-3 py-1 rounded-full ${isOpen ? '' : 'bg-green-800'} md:hidden`}
					>
						<img
							className="w-7"
							src={isOpen ? closeIcon : hamburgerIcon}
							alt="menu icon"
						/>
					</button>
				</div>
				{isOpen && <MobileMenu toggleMenu={toggleMenu} />}
			</div>
		</div>
	);
}

export default Navbar;
