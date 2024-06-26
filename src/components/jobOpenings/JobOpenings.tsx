import Card from './Card';
import jobsData from './jobs.data';

function JobOpenings() {
	return (
		<div className="mt-20 px-4 lg:mt-[7.5rem] lg:px-20 2xl:mt-40 2xl:px-40">
			<h2 className="text-green-800 text-[1.75rem] leading-[2.625rem] font-medium text-center mb-[0.62rem] lg:text-[2.375rem] lg:leading-[3.5625rem] lg:text-start 2xl:mb-[0.88rem] 2xl:text-[3rem] 2xl:leading-[4.5rem]">
				Job Openings
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] text-center font-light lg:text-[1rem] lg:leading-6 lg:text-start 2xl:text-[1.125rem] 2xl:leading-[1.6875rem] 2xl:mb-20">
				Explore exciting job openings at YourBank, where we value
				talent, innovation, and a passion for customer service. Join our
				team and be part of shaping a brighter future in the banking
				industry
			</p>
			<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-5 2xl:gap-[1.88rem]">
				{jobsData.map((job, index) => (
					<Card
						key={index}
						{...job}
					/>
				))}
			</div>
		</div>
	);
}

export default JobOpenings;
