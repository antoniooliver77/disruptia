import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["wdth"], // Archivo Expanded: los titulares usan font-stretch 112–125%
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
  preload: false, // solo metadatos y etiquetas, no bloquea LCP
  fallback: ["ui-monospace", "monospace"],
});

const SITE_URL = "https://disruptia.org";
const SITE_NAME = "DisruptIA";
const TITLE = "DisruptIA — Academias de capacitación y cursos en línea";
const DESCRIPTION =
  "Creamos academias de capacitación y cursos en línea para empresas e instituciones educativas. Inteligencia artificial, pedagogía humana. Cuéntanos tu proyecto.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · DisruptIA",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Oliver Barona", url: "https://oliverbarona.com" }],
  creator: "DisruptIA",
  publisher: "DisruptIA",
  keywords: [
    "academia corporativa",
    "academia de capacitación",
    "universidad corporativa",
    "cursos en línea para empresas",
    "capacitación con inteligencia artificial",
    "academia digital universitaria",
    "diseño instruccional",
    "e-learning",
    "DisruptIA",
  ],
  alternates: {
    canonical: "/",
    languages: { "es-MX": "/", "x-default": "/" },
  },
  // Las imágenes OG/Twitter las genera app/opengraph-image.tsx automáticamente
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "education",
};

export const viewport: Viewport = {
  themeColor: "#060D16",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DisruptIA",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/isotipo-oscuro.png`,
  description:
    "Creación de academias de capacitación y cursos en línea para empresas e instituciones educativas.",
  email: "hola@disruptia.org",
  slogan: "El futuro se aprende.",
  areaServed: "MX",
  founder: {
    "@type": "Person",
    name: "Oliver Barona",
    jobTitle: "Diseñador Instruccional Senior",
    award: "Ganador del Concurso Internacional de Creación de Cursos iSpring 2025",
    sameAs: ["https://oliverbarona.com"],
  },
  sameAs: ["https://oliverbarona.com"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "es-MX",
  publisher: { "@type": "Organization", name: "DisruptIA" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
