import { generateSitemap } from "brease-next";

export default async function sitemap() {
  const result = await generateSitemap();
  if (result.success) return result.data;
  return [];
}
