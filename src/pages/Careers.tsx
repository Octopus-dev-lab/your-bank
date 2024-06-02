import YBCareersSection from '../components/YBCareers/YBCareersSection';
import BenefitsSection from '../components/benefits/BenefitsSection';
import FaqsSection from '../components/faqs/FaqsSection';
import JobOpeningsSection from '../components/jobOpenings/JobOpeningsSection';
import SignupNowSection from '../components/signupNow/SignupNowSection';
import ValuesSection from '../components/values/ValuesSection';

function Careers() {
	return (
		<div className="mt-[1.87rem] mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<YBCareersSection />
			<ValuesSection />
			<BenefitsSection />
			<JobOpeningsSection />
			<FaqsSection />
			<SignupNowSection />
		</div>
	);
}

export default Careers;
