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
		path: '/your-bank',
		element: <App />,
		children: [
			{
				path: '/your-bank/',
				element: <Home />
			},
			{
				path: '/your-bank/careers',
				element: <Careers />
			},
			{
				path: '/your-bank/about',
				element: <About />
			},
			{
				path: '/your-bank/security',
				element: <Security />
			},
			{
				path: '/your-bank/login',
				element: <Authentication />
			},
			{
				path: '/your-bank/signup',
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
