import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://exam-focus-plus-678k.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/classes,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/sslc,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/plus-one,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/plus-two,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/mcqs,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/study-notes,
      lastModified: new Date(),
    },
  ];
}