import s from "./Faq.module.css";

export type Pregunta = { q: string; a: string };

/**
 * FAQ de página comercial: acordeones nativos <details> claramente
 * clicables + schema JSON-LD FAQPage (requisito SEO/AEO del brief).
 */
export function Faq({ titulo, preguntas }: { titulo: string; preguntas: Pregunta[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className={s.faq}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className={s.titulo}>{titulo}</h2>
      <div className={s.lista}>
        {preguntas.map((f) => (
          <details key={f.q} className={s.item}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
