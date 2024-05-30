import Card from './Card';
import Description from './Description';
import { ToggleLabels } from './Products';
import useCasesData from './useCases.data';

function UseCases({
	active = ToggleLabels.INDIVIDUALS
}: {
	active?: ToggleLabels;
}) {
	const data =
		active === ToggleLabels.INDIVIDUALS
			? useCasesData.individuals
			: useCasesData.businesses;
	return (
		<div className="mt-20 p-4 flex flex-col justify-center items-center lg:items-start 2xl:mt-40">
			<h2 className="mb-[0.62rem] text-green-800 text-[1.75rem] leading-[2.625rem] font-medium lg:text-[2.375rem] lg:leading-[3.5625rem] 2xl:text-[3rem] 2xl:leading-[4.5rem] 2xl:mb-[0.88rem]">
				Use Cases
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-20">
				At YourBank, we cater to the diverse needs of individuals and
				businesses alike, offering a wide range of financial solutions
			</p>
			<div
				className={`lg:flex lg:justify-between ${active === ToggleLabels.BUSINESS ? 'lg:flex-row-reverse' : ''}`}
			>
				<Card data={data} />
				<Description data={data} />
			</div>
		</div>
	);
}

export default UseCases;
