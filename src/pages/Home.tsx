import Features from '../components/Features';
import Introduction from '../components/Introduction';
import Preview from '../components/Preview';
import Products from '../components/Products';

function Home() {
	return (
		<div className="mt-12">
			<Introduction />
			<Preview />
			<Products />
			<Features />
		</div>
	);
}

export default Home;
