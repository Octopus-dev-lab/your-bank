import { Filters } from './features.data';

function FiltersMenu({
	activeFilter,
	setActiveFilter
}: {
	activeFilter: Filters;
	setActiveFilter: (filter: Filters) => void;
}) {
	return (
		<div className="p-5 rounded-lg bg-grey-900 overflow-auto whitespace-nowrap min-[690px]:flex min-[690px]:justify-center min-[690px]:gap-5 min-[690px]:overflow-hidden lg:flex lg:flex-col lg:p-10 lg:h-min lg:w-max lg:overflow-visible 2xl:p-[3.12rem]">
			{Object.values(Filters).map((filter) => (
				<button
					key={filter}
					className={`mr-5 py-[0.88rem] px-5 border border-grey-800 rounded-full ${
						activeFilter === filter
							? 'bg-grey-1000 text-green-800'
							: 'text-white-100'
					} text-[0.875rem] leading-[1.3125rem] font-normal min-[690px]:mr-0 lg:w-full 2xl:px-6 2xl:py-[1.12rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]`}
					onClick={() => setActiveFilter(filter)}
				>
					{filter}
				</button>
			))}
		</div>
	);
}

export default FiltersMenu;
