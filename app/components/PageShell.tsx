import type { ReactNode } from "react";
import s from "./PageShell.module.css";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";

export type Miga = { href: string; label: string };

const SITE_URL = "https://disruptia.org";

/**
 * Marco común de las páginas: nav, breadcrumbs visibles (con su JSON-LD
 * BreadcrumbList) y footer. La home no manda `migas`.
 */
export function PageShell({
  children,
  migas,
  ctaMovil = false,
}: {
  children: ReactNode;
  migas?: Miga[];
  /** CTA principal fijo abajo en móvil (regla del manual, mín 48px). */
  ctaMovil?: boolean;
}) {
  const breadcrumbJsonLd = migas
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          ...migas.map((m, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: m.label,
            item: `${SITE_URL}${m.href}`,
          })),
        ],
      }
    : null;

  return (
    <>
      <Nav />
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <main className={s.main}>
        {migas && (
          <nav className={s.migas} aria-label="Ruta de navegación">
            <a href="/">Inicio</a>
            {migas.map((m, i) => (
              <span key={m.href}>
                <span className={s.sep} aria-hidden="true">
                  /
                </span>
                {i === migas.length - 1 ? (
                  <span aria-current="page">{m.label}</span>
                ) : (
                  <a href={m.href}>{m.label}</a>
                )}
              </span>
            ))}
          </nav>
        )}
        {children}
      </main>
      {ctaMovil && (
        <a href="/contacto" className={s.ctaMovil}>
          Crear nuestra academia →
        </a>
      )}
      <SiteFooter />
    </>
  );
}
