import type { MetadataRoute } from "next";

const BASE_URL = "https://smitmenpara.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/#about",
    "/#work",
    "/#experience",
    "/#skills",
    "/#achievements",
    "/#education",
    "/#contact",
  ];

  return staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}