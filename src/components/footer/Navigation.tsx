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
					<a
						key={index}
						className="text-white-500 text-[0.875rem] leading-[1.3125rem] font-normal"
						href={page.url}
					>
						{page.title}
					</a>
				))}
			</ul>
		</div>
	);
}

export default Navigation;
