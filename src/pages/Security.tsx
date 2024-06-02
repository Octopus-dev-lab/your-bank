import Faqs from '../components/faqs/FaqsSection';
import Introduction from '../components/security.introduction/introduction';
import Protection from '../components/security.protection/Protection';

function Security() {
	return (
		<div className="mt-12 mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<Introduction />
			<Protection />
			<Faqs />
		</div>
	);
}

export default Security;
