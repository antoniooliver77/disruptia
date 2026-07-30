import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";
import p from "../portafolio.module.css";

export const metadata: Metadata = {
  title: "Portafolio: academias y cursos en línea que ya funcionan",
  description:
    "Tres proyectos con muestras navegables: academia de seguros, capacitación de RH con IA y matemáticas gamificadas. Ábrelas y pruébalas tú.",
  alternates: { canonical: "/portafolio" },
};

const SITE = "https://disruptia.org";

const portafolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portafolio de proyectos de DIsruptIA",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Nova Insurance Academy",
        description:
          "Academia digital de cursos en línea para preparar exámenes de licencia en seguros y vender formación profesional.",
        creator: { "@type": "Organization", name: "DIsruptIA", url: SITE },
        url: `${SITE}/portafolio`,
        review: {
          "@type": "Review",
          author: { "@type": "Organization", name: "Nova Insurance Academy" },
          reviewBody:
            "Nuestra academia ha sido un éxito tanto económico como educativo, gracias a su gran labor pedagógica.",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Talentoría — Perfilamiento de vacantes con IA",
        description:
          "Lección interactiva de capacitación para reclutadores sobre perfilamiento de vacantes con inteligencia artificial, taxonomías y mitigación de sesgos.",
        creator: { "@type": "Organization", name: "DIsruptIA", url: SITE },
        url: `${SITE}/portafolio`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "VideoGame",
        name: "CAJA 07 — Simulador de punto de venta",
        description:
          "Simulador gamificado de caja de supermercado: memorización de códigos PLU, escaneo, cobro con cambio y clientes con paciencia limitada. Demo del laboratorio DIsruptIA.",
        creator: { "@type": "Organization", name: "DIsruptIA", url: SITE },
        url: `${SITE}/demos/lab-simulador-caja.html`,
        gamePlatform: "Web",
        inLanguage: "es-MX",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "VideoGame",
        name: "EL VISTO BUENO — Juego de liderazgo y accountability",
        description:
          "Adaptación de la mecánica de Papers, Please a la jefatura: sella solicitudes contra un reglamento que cambia cada día, con reloj, citaciones y dilemas donde la regla y la persona no caben en el mismo sello. Demo del laboratorio DIsruptIA.",
        creator: { "@type": "Organization", name: "DIsruptIA", url: SITE },
        url: `${SITE}/demos/lab-juego-liderazgo.html`,
        gamePlatform: "Web",
        inLanguage: "es-MX",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "El Profe Luis — Matemáticas con juegos de refuerzo",
        description:
          "Lecciones de matemáticas para secundaria y preparatoria con actividades gamificadas, integradas en elprofeluis.com.",
        creator: { "@type": "Organization", name: "DIsruptIA", url: SITE },
        url: `${SITE}/portafolio`,
        review: {
          "@type": "Review",
          author: { "@type": "Person", name: "El Profe Luis" },
          reviewBody:
            "Oliver logró encontrar mi esencia y ponerla en una plataforma educativa.",
        },
      },
    },
  ],
};

