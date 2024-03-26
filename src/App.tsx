import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Authentication from './pages/Authentication';
import Careers from './pages/Careers';
import Home from './pages/Home';
import Security from './pages/Security';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/careers',
		element: <Careers />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/security',
		element: <Security />
	},
	{
		path: '/login',
		element: <Authentication />
	},
	{
		path: '/signup',
		element: <Authentication />
	}
]);

function App() {
	return (
		<>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</>
	);
}

export default App;
