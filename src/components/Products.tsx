import { useState } from 'react';
import Services from './Services';
import Toggle from './Toggle';
import UseCases from './UseCases';

export enum ToggleLabels {
	INDIVIDUALS = 'For Individuals',
	BUSINESS = 'For Businesses'
}

function Products() {
	const [active, setActive] = useState(ToggleLabels.INDIVIDUALS);

	return (
		<div className="mt-[4.34rem] px-4 flex flex-col justify-center items-center">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Products'] after:text-green-800">
				Our
			</h2>
			<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center mb-5">
				Discover a range of comprehensive and customizable banking
				products at YourBank, designed to suit your unique financial
				needs and aspirations
			</p>
			<Toggle<ToggleLabels>
				labels={ToggleLabels}
				active={active}
				setActive={setActive}
			/>
			<Services />
			<UseCases active={active} />
		</div>
	);
}

export default Products;
