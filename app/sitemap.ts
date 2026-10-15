import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://examfocusplus.in";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: baseUrl + "/classes", lastModified: new Date() },
    { url: baseUrl + "/sslc", lastModified: new Date() },
    { url: baseUrl + "/plus-one", lastModified: new Date() },
    { url: baseUrl + "/plus-two", lastModified: new Date() },
    { url: baseUrl + "/mcqs", lastModified: new Date() },
    { url: baseUrl + "/study-notes", lastModified: new Date() },
    { url: baseUrl + "/onam-exam", lastModified: new Date() },
    { url: baseUrl + "/onam-exam/class-5", lastModified: new Date() },
    { url: baseUrl + "/onam-exam/class-6", lastModified: new Date() },
    { url: baseUrl + "/onam-exam/class-7", lastModified: new Date() },
    { url: baseUrl + "/onam-exam/class-8", lastModified: new Date() },
    { url: baseUrl + "/onam-exam/class-9", lastModified: new Date() },
    { url: baseUrl + "/onam-exam/class-10", lastModified: new Date() },
  ];
}