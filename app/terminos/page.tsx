import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import p from "../prosa.module.css";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso de disruptia.org: alcance del contenido, propiedad intelectual y naturaleza informativa de los materiales.",
  alternates: { canonical: "/terminos" },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <PageShell migas={[{ href: "/terminos", label: "Términos y condiciones" }]}>
      <header className={p.head}>
        <span className={p.code}>DOCUMENTO LEGAL</span>
        <h1 className={p.title}>Términos y condiciones</h1>
        <p className={p.lede}>
          Las reglas del juego de este sitio — escritas para humanos, no para
          asustar.
        </p>
      </header>

      <section className={p.section}>
        <h2 className={p.h2}>Uso del sitio</h2>
        <p className={p.prose}>
          disruptia.org es el sitio comercial de DisruptIA, empresa dedicada a
          la creación de academias de capacitación y cursos en línea para
          empresas e instituciones educativas. Su contenido busca explicar
          nuestros servicios y método. Al usarlo aceptas estos términos.
        </p>

        <h2 className={p.h2}>Contenidos informativos</h2>
        <p className={p.prose}>
          Los textos, guías, ejemplos y cualquier material interactivo del
          sitio son <strong>herramientas informativas e ilustrativas</strong>:
          te ayudan a entender cómo trabajamos, pero{" "}
          <strong>no constituyen una oferta vinculante</strong> ni una
          cotización definitiva. Todo acuerdo real — alcance, precios, plazos,
          entregables — se define y firma por escrito entre las partes,
          después de una conversación.
        </p>

        <h2 className={p.h2}>Propiedad intelectual</h2>
        <p className={p.prose}>
          El diseño, los textos y el código de este sitio son propiedad de
          DisruptIA, salvo las marcas de terceros mencionadas, que pertenecen
          a sus titulares. Puedes compartir el contenido citando la fuente; no
          puedes reproducirlo con fines comerciales sin permiso.
        </p>

        <h2 className={p.h2}>Testimonios</h2>
        <p className={p.prose}>
          Los testimonios publicados corresponden a clientes reales y reflejan
          su experiencia particular; no garantizan resultados idénticos,
          porque cada organización — como cada academia — es distinta.
        </p>

        <h2 className={p.h2}>Legislación aplicable</h2>
        <p className={p.prose}>
          Estos términos se rigen por las leyes de los Estados Unidos
          Mexicanos. Última actualización: julio de 2026.
        </p>
      </section>
    </PageShell>
  );
}
