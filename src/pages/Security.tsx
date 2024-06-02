import Faqs from '../components/faqs/FaqsSection';
import ProtectionSection from '../components/protection/ProtectionSection';
import SecuritySection from '../components/security/SecuritySection';

function Security() {
	return (
		<div className="mt-12 mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<SecuritySection />
			<ProtectionSection />
			<Faqs />
		</div>
	);
}

export default Security;
