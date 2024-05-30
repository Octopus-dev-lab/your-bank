import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()]
	// Uncomment the following line before building for production (subdomain deployment)
	// base: '/your-bank/'
});
