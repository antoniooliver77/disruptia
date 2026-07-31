"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import s from "./Nav.module.css";

type Sub = { href: string; label: string };
type Link = { href: string; label: string; subs?: Sub[] };

const LINKS: Link[] = [
  {
    href: "/academias-corporativas",
    label: "Empresas",
    subs: [
      { href: "/academias-corporativas", label: "Academias corporativas" },
      { href: "/universidad-corporativa", label: "Universidad corporativa" },
      { href: "/deteccion-de-necesidades", label: "Detección de necesidades" },
      {
        href: "/diseno-instruccional-empresarial",
        label: "Diseño instruccional",
      },
      { href: "/implementacion-de-lms", label: "Implementación de LMS" },
      { href: "/academia-de-ventas", label: "Academia de ventas" },
      {
        href: "/academia-de-servicio-al-cliente",
        label: "Servicio al cliente",
      },
      { href: "/onboarding-empresarial", label: "Onboarding empresarial" },
      {
        href: "/capacitacion-con-inteligencia-artificial",
        label: "Capacitación con IA",
      },
    ],
  },
  {
    href: "/instituciones-educativas",
    label: "Instituciones",
    subs: [
      { href: "/instituciones-educativas", label: "Academias educativas" },
      { href: "/universidades", label: "Universidades" },
      { href: "/formacion-docente-en-ia", label: "Formación docente en IA" },
    ],
  },
  { href: "/metodo", label: "Método" },
  { href: "/casos", label: "Casos" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/recursos", label: "Recursos" },
];

/** Navegación principal — banda superior con el wordmark y submenús. */
export function Nav() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Cerrar al hacer clic fuera o con Escape
  useEffect(() => {
    if (!abierto) return;
    const fuera = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setAbierto(null);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierto(null);
    };
    document.addEventListener("mousedown", fuera);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fuera);
      document.removeEventListener("keydown", esc);
    };
  }, [abierto]);

  const activo = (l: Link) =>
    pathname === l.href || l.subs?.some((x) => x.href === pathname);

  return (
    <header className={s.banda}>
      <div className={s.inner}>
        <a href="/" className={s.logo} aria-label="DIsruptIA — inicio">
          <Image
            src="/logos/wordmark-oscuro-nav.png"
            alt="DIsruptIA"
            width={190}
            height={40}
            priority
          />
        </a>
        <nav className={s.nav} aria-label="Navegación principal" ref={navRef}>
          {LINKS.map((l) =>
            l.subs ? (
              <div
                key={l.href}
                className={s.grupo}
                onMouseEnter={() => setAbierto(l.href)}
                onMouseLeave={() => setAbierto(null)}
              >
                <button
                  type="button"
                  className={`${s.link} ${s.linkBtn} ${activo(l) ? s.activo : ""}`}
                  aria-expanded={abierto === l.href}
                  onClick={() =>
                    setAbierto(abierto === l.href ? null : l.href)
                  }
                >
                  {l.label}
                  <span className={s.flecha} aria-hidden="true">
                    ▾
                  </span>
                </button>
                <ul
                  className={`${s.menu} ${abierto === l.href ? s.menuAbierto : ""}`}
                >
                  {l.subs.map((sb) => (
                    <li key={sb.href}>
                      <a
                        href={sb.href}
                        className={s.subLink}
                        aria-current={pathname === sb.href ? "page" : undefined}
                      >
                        {sb.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`${s.link} ${pathname === l.href ? s.activo : ""}`}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </a>
            )
          )}
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
