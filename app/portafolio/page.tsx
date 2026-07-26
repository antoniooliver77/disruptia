import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import p from "../prosa.module.css";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Cursos en línea y academias que ya construimos: proyectos reales de DisruptIA para empresas e instituciones educativas.",
  alternates: { canonical: "/portafolio" },
};

/**
 * PENDIENTE: Antonio entregará el portafolio como HTML — integrarlo aquí
 * (adaptado a tokens DisruptIA) en cuanto lo comparta.
 */
export default function PortafolioPage() {
  return (
    <PageShell migas={[{ href: "/portafolio", label: "Portafolio" }]} ctaMovil>
      <header className={p.head}>
        <span className={p.code}>PORTAFOLIO</span>
        <h1 className={p.title}>Trabajo que puedes ver funcionando</h1>
        <p className={p.lede}>
          Aquí van los cursos y academias que ya construimos — no maquetas:
          piezas reales, con alumnos reales. Estamos montando la galería.
        </p>
      </header>

      <section className={p.section}>
        <p className={p.prose}>
          Mientras tanto, en <a href="/casos">casos</a> puedes leer cómo les
          fue a quienes ya tienen su academia funcionando, o{" "}
          <a href="/contacto">escríbenos</a> y te mostramos ejemplos en vivo
          de tu industria.
        </p>
      </section>
    </PageShell>
  );
}
