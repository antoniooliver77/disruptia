import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { CtaBanda } from "../components/CtaBanda";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Casos: academias y cursos en línea que ya funcionan",
  description:
    "Historias reales de DIsruptIA: la academia corporativa de Nova Insurance Academy y la plataforma educativa de El Profe Luis (3M+ seguidores). Sin cifras infladas.",
  alternates: { canonical: "/casos" },
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DIsruptIA",
  url: "https://disruptia.org",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Nova Insurance Academy" },
      reviewBody:
        "Oliver excedió por mucho nuestras expectativas. Nuestra academia ha sido un éxito tanto económico como educativo, gracias a su gran labor pedagógica.",
      itemReviewed: { "@type": "Service", name: "Creación de academia corporativa" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "El Profe Luis" },
      reviewBody:
        "Oliver logró encontrar mi esencia y ponerla en una plataforma educativa.",
      itemReviewed: { "@type": "Service", name: "Creación de plataforma educativa" },
    },
  ],
};

export default function CasosPage() {
  return (
    <PageShell migas={[{ href: "/casos", label: "Casos" }]} ctaMovil>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/piso-manufactura.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>CASOS</span>
        <h1 className={`${s.title} aparece`}>
          Esto ya funciona: dos historias con academia andando
        </h1>
        <p className={s.lede}>
          Sin cifras infladas ni logos decorativos: dos proyectos reales, qué
          problema traían, qué se construyó y qué dicen sus dueños. Cuando tu
          academia esté funcionando, tu historia va aquí.
        </p>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>CASO 01 · EMPRESA</span>
        <h2 className={s.h2}>Nova Insurance Academy: una academia corporativa rentable</h2>
        <p className={s.prose}>
          Nova Insurance Academy necesitaba lo que muchas empresas: que su capacitación
          dejara de ser un evento y se volviera un sistema. Se construyó su
          academia corporativa completa — cursos diseñados sobre su
          operación, plataforma funcionando y método transferido a su equipo.
        </p>
        <p className={s.prose}>
          El resultado lo describen ellos mejor que nosotros:
        </p>
        <figure className={s.cita}>
          <blockquote>
            &ldquo;Oliver excedió por mucho nuestras expectativas. Nuestra
            academia ha sido un éxito tanto económico como educativo, gracias
            a su gran labor pedagógica.&rdquo;
          </blockquote>
          <figcaption>Nova Insurance Academy — academia corporativa</figcaption>
        </figure>
        <p className={s.prose}>
          La parte que más nos importa de esa frase: "económico y educativo".
          Una academia que solo es rentable está vendiendo humo; una que solo
          es pedagógica no sobrevive al presupuesto del año siguiente. Las
          dos cosas a la vez es el estándar. ¿Quieres una academia así?{" "}
          <a href="/academias-corporativas">
            Así construimos academias corporativas
          </a>
          .
        </p>
      </section>

      <div className={s.bandaNavy}>
        <section>
          <span className={s.bloqueNum}>CASO 02 · EDUCACIÓN</span>
          <h2 className={s.h2}>
            El Profe Luis: de 3 millones de seguidores a plataforma educativa
          </h2>
          <p className={s.prose}>
            El Profe Luis es divulgador educativo con más de 3 millones de
            seguidores. Su reto era el opuesto al corporativo: sobraba
            audiencia y carisma; faltaba convertir eso en una plataforma
            educativa formal sin que se perdiera la voz que lo hizo crecer.
          </p>
          <figure className={s.cita}>
            <blockquote>
              &ldquo;Oliver logró encontrar mi esencia y ponerla en una
              plataforma educativa.&rdquo;
            </blockquote>
            <figcaption>
              El Profe Luis — divulgador educativo, 3M+ seguidores
            </figcaption>
          </figure>
          <p className={s.prose}>
            Ese es el trabajo que no se ve en un temario: encontrar la
            esencia de quien enseña y diseñar la plataforma alrededor — no
            al revés. Es lo mismo que hacemos con el conocimiento interno de
            una empresa o el modelo educativo de una institución.
          </p>
        </section>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>EL CONTEXTO</span>
        <h2 className={s.h2}>El contexto: con quién ha trabajado este equipo</h2>
        <p className={s.prose}>
          Detrás de estos casos hay 15+ años de oficio y 120+ proyectos del
          equipo fundador, con colaboraciones para UNAM, Santillana, SM
          Ediciones, Pearson, Editores Mexicanos Unidos y Talentoría. El
          detalle del enfoque está en{" "}
          <a href="/metodo">el método de los 3 actos</a>, y las piezas se
          pueden ver en <a href="/portafolio">el portafolio</a>.
        </p>
      </section>

      <CtaBanda
        titulo="El siguiente caso de esta página puede ser el tuyo"
        texto="Cuéntanos qué quieren construir. Si no somos el equipo correcto para tu caso, también te lo decimos — los casos de arriba existen porque solo tomamos proyectos donde podemos cumplir."
        waMensaje="Hola, vi los casos de disruptia.org y quiero platicar sobre nuestra academia."
      />
    </PageShell>
  );
}
