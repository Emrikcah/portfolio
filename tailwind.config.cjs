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
            5: [
               "88px",
               {
                  lineHeight: "88px",
                  letterSpacing: "-2.5px",
               },
            ],
            4: [
               "48px",
               {
                  lineHeight: "56px",
                  letterSpacing: "-1.5px",
               },
            ],
            3: [
               "32px",
               {
                  lineHeight: "32px",
                  
               },
            ],
            2: [
               "24px",
               {
                  lineHeight: "32px",
                  

               },
            ],
            1: [
               "18px",
               {
                  lineHeight: "28px",
               },
            ],
         },
         backgroundImage: {
            tablet: "url('/src/assets/images/image-profile-tablet.webp')",
            desktop: "url('/src/assets/images/image-profile-desktop.webp')",
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
