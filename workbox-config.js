module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{png,jpg,svg,css,js,html}"],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: "dist/sw.js",
};
