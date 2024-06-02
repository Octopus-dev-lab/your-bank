import { useEffect, useRef, useState } from 'react';

function DashedDivider({
	orientation = 'horizontal',
	className
}: {
	orientation?: 'horizontal' | 'vertical';
	className?: string;
}) {
	const svgRef = useRef(null);
	const width = orientation === 'horizontal' ? 100 : 1;
	const height = orientation === 'horizontal' ? 1 : 100;
	const [dimensions, setDimensions] = useState({ width, height });

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			if (!entries || entries.length === 0) {
				return;
			}
			const { width, height } = entries[0].contentRect;
			setDimensions({ width, height });
		});

		if (svgRef.current) {
			resizeObserver.observe(svgRef.current);
		}

		return () => {
			if (svgRef.current) {
				resizeObserver.unobserve(svgRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={svgRef}
			className={className}
		>
			<svg
				width={dimensions.width}
				height={dimensions.height}
				viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1={orientation === 'horizontal' ? 0 : dimensions.width / 2}
					y1={
						orientation === 'horizontal' ? dimensions.height / 2 : 0
					}
					x2={
						orientation === 'horizontal'
							? dimensions.width
							: dimensions.width / 2
					}
					y2={
						orientation === 'horizontal'
							? dimensions.height / 2
							: dimensions.height
					}
					stroke="#262626"
					strokeDasharray="15 15"
					strokeWidth="1"
				/>
			</svg>
		</div>
	);
}

export default DashedDivider;
