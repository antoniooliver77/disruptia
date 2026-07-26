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
    { url: `${BASE}/academias-corporativas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/universidad-corporativa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/capacitacion-con-inteligencia-artificial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/onboarding-empresarial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/instituciones-educativas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/formacion-docente-en-ia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/metodo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/casos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/recursos`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/portafolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/aviso-de-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
