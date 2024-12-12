import * as filters from "./src/lib/filters.js";
import * as collections from "./src/lib/collections.js";

export default function (eleventyConfig) {
    // adding custom filters
    eleventyConfig.addFilter("dateShort", filters.dateShort);
    eleventyConfig.addFilter("dateLong", filters.dateLong);
    eleventyConfig.addFilter("dateYMD", filters.dateYMD);
    eleventyConfig.addFilter("dateYear", filters.dateYear);
    eleventyConfig.addFilter("dateMonthShort", filters.dateMonthShort);
    eleventyConfig.addFilter("dateMonthLong", filters.dateMonthLong);

    // adding custom collections
    eleventyConfig.addCollection("reviews", collections.reviews);
    eleventyConfig.addCollection("pages", collections.pages);
    eleventyConfig.addCollection("feed", collections.feed);
    eleventyConfig.addCollection("featured", collections.featured);

    // copy files in the directories to the output folder upon build
    eleventyConfig.addPassthroughCopy("src/css/*.css");

    // rebuild files when changes are detected
    eleventyConfig.addWatchTarget("src/css/*.css");

    return {
        dir: {
            input: "src",
            output: "public",
            data: "_data",
        },
        templateFormats: ["css", "html", "md", "njk", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    };
}
