export default {
    title: "The Magical Fruit",
    description: "A personal blog about comics and stuff",
    language: "en-US",
    robots: "index, follow",
    domain:
        process.env.ELEVENTY_RUN_MODE == "serve"
            ? "http://localhost:8080"
            : "https://frijolie.com",
    author: {
        name: "Frijolie",
        email: "frijolie@frijolie.com",
        url: "https://frijolie.com/about/",
    },
};
