import { MetadataRoute } from "next";
import { ARTICLES_DATA } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kaizeningenieria.cl";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/novedades`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => {
    const isTargetArticle =
      article.slug === "hdpe-antofagasta-termofusion-tuberias-geomembranas" ||
      article.slug === "fibra-de-vidrio-antofagasta-estanques-revestimientos-frp";

    return {
      url: `${baseUrl}/novedades/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: isTargetArticle ? "weekly" : "monthly",
      priority: isTargetArticle ? 0.9 : 0.8,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}
