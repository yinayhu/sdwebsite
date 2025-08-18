module.exports = async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addCollection("posts", function(collectionApi) {
        // return only files in the "posts" folder
        return collectionApi.getFilteredByGlob("src/posts/*.md");
      });
    return {
        dir: {
          input: "src",
          includes: "_includes",
          output: "_site"
        },
    };
    
};