import { useState } from 'react';
import Toggle from '../shared/Toggle';
import Carousel from './Carousel';

export enum ToggleLabels {
	INDIVIDUALS = 'For Individuals',
	BUSINESSES = 'For Businesses'
}

function Testimonials() {
	const [active, setActive] = useState(ToggleLabels.INDIVIDUALS);
	return (
		<div className="mt-20 p-4 flex flex-col justify-center items-center lg:px-20 2xl:mt-40 2xl:px-40">
			<div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:gap-36 lg:mb-20 2xl:mb-[6.25rem]">
				<div className="lg:flex lg:flex-col">
					<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Testimonials'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:self-start 2xl:text-[3rem] 2xl:leading-[4.5rem] 2xl:mb-[0.88rem]">
						Our
					</h2>
					<p className="mb-[1.25rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						Discover how YourBank has transformed lives with
						innovative digital solutions and personalized customer
						service. See why our clients trust us for a secure and
						prosperous financial journey
					</p>
				</div>
				<Toggle
					customCss="mb-10"
					labels={ToggleLabels}
					active={active}
					setActive={setActive}
				/>
			</div>
			<Carousel active={active} />
		</div>
	);
}

export default Testimonials;
