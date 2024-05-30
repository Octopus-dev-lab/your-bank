function Arrow({ direction = 'left' }: { direction: 'left' | 'right' }) {
	return (
		<svg
			className={
				direction === 'right' ? 'transform rotate-180' : undefined
			}
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
		>
			<path
				d="M21.5833 14H7M7 14L14 7M7 14L14 21"
				stroke="#CAFF33"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Arrow;
