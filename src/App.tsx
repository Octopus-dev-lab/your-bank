import abstract from './assets/home-topleft-abstract.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
	return (
		<>
			<img
				className="absolute top-0 left-0 -z-10"
				src={abstract}
				alt="abstract design"
			/>
			<Navbar />
			<Home />
		</>
	);
}

export default App;
