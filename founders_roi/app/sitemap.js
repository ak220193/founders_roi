export default async function sitemap() {
  const baseUrl = "https://www.foundersroi.in";

  // Explicitly mapping all your navigational routes
  const routes = [
    "", // Home page
    "/why-us", // Why Founders ROI
    "/services", // Services
    "/process", // Process
    "/clients", // Clients
    "/contact", // Contact
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8, // Peak crawling weight focused on your landing view
  }));
}
