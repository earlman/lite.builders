module.exports = function (eleventyConfig) {

    // Copy `src/img` to `_site/img`
    eleventyConfig.addPassthroughCopy("src/img");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};