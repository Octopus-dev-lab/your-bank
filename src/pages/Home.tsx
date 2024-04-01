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
		<div className="mt-12 mb-20 sm:max-w-[640px] sm:mx-auto lg:max-w-none lg:mx-0 2xl:max-w-[2000px] 2xl:mx-auto">
			<img
				className="absolute top-0 left-0 -z-10 w-[23.87481rem] lg:w-[34.17163rem] 2xl:w-[47.43738rem] min-[2000px]:hidden"
				src={abstract}
				alt="abstract design"
			/>
			<div className="lg:w-full lg:flex lg:justify-between lg:px-20 2xl:px-40">
				<Introduction />
				<Preview />
			</div>
			<Products />
			<Features />
			<Faqs />
			<Testimonials />
			<SignupNow />
		</div>
	);
}

export default Home;
