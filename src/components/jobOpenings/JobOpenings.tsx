import Card from './Card';
import jobsData from './jobs.data';

function JobOpenings() {
	return (
		<div className="mt-20 px-4">
			<h2 className="text-green-800 text-[1.75rem] leading-[2.625rem] font-medium text-center mb-[0.62rem]">
				Job Openings
			</h2>
			<p className="mb-[3.75rem] text-grey-200 text-[0.875rem] leading-[1.3125rem] text-center font-light">
				Explore exciting job openings at YourBank, where we value
				talent, innovation, and a passion for customer service. Join our
				team and be part of shaping a brighter future in the banking
				industry
			</p>
			<div className="flex flex-col gap-6">
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
