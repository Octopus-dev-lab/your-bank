import { useState } from 'react';
import Services from './Services';
import UseCases from './UseCases';

function Products() {
	const [isIndividuals, setIsIndividuals] = useState(true);

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
			<div className="p-3 rounded-full bg-grey-900 border border-grey-800 mb-[3.75rem]">
				<button
					className={`px-[1.12rem] py-[0.62rem] text-[0.875rem] leading-[1.3124rem] font-normal rounded-full ${isIndividuals ? 'bg-green-800 text-grey-900' : 'text-white-100'}`}
					onClick={() => setIsIndividuals(true)}
				>
					For Individuals
				</button>
				<button
					className={`px-[1.12rem] py-[0.62rem] text-[0.875rem] leading-[1.3124rem] font-normal rounded-full ${isIndividuals ? 'text-white-100' : 'bg-green-800 text-grey-900'}`}
					onClick={() => setIsIndividuals(false)}
				>
					For Businesses
				</button>
			</div>
			<Services />
			<UseCases individuals={isIndividuals} />
		</div>
	);
}

export default Products;
