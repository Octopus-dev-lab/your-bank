import AuthenticationForm from '../components/authentication/AuthenticationForm';
import Testimonials from '../components/testimonials/Testimonials';

function Authentication() {
	return (
		<div>
			<AuthenticationForm isLogin={true} />
			<Testimonials />
		</div>
	);
}

export default Authentication;
