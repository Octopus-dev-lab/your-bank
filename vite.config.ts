import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()]
	// Uncomment the following line before building for production (subdomain deployment)
	// base: '/your-bank/'
});
