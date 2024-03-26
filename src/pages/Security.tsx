import Faqs from '../components/faqs/Faqs';
import Introduction from '../components/security.introduction/introduction';
import Protection from '../components/security.protection/Protection';

function Security() {
	return (
		<div className="mt-12 mb-20">
			<Introduction />
			<Protection />
			<Faqs />
		</div>
	);
}

export default Security;
