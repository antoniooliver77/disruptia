import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { CtaBanda } from "../components/CtaBanda";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Recursos sobre capacitación y academias en línea",
  description:
    "Guías directas sobre academias corporativas, LMS, DNC y educación en línea: qué funciona, qué es humo y cómo decidir. Sin relleno.",
  alternates: { canonical: "/recursos" },
};

/**
 * Hub del silo de recursos. Las guías se publican por lotes; cada una
 * se agrega aquí como tarjeta con enlace al publicarse.
 */
export default function RecursosPage() {
  return (
    <PageShell migas={[{ href: "/recursos", label: "Recursos" }]} ctaMovil>
      <header className={s.head}>
        <span className={s.kicker}>RECURSOS</span>
        <h1 className={`${s.title} aparece`}>
          Guías para decidir sobre capacitación sin que te vendan humo
        </h1>
        <p className={s.lede}>
          Lo que le explicaríamos a un director de RH o a un rector en una
          buena conversación: qué es cada cosa, qué funciona, qué es moda y
          cómo decidir. Escritas por gente que ha dado clase — y que ha
          fracasado en el intento, que es donde se aprende.
        </p>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>EN PRODUCCIÓN</span>
        <h2 className={s.h2}>Las primeras guías están en producción</h2>
        <p className={s.prose}>
          Estamos escribiendo las primeras: qué es una academia corporativa
          (y qué no es), por qué comprar un LMS no resuelve la capacitación,
          cuánto cuesta crear una academia y cómo hacer una detección de
          necesidades (DNC) que sirva. Se publican aquí en las próximas
          semanas.
        </p>
        <p className={s.prose}>
          Mientras tanto, las respuestas rápidas ya viven en las páginas de
          servicio:{" "}
          <a href="/academias-corporativas">academias corporativas</a> para
          empresas,{" "}
          <a href="/instituciones-educativas">academias digitales</a> para
          instituciones y <a href="/metodo">el método de los 3 actos</a>.
        </p>
      </section>

      <CtaBanda
        titulo="¿Tu pregunta no está en ninguna guía?"
        texto="Escríbenos y te la respondemos directo — y de paso nos dices qué guía deberíamos escribir después."
        waMensaje="Hola, vengo de la sección de recursos de disruptia.org y tengo una pregunta sobre capacitación."
      />
    </PageShell>
  );
}