export default function PortafolioPage() {
  return (
    <PageShell migas={[{ href: "/portafolio", label: "Portafolio" }]} ctaMovil>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portafolioJsonLd) }}
      />

      {/* HERO */}
      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/sesion-diseno.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>PORTAFOLIO</span>
        <h1 className={`${s.title} aparece`}>
          Ábrelas y pruébalas: esto no son capturas, están funcionando
        </h1>
        <p className={s.lede}>
          Todo mundo enseña capturas de pantalla bonitas en un portafolio.
          Nosotros te dejamos entrar. Aquí hay nueve piezas que puedes abrir
          ahora mismo — dos simuladores jugables hechos en casa, lecciones
          reales de clientes, juegos de matemáticas — y juzgar tú si tu
          gente las terminaría.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/metodo">
            Cómo las diseñamos
          </a>
        </div>
      </header>

      {/* CÓMO LEERLO */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>CÓMO LEER ESTO</span>
        <h2 className={s.h2}>Tres proyectos, tres problemas distintos</h2>
        <p className={s.prose}>
          Una academia que tenía que vender cursos y hacer aprobar exámenes de
          licencia. Una capacitación de recursos humanos donde el reto no era
          informar, sino cambiar criterio. Y unas matemáticas de secundaria
          que competían contra el celular del alumno. Poco tienen en común
          salvo el método — y que las tres terminaron funcionando.
        </p>
        <p className={s.prose}>
          De cada una verás qué problema traía, qué construimos y qué
          componentes lleva adentro. Y al final de cada caso, las muestras
          navegables. No son el producto completo del cliente: son piezas
          reales del trabajo, para que veas el tipo de experiencia que
          construimos y no tengas que creernos.
        </p>
      </section>

      {/* LABORATORIO · simuladores jugables */}
      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>EL LABORATORIO · JUEGA AHORA</span>
        <h2 className={s.h2}>Dos simuladores que construimos para demostrarlo</h2>
        <p className={s.prose}>
          Estos dos no son de ningún cliente: los construimos en el
          laboratorio para responder la pregunta que siempre nos hacen —
          "¿qué tan lejos pueden llegar?". Juégalos. Tienen mecánica real,
          consecuencias que se cobran después y un cierre que te dice qué
          aprendiste. Si tu proveedor actual te entrega diapositivas con
          quiz, esto te va a doler un poquito.
        </p>
        <div className={p.lab}>
          <article className={p.labCard}>
            <div className={p.labArte} aria-hidden="true">🛒⌨️💵</div>
            <div className={p.labCuerpo}>
              <span className={p.labMeta}>SIMULADOR OPERATIVO · HABILIDAD + MEMORIA</span>
              <h3>CAJA 07 — punto de venta</h3>
              <p>
                Tu primer turno como cajero: memoriza los códigos PLU reales
                de frutas y verduras, escanea con ritmo, cobra y da bien el
                cambio mientras la paciencia del cliente se agota. Tres
                niveles, de la capacitación a la hora pico.
              </p>
              <ul className={p.labMecanicas}>
                <li>Códigos PLU reales que se desbloquean por nivel</li>
                <li>Puntos, combos ×4 y racha — un error te la rompe</li>
                <li>Clientes con paciencia que se van si tardas</li>
                <li>Cobro real: efectivo con cambio exacto o tarjeta</li>
                <li>Corte de caja con repaso personalizado de errores</li>
              </ul>
              <a
                className={p.labJugar}
                href="/demos/lab-simulador-caja.html"
                target="_blank"
                rel="noopener"
              >
                Jugar CAJA 07 →
              </a>
            </div>
          </article>
          <article className={p.labCard}>
            <div className={p.labArte} aria-hidden="true">📄🔴🔵</div>
            <div className={p.labCuerpo}>
              <span className={p.labMeta}>PAPERS, PLEASE ADAPTADO · LIDERAZGO</span>
              <h3>EL VISTO BUENO — el sello es tuyo</h3>
              <p>
                Eres la nueva coordinación y todo pasa por tu firma:
                vacaciones, gastos, horas extra. Sella contra un reglamento
                que cambia cada día, con el reloj encima — hasta que la
                solicitud trae post-it de tu director y el reglamento deja
                de ser el problema.
              </p>
              <ul className={p.labMecanicas}>
                <li>Verifica documentos contra reglas que cambian a diario</li>
                <li>Reloj de turno, citaciones — a las 3 te corren</li>
                <li>2 charlas por día para cuando el sello no alcanza</li>
                <li>Dilemas con tu director, epílogos y varios finales</li>
              </ul>
              <a
                className={p.labJugar}
                href="/demos/lab-juego-liderazgo.html"
                target="_blank"
                rel="noopener"
              >
                Jugar EL VISTO BUENO →
              </a>
            </div>
          </article>
        </div>
        <p className={s.prose}>
          Cada uno se diseñó y programó en cuestión de días con nuestro
          método e inteligencia artificial en la producción. Ahora imagínalos
          con tus códigos, tus procesos y los dilemas reales de tus líderes.
        </p>
      </div>

      {/* CASO 01 · NOVA */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>CASO 01 · ACADEMIA DIGITAL</span>
        <h2 className={s.h2}>Nova Insurance Academy</h2>
        <p className={s.respuesta}>
          Nova vendía cursos para aprobar exámenes de licencia en seguros. El
          problema no era tener contenido — de eso sobraba —: era que el
          contenido técnico, tal como estaba, se leía como un reglamento. Un
          alumno que necesita aprobar un examen no necesita un documento;
          necesita una ruta.
        </p>

        <div className={p.ficha}>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Tipo</span>
            <span className={p.fichaValor}>
              Academia en línea para exámenes de licencia
            </span>
          </div>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Para quién</span>
            <span className={p.fichaValor}>
              Alumnos que deben aprobar un examen y formarse en seguros
            </span>
          </div>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Lo que buscaban</span>
            <span className={p.fichaValor}>
              Vender cursos estructurados y elevar la preparación del alumno
            </span>
          </div>
        </div>

        <h3 className={s.h3}>Qué construimos</h3>
        <p className={s.prose}>
          Lecciones en HTML con narrativa didáctica: el tema entra por un
          caso, se desarrolla por bloques y cierra con ejemplos y práctica.
          Nada de muros de texto — cada pantalla tiene una sola idea y una
          razón para seguir a la siguiente. Los temas más áridos, como el
          cálculo de compensaciones, llevan calculadora propia para que el
          alumno practique con números en lugar de memorizar fórmulas.
        </p>

        <h3 className={s.h3}>Qué lleva adentro</h3>
        <ul className={s.lista}>
          <li>
            <strong>Lecciones con estructura</strong> — entrada, desarrollo,
            ejemplos y cierre, pensadas para estudiar temas técnicos sin
            abandonar a la mitad.
          </li>
          <li>
            <strong>Video integrado</strong> como apoyo de la explicación
            principal, no como sustituto de ella.
          </li>
          <li>
            <strong>Recursos interactivos y calculadoras</strong> para
            practicar los conceptos que más reprueban.
          </li>
          <li>
            <strong>Diseño modular</strong> para que Nova agregue cursos y
            temas nuevos sin volver a empezar.
          </li>
        </ul>

        <h3 className={s.h3}>Cómo lo hicimos</h3>
        <ol className={s.pasos}>
          <li>
            <strong>Ordenar por objetivos de examen</strong>
            El temario se reorganizó según lo que el examen realmente evalúa,
            no según el índice del manual.
          </li>
          <li>
            <strong>Convertir lo técnico en navegable</strong>
            Cada tema pasó de documento plano a lección con recorrido propio.
          </li>
          <li>
            <strong>Agregar práctica</strong>
            Videos, ejemplos y ejercicios donde el alumno aplica en lugar de
            solo leer.
          </li>
          <li>
            <strong>Dejar la base vendible</strong>
            La estructura quedó lista para crecer y comercializar más cursos.
          </li>
        </ol>

        <figure className={s.cita}>
          <blockquote>
            &ldquo;Nuestra academia ha sido un éxito tanto económico como
            educativo, gracias a su gran labor pedagógica.&rdquo;
          </blockquote>
          <figcaption>Nova Insurance Academy</figcaption>
        </figure>

        <h3 className={s.h3}>Pruébalo</h3>
        <p className={p.notaDemo}>
          Dos lecciones completas, tal como las estudia un alumno:
        </p>
        <div className={p.demos}>
          <a
            className={p.demo}
            href="/demos/nova-leccion-workers-compensation.html"
            target="_blank"
            rel="noopener"
          >
            Lección: Workers&apos; Compensation
          </a>
          <a
            className={p.demo}
            href="/demos/nova-leccion-polizas-vivienda.html"
            target="_blank"
            rel="noopener"
          >
            Lección: pólizas de vivienda
          </a>
        </div>
      </div>

      <CtaInline texto="¿Tu empresa también vende conocimiento que hoy vive en PDF? Eso se puede convertir en academia." />

      {/* CASO 02 · TALENTORÍA */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>CASO 02 · CAPACITACIÓN DE RH</span>
        <h2 className={s.h2}>Talentoría</h2>
        <p className={s.respuesta}>
          Aquí el reto era distinto: no faltaba información sobre
          reclutamiento con inteligencia artificial — sobraba, y casi toda
          era humo. Lo que faltaba era criterio. Un reclutador no necesita
          que le expliquen qué es un algoritmo; necesita darse cuenta de que
          el perfil que acaba de escribir describe a un fantasma.
        </p>

        <div className={p.ficha}>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Tipo</span>
            <span className={p.fichaValor}>
              Curso en línea interactivo para recursos humanos
            </span>
          </div>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Para quién</span>
            <span className={p.fichaValor}>
              Reclutadores, generalistas de RH y líderes que participan en
              selección
            </span>
          </div>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Lo que buscaban</span>
            <span className={p.fichaValor}>
              Estandarizar criterios y mejorar decisiones de contratación
            </span>
          </div>
        </div>

        <h3 className={s.h3}>Qué construimos</h3>
        <p className={s.prose}>
          Una lección sobre perfilamiento de vacantes con IA que empieza
          donde duele: has pasado horas redactando un perfil que pide
          "pasión" y "ADN innovador", y el algoritmo te devuelve cientos de
          CVs que coinciden con las palabras y con nada más. A partir de esa
          incomodidad se explica cómo la máquina convierte texto en vectores,
          por qué las taxonomías estándar importan y dónde se cuelan los
          sesgos.
        </p>
        <p className={s.prose}>
          El contenido es técnico de verdad — procesamiento de lenguaje
          natural, taxonomías ESCO, agrupación por similitud, indicadores de
          calidad de contratación — pero se sostiene con personajes que
          discuten con el participante: un curador que corrige, un
          antagonista que propone justo el atajo equivocado. Esa fricción es
          la que convierte una lectura en una decisión.
        </p>

        <h3 className={s.h3}>Qué lleva adentro</h3>
        <ul className={s.lista}>
          <li>
            <strong>Narrativa con personajes</strong> que confrontan al
            participante en lugar de narrarle.
          </li>
          <li>
            <strong>Contenido técnico aterrizado</strong> — de vectores y
            taxonomías a lo que el reclutador escribe el lunes.
          </li>
          <li>
            <strong>Alertas de sesgo</strong> con el error típico y su
            corrección, tomados de casos reales de selección.
          </li>
          <li>
            <strong>Evaluación de criterio</strong>, no de memoria: el
            participante decide y ve la consecuencia.
          </li>
        </ul>

        <h3 className={s.h3}>Pruébalo</h3>
        <p className={p.notaDemo}>
          La lección completa, con sus evaluaciones y desafíos:
        </p>
        <div className={p.demos}>
          <a
            className={p.demo}
            href="/demos/talentoria-perfilamiento-vacantes-ia.html"
            target="_blank"
            rel="noopener"
          >
            Lección: perfilamiento de vacantes con IA
          </a>
        </div>
      </section>

      {/* CASO 03 · PROFE LUIS */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>CASO 03 · GAMIFICACIÓN</span>
        <h2 className={s.h2}>El Profe Luis</h2>
        <p className={s.respuesta}>
          El Profe Luis ya tenía lo más difícil: millones de personas que lo
          escuchan y una manera de explicar que engancha. Lo que no tenía era
          dónde ponerla. El reto fue trasladar esa voz a una plataforma sin
          que se convirtiera en el material escolar del que sus alumnos
          justamente huyen.
        </p>

        <div className={p.ficha}>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Tipo</span>
            <span className={p.fichaValor}>
              Lecciones de matemáticas con juegos de refuerzo
            </span>
          </div>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Para quién</span>
            <span className={p.fichaValor}>
              Alumnos de secundaria y preparatoria
            </span>
          </div>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Lo que buscaban</span>
            <span className={p.fichaValor}>
              Explicar el concepto y convertir la práctica en algo jugable
            </span>
          </div>
        </div>

        <h3 className={s.h3}>Qué construimos</h3>
        <p className={s.prose}>
          Una estructura de dos tiempos: la lección presenta el tema con
          explicación, contexto y ejemplos; enseguida el alumno pasa a un
          juego que retoma esa misma idea para practicarla activamente. El
          juego no repite la lección — la pone a prueba, que es distinto y es
          donde ocurre el aprendizaje.
        </p>
        <p className={s.prose}>
          Es exactamente el segundo acto de{" "}
          <a href="/metodo">nuestro método</a>: practicar y fallar donde
          fallar no cuesta nada.
        </p>

        <h3 className={s.h3}>Qué lleva adentro</h3>
        <ul className={s.lista}>
          <li>
            <strong>Lecciones con tono cercano</strong>, explicación visual y
            recorrido por los conceptos clave.
          </li>
          <li>
            <strong>Actividades gamificadas conectadas</strong> al contenido
            de su lección, no juegos genéricos pegados al final.
          </li>
          <li>
            <strong>Juegos de ubicación y clasificación numérica</strong> para
            practicar aritmética y álgebra.
          </li>
          <li>
            <strong>Formato replicable</strong> para que cada tema nuevo siga
            la misma lógica.
          </li>
        </ul>

        <figure className={s.cita}>
          <blockquote>
            &ldquo;Oliver logró encontrar mi esencia y ponerla en una
            plataforma educativa.&rdquo;
          </blockquote>
          <figcaption>
            El Profe Luis — divulgador educativo, más de 3 millones de
            seguidores
          </figcaption>
        </figure>

        <h3 className={s.h3}>Así quedó en producción</h3>
        <p className={p.notaDemo}>
          Las piezas integradas dentro de elprofeluis.com, con su navegación
          y su identidad:
        </p>
        <div className={p.capturas}>
          <figure className={p.captura}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demos/profeluis-integracion-leccion.png"
              alt="Lección integrada en elprofeluis.com con banner superior, índice lateral por temas y el contenido de clase en el área principal"
              loading="lazy"
            />
            <figcaption>
              La lección dentro de la plataforma: banner, índice lateral por
              temas y contenido de clase.
            </figcaption>
          </figure>
          <figure className={p.captura}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demos/profeluis-integracion-radar.png"
              alt="Actividad Astro-Radar colocada como refuerzo dentro de la lección, después de la explicación del tema"
              loading="lazy"
            />
            <figcaption>
              El Astro-Radar como refuerzo, justo después de la explicación.
            </figcaption>
          </figure>
          <figure className={p.captura}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demos/profeluis-integracion-burbujas.png"
              alt="Juego Burbujas de la Recta integrado como recurso de práctica, manteniendo el índice lateral y la identidad de la plataforma"
              loading="lazy"
            />
            <figcaption>
              Burbujas de la Recta como práctica, sin salirse de la identidad
              del sitio.
            </figcaption>
          </figure>
        </div>

        <h3 className={s.h3}>Pruébalo</h3>
        <p className={p.notaDemo}>
          Una lección y tres juegos. Los juegos se disfrutan más en
          computadora:
        </p>
        <div className={p.demos}>
          <a
            className={p.demo}
            href="/demos/profeluis-leccion-numeros.html"
            target="_blank"
            rel="noopener"
          >
            Lección: ¿qué rayos es un número?
          </a>
          <a
            className={p.demo}
            href="/demos/profeluis-juego-burbujas.html"
            target="_blank"
            rel="noopener"
          >
            Juego: Burbujas de la Recta
          </a>
          <a
            className={p.demo}
            href="/demos/profeluis-juego-astro-radar.html"
            target="_blank"
            rel="noopener"
          >
            Juego: Astro-Radar
          </a>
          <a
            className={p.demo}
            href="/demos/profeluis-ruta-fuego.html"
            target="_blank"
            rel="noopener"
          >
            Juego: Ruta de Fuego
          </a>
        </div>
      </div>

      {/* QUÉ DEMUESTRA */}
      <section className={`${s.bloque} ${s.conIso}`}>
        <span className={s.bloqueNum}>LO QUE ESTO DEMUESTRA</span>
        <h2 className={s.h2}>Tres públicos distintos, el mismo método</h2>
        <p className={s.prose}>
          Un adulto estudiando para una licencia de seguros, un reclutador
          revisando sus propios sesgos y un chavo de secundaria peleándose con
          la recta numérica no se parecen en nada. Lo que sí se repite es la
          estructura: nombrar el problema, dar de qué agarrarse, y terminar
          en algo que se hace, no que se lee.
        </p>
        <div className={p.demuestra}>
          <div className={p.demuestraItem}>
            <strong>Contenido técnico</strong>
            <span>
              Seguros, taxonomías de IA y álgebra vueltos experiencias que se
              terminan.
            </span>
          </div>
          <div className={p.demuestraItem}>
            <strong>Práctica real</strong>
            <span>
              Calculadoras, decisiones con consecuencia y juegos que exigen
              entender.
            </span>
          </div>
          <div className={p.demuestraItem}>
            <strong>Producción propia</strong>
            <span>
              Diseño instruccional, desarrollo y arte, sin subcontratar el
              criterio.
            </span>
          </div>
          <div className={p.demuestraItem}>
            <strong>Puesto en producción</strong>
            <span>
              Integrado en la plataforma del cliente y funcionando con
              usuarios reales.
            </span>
          </div>
        </div>
        <p className={s.prose}>
          Si quieres ver cómo se construye una academia completa desde cero,
          ahí está{" "}
          <a href="/academias-corporativas">el proceso para empresas</a> y{" "}
          <a href="/instituciones-educativas">
            el de instituciones educativas
          </a>
          . Y las historias detrás de estos proyectos están en{" "}
          <a href="/casos">los casos</a>.
        </p>
      </section>

      <CtaBanda
        titulo="Ya viste el trabajo: ahora hablemos del tuyo"
        texto="Cuéntanos qué quieren enseñar y a quién. Si tu proyecto se parece a alguno de estos, te decimos cómo lo abordaríamos y qué tendrías funcionando primero."
        waMensaje="Hola, vi el portafolio de disruptia.org y quiero platicar sobre nuestro proyecto."
      />
    </PageShell>
  );
}
