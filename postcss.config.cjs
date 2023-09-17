// postcss.config.cjs. Note must have a .cjs file ext
module.exports = {
   plugins: [
     require("postcss-import"),
     require("tailwindcss/nesting")(require('postcss-nesting')),
     require("tailwindcss"),
     require("autoprefixer"),
   ],
 };