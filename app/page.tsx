import { PageShell } from "./components/PageShell";
import { waLink } from "./lib/contacto";
import s from "./page.module.css";

const WA_HOME = waLink(
  "Hola, vengo de disruptia.org y quiero platicar sobre crear nuestra academia de capacitación."
);

const FAQS = [
  {
    q: "¿Qué es exactamente una academia de capacitación?",
    a: "Es el sistema completo de formación de una organización: los cursos en línea, la plataforma donde viven, las rutas de aprendizaje y la evidencia de que la gente aprendió. No es un curso suelto ni un LMS vacío — es la escuela de tu organización, construida a tu medida y funcionando.",
  },
  {
    q: "¿Venden cursos ya hechos?",
    a: "No. Todo lo que construimos parte de tu operación real: tus procesos, tus casos, tu gente. Los cursos genéricos son justo el problema que venimos a resolver — se terminan, se aprueban y no cambian nada el lunes.",
  },
  {
    q: "¿Dan capacitación en vivo, webinars o cursos presenciales?",
    a: "No. Nuestro servicio es crear cursos en línea y academias digitales: los diseñamos, los producimos y te los entregamos funcionando en tu plataforma. Tu academia capacita todos los días sin depender de la agenda de un instructor.",
  },
  {
    q: "¿Necesitamos tener ya una plataforma o LMS?",
    a: "No es requisito. Si ya tienen plataforma, construimos sobre ella; si no, te ayudamos a elegir la adecuada para tu caso y la dejamos montada con tu academia adentro.",
  },
  {
    q: "¿Cómo usan la inteligencia artificial?",
    a: "Donde suma: personalización de rutas, práctica con retroalimentación, producción más rápida de contenido y datos de aprendizaje que sí se pueden leer. La pedagogía la ponen humanos que han dado clase; la IA hace el trabajo pesado.",
  },
  {
    q: "¿Cuánto cuesta crear una academia?",
    a: "Cada academia se cotiza a la medida de su alcance: cuántos cursos, para cuánta gente, sobre qué plataforma. Por eso el primer paso es una conversación — nos cuentas qué necesitan y te respondemos con una propuesta concreta, con fecha y siguiente paso.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <PageShell ctaMovil>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* PROMESA · banda tinta */}
      <section className={s.hero}>
        <span className={s.kicker}>
          ACADEMIAS DE CAPACITACIÓN · CURSOS EN LÍNEA · MÉXICO
        </span>
        <h1 className={`${s.titulo} aparece`}>
          Creamos la academia donde tu gente sí aprende
        </h1>
        <p className={s.lede}>
          DIsruptIA construye academias de capacitación y cursos en línea
          completos para empresas e instituciones educativas. No damos webinars
          ni sesiones presenciales: diseñamos, producimos y entregamos tu
          academia digital funcionando — con método pedagógico, y con
          inteligencia artificial donde suma, no donde estorba.
        </p>
        <div className={s.ctas}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/portafolio">
            Ver el portafolio
          </a>
        </div>
        <dl className={s.datos}>
          <div>
            <dt>Años de oficio</dt>
            <dd>15+</dd>
          </div>
          <div>
            <dt>Proyectos entregados</dt>
            <dd>120+</dd>
          </div>
          <div>
            <dt>Personas alcanzadas</dt>
            <dd>3M+</dd>
          </div>
          <div>
            <dt>Concurso internacional iSpring</dt>
            <dd>1er lugar 2025</dd>
          </div>
        </dl>
      </section>

      {/* TENSIÓN · banda tinta, lo que ya no funciona */}
      <section className={s.tension}>
        <h2 className={s.tensionTitulo}>
          Lo que ya intentaste (y por qué no bastó)
        </h2>
        <div className={s.dolores}>
          <article className={s.dolor}>
            <h3>Compraste la plataforma</h3>
            <p>
              El LMS quedó precioso. Adentro: PDF de ochenta páginas que nadie
              abre. Una plataforma sin cursos que enganchen no es una academia
              — es un edificio vacío con recibo mensual.
            </p>
          </article>
          <article className={s.dolor}>
            <h3>Contrataste el curso genérico</h3>
            <p>
              Tu operación no es genérica. La gente termina el curso, aprueba
              el examen y el lunes trabaja exactamente igual que el viernes.
              Eso no es aprender; es cumplir.
            </p>
          </article>
          <article className={s.dolor}>
            <h3>Pusiste a tu experto a capacitar</h3>
            <p>
              Sabe muchísimo del tema y aun así el grupo no avanza, porque
              saber no es lo mismo que enseñar. Y cada hora que tu experto
              capacita es una hora que deja de operar.
            </p>
          </article>
        </div>
      </section>

      {/* MÉTODO · banda navy, los 3 actos */}
      <section className={s.actos} aria-label="Nuestro método en tres actos">
        <header className={s.actosHead}>
          <span className={s.kicker}>EL MÉTODO</span>
          <h2>Tres actos, cero diplomas de adorno</h2>
        </header>
        <div className={s.actosGrid}>
          <article className={s.acto}>
            <span className={s.numActo}>01</span>
            <h3 className={s.actoTitulo}>Tensión</h3>
            <p>
              Empezamos por lo que duele: qué no está funcionando en tu
              operación y qué le cuesta a la organización cada semana que
              sigue igual. Sin diagnóstico honesto no hay curso que sirva.
            </p>
          </article>
          <article className={s.acto}>
            <span className={s.numActo}>02</span>
            <h3 className={s.actoTitulo}>Prueba</h3>
            <p>
              Diseñamos cursos donde tu gente practica y falla en un entorno
              seguro. Decisiones, casos reales, retroalimentación — porque un
              oficio se aprende haciendo, no viendo videos.
            </p>
          </article>
          <article className={s.acto}>
            <span className={s.numActo}>03</span>
            <h3 className={s.actoTitulo}>Retorno</h3>
            <p>
              Cada programa termina en una pieza usable el lunes: la venta
              mejor cerrada, la clase mejor planeada, el proceso bien
              ejecutado. La academia queda construida y con evidencia de
              aprendizaje.
            </p>
          </article>
        </div>
        <a className="btn btnTerciario" href="/metodo">
          Conoce el método completo
        </a>
      </section>

      {/* PRUEBA SOCIAL · banda tinta */}
      <section className={s.prueba}>
        <span className={s.kicker}>PRUEBA</span>
        <h2 className={s.pruebaTitulo}>Esto ya funciona para otros</h2>

        <div className={s.testimonios}>
          <figure className={s.testimonio}>
            <blockquote>
              &ldquo;Oliver excedió por mucho nuestras expectativas. Nuestra
              academia ha sido un éxito tanto económico como educativo,
              gracias a su gran labor pedagógica.&rdquo;
            </blockquote>
            <figcaption>
              <strong>Nova Insurance Academy</strong> — academia corporativa
            </figcaption>
          </figure>
          <figure className={s.testimonio}>
            <blockquote>
              &ldquo;Oliver logró encontrar mi esencia y ponerla en una
              plataforma educativa.&rdquo;
            </blockquote>
            <figcaption>
              <strong>El Profe Luis</strong> — divulgador, 3M+ seguidores
            </figcaption>
          </figure>
        </div>

        <p className={s.colaboraciones}>
          HEMOS COLABORADO CON · UNAM · SANTILLANA · SM EDICIONES · PEARSON ·
          EDITORES MEXICANOS UNIDOS · TALENTORÍA
        </p>

        <p className={s.fundador}>
          Detrás de DIsruptIA está{" "}
          <a href="https://oliverbarona.com" rel="noopener">
            Oliver Barona
          </a>
          , diseñador instruccional senior con más de 15 años de aula y
          producción, ganador del Concurso Internacional de Creación de
          Cursos iSpring 2025.
        </p>
      </section>

      {/* OFERTA · banda hueso — la sección que vende */}
      <section className={s.oferta}>
        <h2 className={s.ofertaTitulo}>Qué construimos contigo</h2>
        <p className={s.ofertaLede}>
          Una academia completa: los cursos, la plataforma y el método. Tú
          pones el conocimiento de tu organización; nosotros lo convertimos en
          una escuela digital que funciona sola, todos los días.
        </p>

        <div className={s.ofertaCols}>
          <article className={s.ofertaCol}>
            <h3>Para empresas</h3>
            <p>
              Tu universidad corporativa: academias de ventas, servicio,
              onboarding, cumplimiento — cursos en línea hechos sobre tu
              operación real, medibles y listos para escalar a toda la
              plantilla.
            </p>
            <a className={s.ofertaLink} href="/academias-corporativas">
              Academias corporativas
            </a>
          </article>
          <article className={s.ofertaCol}>
            <h3>Para instituciones educativas</h3>
            <p>
              Tu academia digital institucional: formación docente, educación
              continua y programas en línea con calidad académica de verdad —
              no clases grabadas subidas a una carpeta.
            </p>
            <a className={s.ofertaLink} href="/instituciones-educativas">
              Instituciones educativas
            </a>
          </article>
        </div>

        <div className={s.incluye}>
          <h3>Cada academia incluye</h3>
          <ul>
            <li>Diagnóstico: qué enseñar, a quién y con qué evidencia</li>
            <li>Diseño instruccional de cada curso, con práctica y decisión</li>
            <li>Producción completa: guiones, pantallas, actividades, evaluación</li>
            <li>Plataforma montada y funcionando — la tuya o una nueva</li>
            <li>IA aplicada a rutas, práctica y datos de aprendizaje</li>
            <li>Acompañamiento hasta que la academia opere sin nosotros</li>
          </ul>
        </div>

        <div className={s.ofertaCta}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className={s.ofertaWa} href={WA_HOME}>
            o escríbenos por WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ · banda tinta */}
      <section className={s.faq}>
        <h2 className={s.faqTitulo}>Preguntas antes de escribirnos</h2>
        <div className={s.faqLista}>
          {FAQS.map((f) => (
            <details key={f.q} className={s.faqItem}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CIERRE · invitación sin superlativos */}
      <section className={s.cierre}>
        <h2 className={s.cierreTitulo}>Platiquemos esta semana</h2>
        <p className={s.cierreLede}>
          Cuéntanos qué quieren construir y para quién. Respondemos con una
          fecha y un siguiente paso concreto.
        </p>
        <a className="btn btnPrimario" href="/contacto">
          Crear nuestra academia →
        </a>
      </section>
    </PageShell>
  );
}
