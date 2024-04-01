import { Link } from 'react-router-dom';
import logo from '../../assets/footer/logo.svg';
import logoText from '../../assets/footer/your-bank.svg';
import { pages } from './footer.data';

function Navigation() {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<div className="flex justify-center items-center gap-1">
				<img
					className="w-[2.125rem] 2xl:w-10"
					src={logo}
					alt="YourBank logo"
				/>
				<img
					className="w-24 2xl:w-28"
					src={logoText}
					alt="YourBank name"
				/>
			</div>
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
