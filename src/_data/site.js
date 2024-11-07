export default {
    title: "The Magical Fruit",
    url: "https://frijolie.com",
    language: "en-US",
    description: "A personal blog about comics and stuff",
    domain:
        process.env.ELEVENTY_RUN_MODE == "serve" ? "http://localhost:8080" : "https://frijolie.com",
    robots: "index, follow",
    author: {
        name: "Frijolie",
        email: "frijolie@frijolie.com",
        url: "https://frijolie.com/about/"
    }
};