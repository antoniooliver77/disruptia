import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "El método de los 3 actos: diseño instruccional que funciona",
  description:
    "Tensión, prueba y retorno: el método de diseño instruccional de DisruptIA. Cursos en línea donde la gente practica, falla en un entorno seguro y vuelve con algo usable.",
  alternates: { canonical: "/metodo" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oliver Barona",
  url: "https://oliverbarona.com",
  jobTitle: "Diseñador Instruccional Senior",
  worksFor: { "@type": "Organization", name: "DisruptIA", url: "https://disruptia.org" },
  knowsAbout: [
    "Diseño Instruccional",
    "Pedagogía",
    "E-learning",
    "Academias corporativas",
    "Inteligencia artificial aplicada a educación",
    "Evaluación del aprendizaje",
  ],
  award: "Ganador del Concurso Internacional de Creación de Cursos iSpring 2025",
  sameAs: ["https://oliverbarona.com"],
};

export default function MetodoPage() {
  return (
    <PageShell migas={[{ href: "/metodo", label: "Método" }]} ctaMovil>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/storyboard.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EL MÉTODO</span>
        <h1 className={`${s.title} aparece`}>
          Tres actos: así se diseña un curso que sí cambia lo que la gente hace
        </h1>
        <p className={s.lede}>
          Escribimos como habla alguien que ha dado clase y ha fracasado en el
          intento — y diseñamos igual. Este método salió de años de ver
          cursos técnicamente impecables que no cambiaban nada. La estructura
          es simple; lo difícil es respetarla.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/casos">
            Ver el método aplicado
          </a>
        </div>
      </header>

      <section className={`${s.bloque} ${s.conIso}`}>
        <span className={s.bloqueNum}>LA IDEA</span>
        <h2 className={s.h2}>¿Qué es el método de los 3 actos?</h2>
        <p className={s.respuesta}>
          Es la estructura narrativa y pedagógica con la que diseñamos cada
          curso y cada academia: primero la tensión (nombrar lo que no
          funciona), luego la prueba (practicar y fallar en un entorno
          seguro) y al final el retorno (volver a la operación con algo
          usable). Viene del modo en que las personas realmente aprenden un
          oficio — no del índice de un manual.
        </p>
      </section>

      {/* ACTO 1 — banda navy */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>ACTO 01</span>
        <h2 className={s.h2}>Tensión: nombrar el dolor antes que la solución</h2>
        <p className={s.prose}>
          Todo curso nuestro empieza donde le duele al que lo toma: la venta
          que se cayó, el cliente que se fue, la clase donde nadie levantó la
          mano. Si el participante no reconoce el problema como suyo en los
          primeros minutos, el resto del curso es trámite. Por eso el
          diagnóstico no es un formalismo: es la materia prima del diseño.
        </p>
        <p className={s.prose}>
          Esto también disciplina al contenido. Un curso no lleva "todo lo
          que el experto sabe"; lleva lo que resuelve la tensión elegida. Lo
          demás estorba — y cortarlo es la mitad de nuestro trabajo.
        </p>
      </div>

      {/* ACTO 2 — tinta */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>ACTO 02</span>
        <h2 className={s.h2}>Prueba: practicar y fallar sin costo</h2>
        <p className={s.prose}>
          En el centro de cada curso hay práctica con decisiones: casos,
          simulaciones, escenarios con consecuencias. El participante se
          equivoca donde equivocarse no cuesta — y recibe retroalimentación
          que explica, no que regaña. Mostramos el trabajo sucio: los
          intentos fallidos enseñan más que el ejemplo perfecto.
        </p>
        <p className={s.prose}>
          Aquí es donde la inteligencia artificial suma de verdad: práctica
          conversacional, retroalimentación inmediata, rutas que se ajustan a
          cómo va cada quien. La IA hace el trabajo pesado; el criterio
          pedagógico — qué practicar, qué evaluar, qué perdonar — lo ponen
          humanos que han dado clase.
        </p>
      </section>

      {/* ACTO 3 — banda navy */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>ACTO 03</span>
        <h2 className={s.h2}>Retorno: volver con algo que se usa el lunes</h2>
        <p className={s.prose}>
          Cada programa termina en una pieza usable: el guion de venta
          ajustado a tu producto, la planeación de clase lista para el grupo
          real, el proceso ejecutado sin supervisión. No coleccionamos
          diplomas: coleccionamos evidencia de que algo cambió en la
          operación. Esa evidencia es también lo que le reportas a dirección.
        </p>
      </div>

      <CtaInline texto="¿Quieres ver los 3 actos aplicados a tu operación? Es una conversación, no un compromiso." />

      <section className={s.bloque}>
        <span className={s.bloqueNum}>LOS LÍMITES</span>
        <h2 className={s.h2}>¿Qué NO hacemos (y por qué)?</h2>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>LÍMITE 1</span>
            <h3>No damos capacitación en vivo ni presencial</h3>
            <p>
              Construimos cursos en línea y academias que capacitan solas,
              todos los días. Es otro oficio, y es el nuestro.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>LÍMITE 2</span>
            <h3>No vendemos cursos de catálogo</h3>
            <p>Lo genérico ya lo probaste y ya sabes cómo termina.</p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>LÍMITE 3</span>
            <h3>No subimos tus PDF a un LMS</h3>
            <p>Eso no es una academia, es un archivero con contraseña.</p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>LÍMITE 4</span>
            <h3>No prometemos magia con IA</h3>
            <p>
              La usamos donde suma y la revisamos siempre. Un curso malo
              generado rápido sigue siendo un curso malo.
            </p>
          </article>
        </div>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>EL OFICIO</span>
        <h2 className={s.h2}>¿Quién está detrás del método?</h2>
        <p className={s.prose}>
          <a href="https://oliverbarona.com" rel="noopener">
            Oliver Barona
          </a>
          , diseñador instruccional senior: más de 15 años diseñando
          formación para empresas, editoriales e instituciones — UNAM,
          Santillana, SM Ediciones, Pearson, Editores Mexicanos Unidos,
          Talentoría —, más de 120 proyectos entregados, contenidos que han
          llegado a más de 3 millones de personas y el primer lugar del
          Concurso Internacional de Creación de Cursos iSpring 2025.
        </p>
        <p className={s.prose}>
          DisruptIA es la empresa donde ese oficio se vuelve equipo y
          sistema: diseño instruccional, producción y tecnología bajo el
          mismo método. Puedes ver el trabajo en{" "}
          <a href="/casos">los casos</a> y en{" "}
          <a href="/portafolio">el portafolio</a>.
        </p>
        <dl className={s.datos}>
          <div>
            <dt>Años de oficio</dt>
            <dd>15+</dd>
          </div>
          <div>
            <dt>Proyectos</dt>
            <dd>120+</dd>
          </div>
          <div>
            <dt>Personas alcanzadas</dt>
            <dd>3M+</dd>
          </div>
          <div>
            <dt>iSpring internacional</dt>
            <dd>1er lugar</dd>
          </div>
        </dl>
      </div>

      <CtaBanda
        titulo="El método funciona cuando se aplica a un caso real: el tuyo"
        texto="Cuéntanos qué quieren enseñar y a quién. Te decimos, con honestidad, cómo lo diseñaríamos en tres actos — y qué entregable tendrías el primer mes."
        waMensaje="Hola, leí el método de los 3 actos en disruptia.org y quiero platicar sobre nuestra academia."
      />
    </PageShell>
  );
}
