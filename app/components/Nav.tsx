"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import s from "./Nav.module.css";

const LINKS = [
  { href: "/academias-corporativas", label: "Empresas" },
  { href: "/instituciones-educativas", label: "Instituciones" },
  { href: "/metodo", label: "Método" },
  { href: "/casos", label: "Casos" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/recursos", label: "Recursos" },
];

/** Navegación principal — banda superior con la firma horizontal. */
export function Nav() {
  const pathname = usePathname();
  return (
    <header className={s.banda}>
      <div className={s.inner}>
        <a href="/" className={s.logo} aria-label="DisruptIA — inicio">
          <Image
            src="/logos/wordmark-oscuro-nav.png"
            alt="DisruptIA"
            width={190}
            height={40}
            priority
          />
        </a>
        <nav className={s.nav} aria-label="Navegación principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${s.link} ${pathname.startsWith(l.href) ? s.activo : ""}`}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contacto"
            className={`btn btnPrimario ${s.cta}`}
            aria-current={pathname === "/contacto" ? "page" : undefined}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
