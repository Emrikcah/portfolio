/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         colors: {
            black: "hsl(0,0%,8%)",
            teal: "hsl(153,71%,59%)",
            gray: "hsl(0,0%,14%)",
            liteGray: "hsl(0,0%,85%)",
            white: "hsl(0,0%,100%)",
            invalid: "red"
         },
         fontSize: {
            1: [
               "8.8rem",
               {
                  lineHeight: "8.8rem",
                  letterSpacing: "-0.25rem",
               },
            ],
            2: [
               "4.8rem",
               {
                  lineHeight: "5.6rem",
                  letterSpacing: "-0.15rem",
               },
            ],
            3: [
               "3.2rem",
               {
                  lineHeight: "3.2rem",
                  letterSpacing: "-0.444rem",
               },
            ],
            4: [
               "2.4rem",
               {
                  lineHeight: "3.2rem",
                  letterSpacing: "-0.333rem",

               },
            ],
            5: [
               "1.8rem",
               {
                  lineHeight: "2.8rem",
               },
            ],
         },
      },
      fontFamily: {
         grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
         medium: 500,
         bold: 700,
      },
   },
   plugins: [],
};
