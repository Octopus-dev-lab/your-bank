import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

gsap.registerPlugin(useGSAP);

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
