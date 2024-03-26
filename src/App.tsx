import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Authentication from './pages/Authentication';
// import Security from './pages/Security';
// import About from './pages/About';
// import Careers from './pages/Careers';
// import Home from './pages/Home';

function App() {
	return (
		<>
			<Navbar />
			{/* <Home /> */}
			{/* <Careers /> */}
			{/* <About /> */}
			{/* <Security /> */}
			<Authentication />
			<Footer />
		</>
	);
}

export default App;
