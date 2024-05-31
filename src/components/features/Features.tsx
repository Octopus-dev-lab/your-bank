import ArrowLink from '../../assets/svg/arrow-link.svg?react';

function Features({
	content
}: {
	content: { title: string; description: string }[];
}) {
	return (
		<div className="lg:grid lg:grid-cols-2 lg:gap-5 2xl:gap-[1.88rem]">
			{content.map((feature, index) => (
				<button
					key={index}
					className="mt-5 p-[1.88rem] rounded-md border border-grey-800 bg-grey-900 lg:mt-0 lg:p-10 2xl:p-[3.12rem]"
				>
					<div className="mb-5 flex justify-between items-center lg:mb-6 2xl:mb-[1.88rem]">
						<h3 className="text-white-100 text-[1.125rem] leading-[1.6875rem] font-normal 2xl:text-[1.375rem] 2xl:leading-[2.0625rem]">
							{feature.title}
						</h3>
						<ArrowLink className="w-6 h-6 2xl:w-[2.125rem] 2xl:h-[2.125rem]" />
					</div>
					<p className="text-grey-200 text-[0.875rem] leading-[1.3125] font-light -tracking-[0.00525rem] lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{feature.description}
					</p>
				</button>
			))}
		</div>
	);
}

export default Features;
