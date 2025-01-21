
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss);

  
  // Copy the `assets` directory to the output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add date filters
  eleventyConfig.addFilter("dateIso", date => {
    return date.toISOString();
  });

  eleventyConfig.addFilter("dateReadable", date => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });


  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};