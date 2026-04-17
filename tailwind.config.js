/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // El tono Ciruela oscuro para botones y textos principales
          plum: '#4A3751',
          // El Coral vibrante para acentos y estados de alerta/destacados
          coral: '#EB5F6B',
          // El Azul Pastel para fondos suaves
          blue: '#BAE2E0',
          // El Crema para el fondo general o textos claros
          cream: '#F9F9F4',
        }
      },
      // Añadimos una sombra personalizada para tus "Elevated Cards"
      boxShadow: {
        'elevated': '0 20px 50px rgba(0, 0, 0, 0.15)',
        'elevated-hover': '0 30px 60px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}