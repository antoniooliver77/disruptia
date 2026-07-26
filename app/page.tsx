import { PageShell } from "./components/PageShell";
import { waLink } from "./lib/contacto";
import s from "./page.module.css";

/**
 * Home provisional del scaffold: valida tokens, bandas y componentes.
 * La home definitiva (promesa → 3 actos → prueba social → oferta en
 * banda hueso → CTA) se construye y aprueba como lote propio.
 */
export default function HomePage() {
  return (
    <PageShell>
      {/* ACTO 1 · Banda tinta: promesa */}
      <section className={s.hero}>
        <span className={s.kicker}>
          ACADEMIAS DE CAPACITACIÓN · CURSOS EN LÍNEA · MX
        </span>
        <h1 className={`${s.titulo} aparece`}>
          Creamos la academia donde tu gente sí aprende
        </h1>
        <p className={s.lede}>
          DisruptIA diseña y construye academias de capacitación y cursos en
          línea completos para empresas e instituciones educativas. No damos
          webinars ni cursos presenciales: entregamos tu academia digital
          funcionando, con método pedagógico e inteligencia artificial.
        </p>
        <div className={s.ctas}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
        </div>
      </section>

      {/* ACTO 2 · Banda navy: los 3 actos del método */}
      <section className={s.actos} aria-label="Nuestro método en tres actos">
        <article className={s.acto}>
          <span className={s.numActo}>01</span>
          <h2 className={s.actoTitulo}>Tensión</h2>
          <p>
            Ya compraste la plataforma. Ya mandaste los PDF. La gente sigue sin
            aprender. Nombramos el problema antes de prometer nada.
          </p>
        </article>
        <article className={s.acto}>
          <span className={s.numActo}>02</span>
          <h2 className={s.actoTitulo}>Prueba</h2>
          <p>
            Diseñamos cursos donde tu gente practica y falla en un entorno
            seguro — porque así se aprende un oficio, no viendo videos.
          </p>
        </article>
        <article className={s.acto}>
          <span className={s.numActo}>03</span>
          <h2 className={s.actoTitulo}>Retorno</h2>
          <p>
            Cada programa termina en una pieza usable el lunes: la academia
            queda construida, funcionando y con evidencia de aprendizaje.
          </p>
        </article>
      </section>

      {/* ACTO 3 · Banda hueso: la sección que vende */}
      <section className={s.oferta}>
        <h2 className={s.ofertaTitulo}>Para quién construimos</h2>
        <div className={s.ofertaCols}>
          <article className={s.ofertaCol}>
            <h3>Empresas</h3>
            <p>
              Tu universidad corporativa completa: academias de ventas,
              servicio, onboarding, cumplimiento — cursos en línea a la medida
              de tu operación.
            </p>
            <a className={s.ofertaLink} href="/academias-corporativas">
              Academias corporativas
            </a>
          </article>
          <article className={s.ofertaCol}>
            <h3>Instituciones educativas</h3>
            <p>
              Tu academia digital institucional: formación docente, educación
              continua y cursos en línea con calidad académica real.
            </p>
            <a className={s.ofertaLink} href="/instituciones-educativas">
              Instituciones educativas
            </a>
          </article>
        </div>
        <div className={s.ofertaCta}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a
            className={s.ofertaWa}
            href={waLink(
              "Hola, vengo de disruptia.org y quiero platicar sobre crear nuestra academia de capacitación."
            )}
          >
            o escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </PageShell>
  );
}
