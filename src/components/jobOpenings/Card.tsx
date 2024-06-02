import BriefcaseIcon from '../../assets/svg/grey-briefcase.svg?react';

type CardProps = {
	title: string;
	location: string;
	department: string;
	about: string;
	requirements: string[];
};

function Card({ title, location, department, about, requirements }: CardProps) {
	return (
		<div className="flex flex-col justify-between p-5 bg-grey-900 border border-grey-800 rounded-xl lg:p-10 2xl:p-[3.12rem]">
			<div>
				<h3 className="mb-[0.62rem] text-white-100 text-[1.25rem] leading-[1.875rem] font-semibold lg:text-[1.5rem] lg:leading-[2.25rem] 2xl:mb-[0.88rem] 2xl:text-[1.875rem] 2xl:leading-[2.8125rem]">
					{title}
				</h3>
				<section className="mb-[1.88rem] flex flex-col gap-[0.38rem] lg:mb-10 lg:flex-row lg:flex-wrap lg:gap-2 2xl:mb-[3.12rem] 2xl:gap-[0.62rem]">
					<p className="w-min py-[0.38rem] px-[0.62rem] rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:px-[0.88rem] lg:text-[1rem] lg:leading-6 2xl:py-2 2xl:px-4 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						Location: {location}
					</p>
					<p className="w-min py-[0.38rem] px-[0.62rem] rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:px-[0.88rem] lg:text-[1rem] lg:leading-6 2xl:py-2 2xl:px-4 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						Department: {department}
					</p>
				</section>
				<section className="mb-[1.88rem] lg:mb-10">
					<h4 className="mb-2 text-white-100 text-[1.125rem] leading-[1.6875rem] font-semibold lg:text-[1.25rem] lg:leading-[1.875rem] 2xl:mb-5 2xl:text-[1.5rem] 2xl:leading-[2.25rem]">
						About this job
					</h4>
					<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
						{about}
					</p>
				</section>
				<section className="mb-[1.88rem] lg:mb-[2.5rem] 2xl:mb-[3.12rem]">
					<h4 className="mb-[0.62rem] text-white-100 text-[1.125rem] leading-[1.6875rem] font-semibold lg:text-[1.25rem] lg:leading-[1.875rem] 2xl:mb-5 2xl:text-[1.5rem] 2xl:leading-[2.25rem]">
						Requirements & Qualifications
					</h4>
					<ul className="flex flex-col gap-[0.88rem]">
						{requirements.map((requirement, index) => (
							<li
								className="flex gap-2 2xl:gap-[0.62rem]"
								key={index}
							>
								<div>
									<BriefcaseIcon className="w-5 h-5 2xl:w-6 2xl:h-6" />
								</div>
								<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light lg:text-[1rem] lg:leading-6 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
									{requirement}
								</p>
							</li>
						))}
					</ul>
				</section>
			</div>
			<button className="w-min py-3 px-5 rounded-full bg-green-800 text-grey-900 text-[0.875rem] leading-[1.3125rem] font-medium whitespace-nowrap 2xl:py-4 2xl:px-[1.88rem] 2xl:text-[1.125rem] 2xl:leading-[1.6875rem]">
				Apply Now
			</button>
		</div>
	);
}

export default Card;
