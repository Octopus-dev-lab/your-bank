import Faqs from '../components/Faqs';
import Features from '../components/Features';
import Introduction from '../components/introduction/Introduction';
import Preview from '../components/preview/Preview';
import Products from '../components/Products';
import SignupNow from '../components/SignupNow';
import Testimonials from '../components/Testimonials';

function Home() {
	return (
		<div className="mt-12 mb-20">
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
