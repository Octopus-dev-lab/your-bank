import { useState } from 'react';
import Carousel from './Carousel';
import Toggle from './Toggle';

export enum ToggleLabels {
	INDIVIDUALS = 'For Individuals',
	BUSINESSES = 'For Businesses'
}

function Testimonials() {
	const [active, setActive] = useState(ToggleLabels.INDIVIDUALS);
	return (
		<div className="mt-20 p-4 flex flex-col justify-center items-center">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Testimonials'] after:text-green-800">
				Our
			</h2>
			<p className="mb-[1.25rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				Discover how YourBank has transformed lives with innovative
				digital solutions and personalized customer service. See why our
				clients trust us for a secure and prosperous financial journey
			</p>
			<Toggle
				customCss="mb-10"
				labels={ToggleLabels}
				active={active}
				setActive={setActive}
			/>
			<Carousel active={active} />
		</div>
	);
}

export default Testimonials;
