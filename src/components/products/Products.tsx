import { useState } from 'react';
import Toggle from '../shared/Toggle';
import Services from './Services';
import UseCases from './UseCases';

export enum ToggleLabels {
	INDIVIDUALS = 'For Individuals',
	BUSINESS = 'For Businesses'
}

function Products() {
	const [active, setActive] = useState(ToggleLabels.INDIVIDUALS);

	return (
		<div className="mt-[4.34rem] px-4 flex flex-col justify-center items-center lg:px-20 lg:mt-28 2xl:mt-40 2xl:px-40">
			<div className="relative lg:w-full lg:flex lg:justify-between lg:items-center lg:gap-36 lg:mb-20">
				<div>
					<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] text-center font-medium after:content-['_Products'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:text-[3rem] 2xl:leading-[4.5rem] 2xl:mb-[0.88rem]">
						Our
					</h2>
					<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center mb-5 lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						Discover a range of comprehensive and customizable
						banking products at YourBank, designed to suit your
						unique financial needs and aspirations
					</p>
				</div>
				<Toggle<ToggleLabels>
					labels={ToggleLabels}
					active={active}
					setActive={setActive}
				/>
			</div>
			<Services />
			<UseCases active={active} />
		</div>
	);
}

export default Products;
