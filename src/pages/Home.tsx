import Faqs from '../components/Faqs';
import Features from '../components/Features';
import Introduction from '../components/Introduction';
import Preview from '../components/Preview';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

function Home() {
	return (
		<div className="mt-12">
			<Introduction />
			<Preview />
			<Products />
			<Features />
			<Faqs />
			<Testimonials />
		</div>
	);
}

export default Home;
