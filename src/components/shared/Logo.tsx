import { ReactSVG } from 'react-svg';
import logo from '../../assets/svg/logo.svg';

function Logo({ className }: { className?: string }) {
	const classes = className?.split(' ');
	const sizeClasses = classes?.filter(
		(c) => c.includes('w-') || c.includes('h-')
	);

	return (
		<ReactSVG
			className={className}
			src={logo}
			beforeInjection={(svg) => {
				sizeClasses && svg.classList.add(...sizeClasses);
			}}
			fallback={() => (
				<img
					className="text-white-100 text-xs leading-6 font-light lg:text-[0.875rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-6 overflow-visible"
					src=""
					alt="Your bank logo"
				/>
			)}
			title="your bank logo"
		/>
	);
}

export default Logo;
