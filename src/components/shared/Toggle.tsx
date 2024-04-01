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
			className={`relative bottom-0 left-[50%] -translate-x-1/2 w-min flex flex-nowrap p-3 rounded-full bg-grey-900 border border-grey-800 mb-[3.75rem] ${customCss} lg:mb-0 lg:static lg:translate-x-0 2xl:p-[0.88rem]`}
		>
			{Object.keys(labels).map((key) => (
				<button
					key={key}
					className={`px-[1.12rem] py-[0.62rem] text-[0.875rem] leading-[1.3124rem] font-normal whitespace-nowrap rounded-full 2xl:px-6 2xl:py-[0.88rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] ${
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
