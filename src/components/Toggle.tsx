function Toggle<T>({
	customCss = '',
	labels,
	active,
	setActive
}: {
	customCss?: string;
	labels: Record<string, T>;
	active: T;
	setActive: (active: T) => void;
}) {
	return (
		<div
			className={`p-3 rounded-full bg-grey-900 border border-grey-800 mb-[3.75rem] ${customCss}`}
		>
			{Object.keys(labels).map((key) => (
				<button
					key={key}
					className={`px-[1.12rem] py-[0.62rem] text-[0.875rem] leading-[1.3124rem] font-normal rounded-full ${
						active === labels[key]
							? 'bg-green-800 text-grey-900'
							: 'text-white-100'
					}`}
					onClick={() => setActive(labels[key])}
				>
					{labels[key] as string}
				</button>
			))}
		</div>
	);
}

export default Toggle;
