import Benefits from '../components/careers.benefits/Benefits';
import Introduction from '../components/careers.introduction/Introduction';
import Values from '../components/careers.values/Values';
import JobOpenings from '../components/jobOpenings/JobOpenings';

function Careers() {
	return (
		<div className="mt-[1.87rem]">
			<Introduction />
			<Values />
			<Benefits />
			<JobOpenings />
		</div>
	);
}

export default Careers;
