import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#10b981', rgb: '16,185,129' }, accent: { DEFAULT: '#34d399', rgb: '52,211,153' } }, fontFamily: { heading: ['Cormorant Garamond', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;