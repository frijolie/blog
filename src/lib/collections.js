export const feed = (i) => i.getFilteredByGlob("./src/posts/**/*.md").reverse();
export const reviews = (i) => i.getFilteredByGlob("./src/posts/reviews/**/*.md").reverse();
export const posts = (i) => i.getFilteredByGlob("./src/posts/*.md").reverse();
export const pages = (i) => i.getFilteredByGlob("./src/pages/*.md");
export const featured = (i) =>
    i.getAllSorted().filter((post) => post.data.featured).reverse();
