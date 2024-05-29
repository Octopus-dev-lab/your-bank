import { Link, useLocation } from 'react-router-dom';
import { pages } from './navbar.data';

function PagesLinks() {
	const location = useLocation().pathname;
	return (
		<nav className="hidden md:block">
			<ul className="py-[0.81rem] flex gap-[1.62rem]">
				{pages.map((page, index) => (
					<li key={index}>
						<Link
							to={page.link}
							className={`inline-block text-[0.875rem] leading-[1.3125rem] font-normal 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] ${location === page.link ? 'text-green-800 hover:cursor-default' : 'hover:scale-[1.03] text-white-100'}`}
						>
							{page.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default PagesLinks;
