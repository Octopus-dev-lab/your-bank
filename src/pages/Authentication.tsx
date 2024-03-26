import AuthenticationForm from '../components/authentication/AuthenticationForm';
import Testimonials from '../components/testimonials/Testimonials';

function Authentication() {
	return (
		<div className="mt-[1.88rem]">
			<AuthenticationForm isLogin={true} />
			<Testimonials />
		</div>
	);
}

export default Authentication;
