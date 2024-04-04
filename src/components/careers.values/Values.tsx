import valuesData from './values.data';

function Values() {
	return (
		<div className="mt-20 px-4 lg:mt-[7.5rem] lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Values'] after:text-green-800 lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:mb-[0.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				At YourBank, our values form the foundation of our organization
				and guide our actions. We believe in upholding the highest
				standards of integrity, delivering exceptional service, and
				embracing innovation. These values define our culture and shape
				the way we work together to achieve our goals.
			</p>
			<div className="flex flex-col gap-[3.12rem] lg:grid lg:grid-cols-2">
				{valuesData.map((value, index) => (
					<div
						key={index}
						className="flex gap-5 2xl:gap-[1.88rem]"
					>
						<div className="w-px bg-green-800"></div>
						<div>
							<h3 className="mb-[0.88rem] text-grey-600 text-[1.875rem] leading [2.8125rem] font-medium lg:mb-5 lg:text-[2.2rem] lg:leading-[3.3rem] min-[1037px]:text-[2.5rem] min-[1037px]:leading-[3.75rem] 2xl:mb-[1.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem] min-[1552px]:text-[3.625rem] min-[1552px]:leading-[5.4375rem] ">
								{value.title}
							</h3>
							<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
								{value.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Values;
