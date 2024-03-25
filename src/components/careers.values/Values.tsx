import valuesData from './values.data';

function Values() {
	return (
		<div className="mt-20 px-4">
			<h2 className="mb-[0.62rem] text-white-100 text-[1.75rem] leading-[2.625rem] font-medium text-center after:content-['_Values'] after:text-green-800">
				Our
			</h2>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center">
				At YourBank, our values form the foundation of our organization
				and guide our actions. We believe in upholding the highest
				standards of integrity, delivering exceptional service, and
				embracing innovation. These values define our culture and shape
				the way we work together to achieve our goals.
			</p>
			<div className="flex flex-col gap-[3.12rem]">
				{valuesData.map((value, index) => (
					<div
						key={index}
						className="flex gap-5"
					>
						<div className="w-px bg-green-800"></div>
						<div>
							<h3 className="text-grey-600 text-[1.875rem] leading [2.8125rem] font-medium">
								{value.title}
							</h3>
							<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
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
