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
				src={isOpen ? closeIcon : hamburgerIcon}
				fallback={() => (
					<div className="w-[1.75rem] h-[1.75rem] overflow-visible">
						<img
							className="text-white-400 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
							src=""
							alt="Hamburger icon"
						/>
					</div>
				)}
				title="Hamburger icon"
			/>
		</button>
	);
}

export default Hamburger;
