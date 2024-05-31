import { ReactSVG } from 'react-svg';
import radialAbstract from '../../assets/svg/radial-abstract.svg';

function RadialAbstract({ className }: { className?: string }) {
	const classes = className?.split(' ');
	const sizeClasses = classes?.filter(
		(c) => c.includes('w-') || c.includes('h-')
	);

	return (
		<ReactSVG
			id="abstract-radial"
			className={className}
			src={radialAbstract}
			beforeInjection={(svg) => {
				sizeClasses && svg.classList.add(...sizeClasses);
			}}
			fallback={() => {
				const container = document.getElementById('abstract-radial');
				if (!container) return;
				for (let i = 0; i < container?.classList.length; i++) {
					if (container?.classList[i].includes('w-')) {
						container?.classList.remove(container?.classList[i]);
					}
				}
				container?.classList.add('w-full');
				return (
					<img
						className="text-white-100 text-xs leading-6 font-light lg:text-[0.875rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-6 overflow-visible"
						src=""
						alt="Decorative radial abstract background"
					/>
				);
			}}
		/>
	);
}

export default RadialAbstract;
