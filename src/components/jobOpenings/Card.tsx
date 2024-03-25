import briefcaseIcon from '../../assets/careers.jobOpenings/briefcase.svg';

type CardProps = {
	title: string;
	location: string;
	department: string;
	about: string;
	requirements: string[];
};

function Card({ title, location, department, about, requirements }: CardProps) {
	return (
		<div className="p-5 bg-grey-900 border border-grey-800 rounded-xl">
			<h3 className="mb-[0.62rem] text-white-100 text-[1.25rem] leading-[1.875rem] font-semibold">
				{title}
			</h3>
			<section className="mb-[1.88rem] flex flex-col gap-[0.38rem]">
				<p className="w-min py-[0.38rem] px-[0.62rem] rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
					Location: {location}
				</p>
				<p className="w-min py-[0.38rem] px-[0.62rem] rounded-full bg-grey-1000 border border-grey-800 whitespace-nowrap text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
					Department: {department}
				</p>
			</section>
			<section className="mb-[1.88rem]">
				<h4 className="mb-2 text-white-100 text-[1.125rem] leading-[1.6875rem] font-semibold">
					About this job
				</h4>
				<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
					{about}
				</p>
			</section>
			<section className="mb-[1.88rem]">
				<h4 className="mb-[0.62rem] text-white-100 text-[1.125rem] leading-[1.6875rem] font-semibold">
					Requirements & Qualifications
				</h4>
				<ul className="flex flex-col gap-[0.88rem]">
					{requirements.map((requirement, index) => (
						<li
							className="flex gap-2"
							key={index}
						>
							<img
								src={briefcaseIcon}
								alt="briefcase icon"
							/>
							<p className="text-grey-200 text-[0.875rem] leading-[1.3125rem] font-light">
								{requirement}
							</p>
						</li>
					))}
				</ul>
			</section>
			<button className="py-3 px-5 rounded-full bg-green-800 text-grey-900 text-[0.875rem] leading-[1.3125rem] font-medium">
				Apply Now
			</button>
		</div>
	);
}

export default Card;
