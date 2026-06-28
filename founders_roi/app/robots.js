export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Prevents search indexers from crawling background backend logic routes
      ],
    },
    sitemap: "https://www.foundersroi.in/sitemap.xml",
  };
}
