import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg?react';
import { pages } from './footer.data';

function Navigation() {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<Logo className="w-[8.28rem] h-[2.13rem] 2xl:w-[9.74rem] 2xl:h-10" />
			<ul className="flex gap-[0.88rem] lg:gap-[1.62rem]">
				{pages.map((page, index) => (
					<Link
						key={index}
						className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-normal lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]"
						to={page.url}
						onClick={() => window.scrollTo(0, 0)}
					>
						{page.title}
					</Link>
				))}
			</ul>
		</div>
	);
}

export default Navigation;
