import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default <Partial<Config>>{
   content: [
      '~/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      '~/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      '~/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      '~/plugins/**/*.{js,ts,mjs}',
      '~/composables/**/*.{js,ts,mjs}',
      '~/utils/**/*.{js,ts,mjs}',
      '~/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      '~/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      '~/app.config.{js,ts,mjs}'
   ],
   theme: {
      extend: {
         container: {
            center: true,
            screens: {
               // ultra small phones
               us: '361px',
               // tablets
               sm: '760px',
               // laptops
               lg: '1440px',
               // PC
               xl: '1920px'
            }
         },

         screens: {
            // ultra small phones
            sm: '390px',
            // laptops
            lg: '1440px',
            // PC
            xl: '1920px'
         },

         spacing: {
            '7.5': '1.875rem',
            '12.5': '3.125rem',
         },

         size: {
            '12.5': '3.125rem',
            '13': '3.25rem',
            '15': '3.75rem'
         },

         padding: {
            '40.5': '10.125rem',
            '30': '7.5rem',
            '15': '3.75rem',
            '12.5': '3.125rem',
            '4.5': '1.125rem'
         },

         colors: {
            // Yellow Shades
            'yellow/55': '#FFD11A',
            'yellow/60': '#FFD633',
            'yellow/70': '#FFE066',
            'yellow/80': '#FFEB99',
            'yellow/90': '#FFF5CC',
            'yellow/95': '#FFFAE5',
            'yellow/97': '#FFFCF0',
            'yellow/99': '#FBFBFE',

            // Dark Shades
            'dark/08': '#141414',
            'dark/10': '#1A1A1A',
            'dark/15': '#262626',
            'dark/20': '#333333',
            'dark/25': '#404040',
            'dark/30': '#4D4D4D',
            'dark/35': '#595959',
            'dark/40': '#666666',

            // Grey Shades
            'grey/50': '#7E7E81',
            'grey/60': '#98989A',
            'grey/70': '#B3B3B3',
            'grey/80': '#CCCCCC',
            'grey/90': '#E4E4E7',
            'grey/95': '#F1F1F3',
            'grey/97': '#F7F7F8',
            'grey/99': '#FCFCFD'
         }
      },

      fontFamily: {
         inter: ['Inter', 'Inter fallback', ...fontFamily.sans],
         'kumbh-sans': ['Kumbh Sans', 'Kumbh Sans fallback', ...fontFamily.sans]
      }
   },
   plugins: []
};
