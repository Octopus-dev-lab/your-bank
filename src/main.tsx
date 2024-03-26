import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import About from './pages/About';
import Authentication from './pages/Authentication';
import Careers from './pages/Careers';
import Home from './pages/Home';
import Security from './pages/Security';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
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
				element: <Authentication isSignup={true} />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
