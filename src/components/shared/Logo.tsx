import { ReactSVG } from 'react-svg';
import logo from '../../assets/svg/logo.svg';

function Logo({ svgSizeClasses }: { svgSizeClasses: string }) {
	const classList = svgSizeClasses.split(' ');

	return (
		<ReactSVG
			className="w-[6.33rem] h-[1.63rem] lg:w-[7.3rem] lg:h-[1.88rem] 2xl:w-[9.74rem] 2xl:h-[2.5rem]"
			src={logo}
			beforeInjection={(svg) => {
				svg.classList.add(...classList);
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
