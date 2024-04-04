import AuthenticationForm from '../components/authentication/AuthenticationForm';
import Testimonials from '../components/testimonials/Testimonials';

function Authentication({ isSignup = false }: { isSignup?: boolean }) {
	return (
		<div className="mt-[1.88rem] mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<AuthenticationForm isSignup={isSignup} />
			<Testimonials />
		</div>
	);
}

export default Authentication;
