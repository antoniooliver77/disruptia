import type { MetadataRoute } from "next";

const BASE = "https://disruptia.org";

/**
 * Solo URLs que ya existen. Cada lote de páginas nuevas se agrega aquí
 * al publicarse (el mapa completo vive en MAPA-KEYWORDS-DISRUPTIA.md).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/portafolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/aviso-de-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
