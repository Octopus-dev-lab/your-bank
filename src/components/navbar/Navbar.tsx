import { useState } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/navbar/close-hamburger.svg';
import hamburgerIcon from '../../assets/navbar/hamburger.svg';
import logo from '../../assets/navbar/logo.svg';
import logoText from '../../assets/navbar/your-bank.svg';
import MobileMenu from './MobileMenu';

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
				className={`absolute z-50 w-[92%] mx-[calc(8%/2)] py-[0.875rem] pl-6 pr-[0.875rem] flex flex-col items-center bg-grey-900 ${isOpen ? 'rounded-[2rem]' : 'rounded-full'} border border-grey-800`}
			>
				<div className="w-full flex justify-between">
					<Link
						to={'/'}
						className="flex gap-1"
					>
						<img
							src={logo}
							alt="YourBank logo"
						/>
						<img
							src={logoText}
							alt="YourBank name"
						/>
					</Link>
					<button
						onClick={toggleMenu}
						className={`px-3 py-1 rounded-full ${isOpen ? '' : 'bg-green-800'} `}
					>
						<img
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
