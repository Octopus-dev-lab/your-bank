import AuthenticationForm from '../components/authentication/AuthenticationForm';
import Testimonials from '../components/testimonials/Testimonials';

function Authentication({ isSignup = false }: { isSignup?: boolean }) {
	return (
		<div className="mt-[1.88rem] mb-20">
			<AuthenticationForm isSignup={isSignup} />
			<Testimonials />
		</div>
	);
}

export default Authentication;
