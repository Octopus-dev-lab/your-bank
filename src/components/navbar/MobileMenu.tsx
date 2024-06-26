import React from 'react';
import { Link } from 'react-router-dom';
import { authenticationPages, pages } from './navbar.data';

function MobileMenu({ toggleMenu }: { toggleMenu: () => void }) {
	return (
		<nav className="w-full flex flex-col justify-center items-center pt-10 px-10 pb-[1.625rem]">
			<ul className="w-full mb-10 text-center text-white text-lg md:hidden flex flex-col gap-4">
				{pages.map((page, index) => (
					<React.Fragment key={index}>
						<li className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-light">
							<Link
								to={page.link}
								onClick={toggleMenu}
							>
								{page.name}
							</Link>
						</li>

						<li>
							<div className="h-px w-full bg-white-500 opacity-5"></div>
						</li>
					</React.Fragment>
				))}
			</ul>
			<div className="flex gap-2 justify-center items-center text-white-100 text-[1.125rem] leading-[1.6875rem] font-light">
				{authenticationPages.map((page, index) => (
					<Link
						className={`px-6 py-[0.88rem] ${page.name === 'Login' ? 'bg-green-800 text-grey-900' : ''} rounded-full`}
						key={index}
						to={page.link}
						onClick={toggleMenu}
					>
						{page.name}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default MobileMenu;
