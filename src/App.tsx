import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import BackToTop from './components/shared/BackToTop';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

function App() {
	const location = useLocation();

	useLayoutEffect(() => {
		console.log('refresh');
		ScrollTrigger.refresh();
	}, [location]);

	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<BackToTop />
		</>
	);
}

export default App;
