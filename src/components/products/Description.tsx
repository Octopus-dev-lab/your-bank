import React from 'react';
import DividerHorizontal from '../../assets/svg/dashed-divider-horizontal.svg?react';
import DividerVertical from '../../assets/svg/dashed-divider-vertical.svg?react';

function Description({
	data
}: {
	data: {
		title: string;
		description: string;
		cardsData: {
			icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
			title: string;
		}[];
		stats: {
			percentage: string;
			title: string;
		}[];
	};
}) {
	return (
		<div className="flex flex-col items-center justify-center lg:items-start lg:w-[45%]">
			<h3 className="mb-[0.62rem] text-white-100 text-[1.25rem] leading-[1.875rem] font-medium text-center lg:text-[1.625rem] lg:leading-[2.4375rem] lg:text-start 2xl:text-[1.875rem] 2xl:leading-[2.8125rem] 2xl:mb-[0.88rem]">
				{data.title}
			</h3>
			<p className="mb-[3.12rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-[3.88rem]">
				{data.description}
			</p>
			<div className="flex flex-col mb-[3.12rem] md:flex-row md:overflow-clip gap-[1.88rem] 2xl:mb-[3.88rem]">
				{data.stats.map((stat, index) => (
					<React.Fragment key={index}>
						<div>
							<h3 className="mb-[0.12rem] text-green-800 text-[2.5rem] leading-[3.75rem] font-medium text-center 2xl:text-[3.625rem] 2xl:leading-[5.4375rem] 2xl:mb-[0.31rem]">
								{stat.percentage}
							</h3>
							<h4 className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light text-center lg:text-[0.9375rem] lg:leading-[1.40625rem] lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
								{stat.title}
							</h4>
						</div>
						{index !== data.stats.length - 1 && (
							<>
								<DividerHorizontal className="md:hidden" />
								<DividerVertical className="hidden md:block" />
							</>
						)}
					</React.Fragment>
				))}
			</div>
			<button className="py-[0.88rem] px-5 bg-grey-900 rounded-full border border-grey-800 text-white-100 text-[0.875rem] leading-[1.3125rem] font-normal 2xl:px-6 2xl:py-[1.12rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				Learn More
			</button>
		</div>
	);
}

export default Description;
