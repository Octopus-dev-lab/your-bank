import abstract from '../assets/home/home-topleft-abstract.svg';
import Faqs from '../components/faqs/Faqs';
import Features from '../components/features/Features';
import Introduction from '../components/introduction/Introduction';
import Preview from '../components/preview/Preview';
import Products from '../components/products/Products';
import SignupNow from '../components/signupNow/SignupNow';
import Testimonials from '../components/testimonials/Testimonials';

function Home() {
	return (
		<div className="mt-12 mb-20">
			<img
				className="absolute top-0 left-0 -z-10"
				src={abstract}
				alt="abstract design"
			/>
			<Introduction />
			<Preview />
			<Products />
			<Features />
			<Faqs />
			<Testimonials />
			<SignupNow />
		</div>
	);
}

export default Home;
