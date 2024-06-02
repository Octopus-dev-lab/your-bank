import { useEffect, useRef, useState } from 'react';

function CrossDivider() {
	const svgRef = useRef(null);
	const [dimensions, setDimensions] = useState({ width: 100, height: 100 });

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
			className="absolute top-0 left-0 z-0 w-full h-full"
		>
			<svg
				width={dimensions.width}
				height={dimensions.height}
				viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1={dimensions.width / 2}
					y1={dimensions.height / 2}
					x2="0"
					y2={dimensions.height / 2}
					stroke="#262626"
					strokeDasharray="15 15"
					strokeWidth="1"
				/>
				<line
					x1={dimensions.width / 2}
					y1={dimensions.height / 2}
					x2={dimensions.width}
					y2={dimensions.height / 2}
					stroke="#262626"
					strokeDasharray="15 15"
					strokeWidth="1"
				/>
				<line
					x1={dimensions.width / 2}
					y1={dimensions.height / 2}
					x2={dimensions.width / 2}
					y2="0"
					stroke="#262626"
					strokeDasharray="15 15"
					strokeWidth="1"
				/>
				<line
					x1={dimensions.width / 2}
					y1={dimensions.height / 2}
					x2={dimensions.width / 2}
					y2={dimensions.height}
					stroke="#262626"
					strokeDasharray="15 15"
					strokeWidth="1"
				/>
			</svg>
		</div>
	);
}

export default CrossDivider;
