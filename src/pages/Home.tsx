import AbstractSVG from '../assets/svg/dot-abstract.svg?react';
import FaqsSection from '../components/faqs/FaqsSection';
import FeaturesSection from '../components/features/FeaturesSection';
import PreviewSection from '../components/preview/PreviewSection';
import ProductsSection from '../components/products/ProductsSection';
import SignupNowSection from '../components/signupNow/SignupNowSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import WelcomeSection from '../components/welcome/WelcomeSection';

function Home() {
	return (
		<div className="mt-12 mb-20 sm:max-w-[640px] sm:mx-auto lg:mt-0 lg:max-w-[1400px] 2xl:max-w-[2000px]">
			<AbstractSVG className="absolute top-0 left-0 -z-10 w-[23.87481rem] h-[19.21356rem] lg:w-[34.17163rem] lg:h-[27.5rem] 2xl:w-[47.43738rem] 2xl:h-[38.17581rem] min-[2000px]:hidden" />
			<div className="lg:w-full lg:min-h-[85vh] lg:flex lg:justify-between lg:items-center lg:px-20 2xl:px-40">
				<WelcomeSection />
				<PreviewSection />
			</div>
			<ProductsSection />
			<FeaturesSection />
			<FaqsSection />
			<TestimonialsSection />
			<SignupNowSection />
		</div>
	);
}

export default Home;
