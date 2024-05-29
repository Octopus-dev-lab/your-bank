import { ReactSVG } from 'react-svg';
import closeIcon from '../../assets/svg/close-hamburger.svg';
import hamburgerIcon from '../../assets/svg/hamburger.svg';

function Hamburger({
	isOpen,
	openMenu,
	closeMenu
}: {
	isOpen: boolean;
	openMenu: () => void;
	closeMenu: () => void;
}) {
	return (
		<button
			onClick={isOpen ? closeMenu : openMenu}
			className={`inline-block px-3 py-1 rounded-full ${isOpen ? '' : 'bg-green-800'} md:hidden`}
		>
			<ReactSVG
				className="w-[1.75rem] h-[1.75rem]"
				src={isOpen ? closeIcon : hamburgerIcon}
				fallback={() => (
					<img
						className="text-white-100 text-xs leading-6 font-light lg:text-[0.875rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-6 overflow-visible"
						src=""
						alt="Hamburger icon"
					/>
				)}
				title="Hamburger icon"
			/>
		</button>
	);
}

export default Hamburger;
