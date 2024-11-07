import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(200, 60%, 95%)', // Azul Cielo
  			foreground: 'hsl(210, 20%, 30%)', // Azul Profundo para contraste
  			card: {
  				DEFAULT: 'hsl(215, 35%, 90%)', // Azul Medio para fondos de tarjetas
  				foreground: 'hsl(210, 20%, 30%)' // Azul Profundo para texto de tarjeta
  			},
  			popover: {
  				DEFAULT: 'hsl(200, 50%, 96%)', // Azul Cielo claro
  				foreground: 'hsl(210, 20%, 30%)' // Azul Profundo
  			},
  			primary: {
  				DEFAULT: 'hsl(220, 40%, 40%)', // Azul Oscuro para elementos principales
  				foreground: 'hsl(200, 60%, 95%)' // Azul Cielo para texto en elementos oscuros
  			},
  			secondary: {
  				DEFAULT: 'hsl(200, 35%, 60%)', // Azul Verdoso Claro para acentos secundarios
  				foreground: 'hsl(210, 20%, 30%)' // Azul Profundo para texto en secundarios
  			},
  			muted: {
  				DEFAULT: 'hsl(210, 15%, 80%)', // Azul suave y apagado para fondos muteds
  				foreground: 'hsl(210, 20%, 30%)' // Azul Profundo para texto muted
  			},
  			accent: {
  				DEFAULT: 'hsl(215, 45%, 55%)', // Un azul intermedio para acentos
  				foreground: 'hsl(200, 60%, 95%)' // Azul Cielo claro para contraste en acentos
  			},
  			destructive: {
  				DEFAULT: 'hsl(0, 75%, 50%)', // Rojo para elementos destructivos
  				foreground: 'hsl(0, 0%, 100%)' // Blanco para texto destructivo
  			},
  			border: 'hsl(210, 20%, 85%)', // Gris azulado para bordes
  			input: 'hsl(210, 20%, 90%)', // Fondo claro para inputs
  			ring: 'hsl(215, 35%, 90%)', // Azul suave para anillos de foco
  			chart: {
  				'1': 'hsl(215, 45%, 50%)', // Primer color de gráfico
  				'2': 'hsl(200, 60%, 55%)', // Segundo color de gráfico
  				'3': 'hsl(210, 35%, 70%)', // Tercer color de gráfico
  				'4': 'hsl(200, 35%, 65%)', // Cuarto color de gráfico
  				'5': 'hsl(220, 30%, 60%)'  // Quinto color de gráfico
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
},
  plugins: [require("tailwindcss-animate")],
};
export default config;
