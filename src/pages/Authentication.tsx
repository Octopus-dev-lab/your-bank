import AuthenticationForm from '../components/authentication/AuthenticationForm';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

function Authentication({ isSignup = false }: { isSignup?: boolean }) {
	return (
		<div className="mt-[1.88rem] mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<AuthenticationForm isSignup={isSignup} />
			<TestimonialsSection />
		</div>
	);
}

export default Authentication;
