import Benefits from '../components/careers.benefits/Benefits';
import Introduction from '../components/careers.introduction/Introduction';
import Values from '../components/careers.values/Values';
import Faqs from '../components/faqs/Faqs';
import JobOpenings from '../components/jobOpenings/JobOpenings';
import SignupNow from '../components/signupNow/SignupNow';

function Careers() {
	return (
		<div className="mt-[1.87rem] mb-20">
			<Introduction />
			<Values />
			<Benefits />
			<JobOpenings />
			<Faqs />
			<SignupNow />
		</div>
	);
}

export default Careers;
