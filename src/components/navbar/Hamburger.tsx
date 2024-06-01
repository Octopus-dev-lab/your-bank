import CloseIcon from '../../assets/svg/close-hamburger.svg?react';
import HamburgerIcon from '../../assets/svg/menu-hamburger.svg?react';

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
			{isOpen ? (
				<CloseIcon className="w-7 h-7" />
			) : (
				<HamburgerIcon className="w-7 h-7" />
			)}
		</button>
	);
}

export default Hamburger;
