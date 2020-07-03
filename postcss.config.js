const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
    process.env.NODE_ENV === "production"
      ? cssnano({
          preset: "default"
        })
      : null,
    process.env.NODE_ENV === "production"
      ? purgecss({
          content: ["layout/*.html"],
          css: ["css/style.css"],
          defaultExtractor: content => content.match(/[A-z0-9-:\/]+/g) || []
        })
      : null
  ]
};
