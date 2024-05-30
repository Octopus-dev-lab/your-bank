function Divider() {
	return (
		<>
			<svg
				className="md:hidden"
				width="258"
				height="1"
				viewBox="0 0 258 1"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					y1="0.5"
					x2="258"
					y2="0.5"
					stroke="#262626"
					stroke-dasharray="20 10"
				/>
			</svg>
			<svg
				className="hidden md:block"
				width="2"
				height="112"
				viewBox="0 0 2 112"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<line
					x1="1.16602"
					y1="0.5"
					x2="1.16601"
					y2="111.5"
					stroke="#262626"
					stroke-dasharray="20 10"
				/>
			</svg>
		</>
	);
}

export default Divider;
