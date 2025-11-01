    // vite.config.js
    import { defineConfig } from 'vite';
    import tailwindcss from '@tailwindcss/vite';
    import react from '@vitejs/plugin-react'; // If using React

    export default defineConfig({
      plugins: [
        react(), // Include other plugins as needed
        tailwindcss(),
      ],
    });