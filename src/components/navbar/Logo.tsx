import { Link, useLocation } from 'react-router-dom';
import LogoSvg from '../../assets/svg/logo.svg?react';

function Logo({ closeMenu }: { closeMenu: () => void }) {
	const location = useLocation().pathname;

	return (
		<Link
			to={'/your-bank/'}
			aria-disabled={location === '/your-bank/'}
			onClick={closeMenu}
			className={`flex gap-1 ${location === '/your-bank/' && 'hover:cursor-default'}`}
		>
			<LogoSvg className="w-[6.33rem] h-[1.63rem] lg:w-[7.3rem] lg:h-[1.88rem] 2xl:w-[9.74rem] 2xl:h-[2.5rem]" />
		</Link>
	);
}

export default Logo;
