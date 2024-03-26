import { Link } from 'react-router-dom';
import logo from '../../assets/footer/logo.svg';
import logoText from '../../assets/footer/your-bank.svg';
import { pages } from './footer.data';

function Navigation() {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<div className="flex justify-center items-center gap-1">
				<img
					src={logo}
					alt="YourBank logo"
				/>
				<img
					src={logoText}
					alt="YourBank name"
				/>
			</div>
			<ul className="flex gap-[0.88rem]">
				{pages.map((page, index) => (
					<Link
						key={index}
						className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-normal"
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
