/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        tablet: '1026px',
        xl: '1440px',
      },

       fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      backgroundImage: {
        'backgroundEight':"url('./img/public/bg8.png')"
      },

      height: {
        974: '974px',
        314: '314px',
        122: '122px',
        802: '802px',
        2800: '2800px',
        1081: '1081px',
        653: '653px',
        400: '400px',
      },
      maxHeight: {
        974: '974px',
        960: '960px',
        314: '314px',
        122: '122px',
        1800: '1800px',
        2800: '2800px',
      },
      minHeight: {
        802: '802px',
        450: '450px',
        960: '960px',
      },
      fontSize: { 122: '122px' },
      maxWidth: {
        1920: '1920px',
        1081.5: '1081.5px',
        1719: '1719px',
        1720: '1720px',
        1300: '1300px',
        950: '950px',
        938: '938px',
        170: '170px',
        400: '400px',
      },
      width: {
        1719: '1719px',
        1720: '1720px',
        938: '938px',
        1920: '1920px',
        170: '170px',
        377: '377px',
        1025: '1025px',
        960: '960px',
        400: '400px',
      },
      minWidth: {
        1720: '1720px',
        1300: '1300px',
      },
      gap: { 76: '76px' },
      colors: {

      },
      lineHeight: {
        61: '61px',
        122: '122px',
        100: '100px',
      },
    },
       colors: {
              
             "border": "hsl(var(--border))",
             "input": "hsl(var(--input))",
             "ring": "hsl(var(--ring))",
             "background": "hsl(var(--background))",
             "foreground": "hsl(var(--foreground))",
             "primary": {
               "DEFAULT": "hsl(var(--primary))",
               "foreground": "hsl(var(--primary-foreground))"
             },
             "secondary": {
               "DEFAULT": "hsl(var(--secondary))",
               "foreground": "hsl(var(--secondary-foreground))"
             },
             "destructive": {
               "DEFAULT": "hsl(var(--destructive))",
               "foreground": "hsl(var(--destructive-foreground))"
             },
             "muted": {
               "DEFAULT": "hsl(var(--muted))",
               "foreground": "hsl(var(--muted-foreground))"
             },
             "accent": {
               "DEFAULT": "hsl(var(--accent))",
               "foreground": "hsl(var(--accent-foreground))"
             },
             "popover": {
               "DEFAULT": "hsl(var(--popover))",
               "foreground": "hsl(var(--popover-foreground))"
             },
             "card": {
               "DEFAULT": "hsl(var(--card))",
               "foreground": "hsl(var(--card-foreground))"
             }
           },
       borderRadius: {
             "lg": "var(--radius)",
             "md": "calc(var(--radius) - 2px)",
             "sm": "calc(var(--radius) - 4px)"
           },
       keyframes: {
             "accordion-down": {
               "from": {
                 "height": "0"
               },
               "to": {
                 "height": "var(--radix-accordion-content-height)"
               }
             },
             "accordion-up": {
               "from": {
                 "height": "var(--radix-accordion-content-height)"
               },
               "to": {
                 "height": "0"
               }
             }
           }
},
  plugins: [require("tailwindcss-animate")],
}