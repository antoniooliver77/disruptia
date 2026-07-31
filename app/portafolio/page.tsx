import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";
import p from "../portafolio.module.css";

export const metadata: Metadata = {
  title: "Portafolio: academias y cursos en línea que ya funcionan",
  description:
    "Tres proyectos reales y dos juegos propios que se abren y se prueban en tu navegador: academias, lecciones con historia, simuladores y juegos didácticos.",
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
          "Juego de decisiones sobre liderazgo y accountability: el jugador es un jefe nuevo que aprueba o rechaza solicitudes contra un reglamento que cambia cada día, con reloj, citaciones y dilemas donde la regla y la persona no caben en el mismo sello. Demo del laboratorio DIsruptIA.",
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
        <span className={`${s.kicker} ${p.kickerGrande}`}>PORTAFOLIO</span>
        <h1 className={`${s.title} aparece`}>
          Aquí no te contamos nuestro trabajo: te dejamos usarlo
        </h1>
        <p className={s.lede}>
          Un portafolio normal te enseña fotos bonitas de proyectos
          terminados. Este funciona distinto: cada proyecto de esta página
          incluye lecciones y juegos reales que construimos, y los puedes
          abrir ahora mismo en tu navegador — para tomarlos tal como los
          tomaría un alumno y juzgar con tus propios dedos si están tan
          bien hechos como decimos.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnSecundario" href="#proyectos">
            Ver los proyectos ↓
          </a>
        </div>
      </header>

      {/* QUÉ HAY AQUÍ */}
      <section className={s.bloque} id="proyectos">
        <span className={s.bloqueNum}>QUÉ HAY EN ESTA PÁGINA</span>
        <h2 className={s.h2}>
          Hicimos tres proyectos para tres clientes muy distintos
        </h2>
        <p className={s.prose}>
          Una empresa que vende cursos en línea para pasar los exámenes de
          licencia de seguros. Una consultora de recursos humanos que quería
          convertir sus años de experiencia reclutando en una academia. Y un
          maestro de matemáticas con millones de seguidores que necesitaba
          una plataforma propia para sus clases. Tres públicos que no se
          parecen en nada — y el mismo método pedagógico detrás.
        </p>
        <p className={s.prose}>
          De cada proyecto te contamos qué necesitaba el cliente, qué
          construimos y qué lleva adentro. Y al final de cada uno hay
          botones para abrir muestras reales del trabajo: no es el producto
          completo (ese es del cliente), pero sí son lecciones y juegos tal
          cual los ve un alumno, abiertos dentro de un aula virtual como la
          que tendrá tu academia. Ábrelos — para eso los pusimos.
        </p>
      </section>

      {/* LABORATORIO · simuladores jugables */}
      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>EL LABORATORIO · DOS JUEGOS PARA QUE PRUEBES</span>
        <h2 className={s.h2}>
          ¿Un curso puede ser un videojuego de verdad? Hicimos dos para
          demostrarlo
        </h2>
        <p className={s.prose}>
          Cuando decimos que un curso puede tener personajes, conflicto,
          puntaje y finales distintos, la gente suele imaginarse un examen
          con dibujitos. Así que construimos estos dos juegos — no son de
          ningún cliente, son nuestros — para que lo compruebes jugando:
          uno entrena una habilidad de piso (cobrar en la caja de un súper)
          y el otro pone a prueba cómo decides cuando eres el jefe. Los dos
          se juegan aquí mismo, en tu navegador, y los dos te dicen al
          final qué aprendiste. Si tu proveedor actual te entrega
          diapositivas con un examen al final, esto te va a doler un
          poquito.
        </p>
        <div className={p.lab}>
          <article className={p.labCard}>
            <div className={p.labArte} aria-hidden="true">🛒⌨️💵</div>
            <div className={p.labCuerpo}>
              <span className={p.labMeta}>SIMULADOR OPERATIVO · HABILIDAD + MEMORIA</span>
              <h3>CAJA 07 — punto de venta</h3>
              <p>
                Es tu primer turno como cajero, y la estación es una caja de
                verdad: la banda corre, el escáner dispara su láser rojo con
                cada bip y el ticket se imprime en una pantallita verde de
                registradora. Memoriza los códigos de las frutas, escanea
                con ritmo para que el combo crezca y da el cambio exacto —
                todo mientras la paciencia del cliente se agota frente a ti.
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
              <span className={p.labMeta}>JUEGO DE DECISIONES · LIDERAZGO Y ACCOUNTABILITY</span>
              <h3>EL VISTO BUENO — el sello es tuyo</h3>
              <p>
                Acabas de ascender a jefe, y tu oficina es un escritorio de
                madera con dos sellos y un reglamento en tablilla: cada
                solicitud que llega — vacaciones, vales, horas extra — se
                azota con APROBADO o RECHAZADO según reglas que cambian
                todos los días, con el reloj encima y las citaciones cayendo
                en papelito rosa cuando te equivocas. Suena fácil, hasta que
                el papel llega con un post-it de tu propio director
                pidiéndote que te hagas de la vista gorda.
              </p>
              <ul className={p.labMecanicas}>
                <li>Encuentra qué solicitudes violan el reglamento del día</li>
                <li>Cada error es una citación — con tres, te corren</li>
                <li>2 charlas por día para los casos que un sello no resuelve</li>
                <li>Dilemas de poder, consecuencias tardías y varios finales</li>
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
          Lecciones que se cuentan como historias: el tema no empieza con
          una definición, empieza con un caso — un empleado que se lesiona,
          una casa que se incendia — y a partir de esa historia se
          desarrolla por bloques y cierra con ejemplos y práctica. Nada de
          muros de texto: cada pantalla tiene una sola idea y una razón
          para seguir a la siguiente.
        </p>
        <p className={s.prose}>
          Y cada lección es multimedia de verdad: abre con un video, cierra
          con un podcast de repaso para el camino, y en medio trae
          actividades interactivas — los temas más áridos, como el cálculo
          de compensaciones, llevan su propia calculadora para que el
          alumno practique con números reales en lugar de memorizar
          fórmulas.
        </p>

        <h3 className={s.h3}>Qué lleva adentro</h3>
        <ul className={s.lista}>
          <li>
            <strong>Storytelling didáctico</strong> — cada tema técnico
            entra por una historia con personajes y consecuencias, no por
            una definición de reglamento.
          </li>
          <li>
            <strong>Video de apertura y podcast de cierre</strong> en cada
            lección — el alumno estudia leyendo, viendo y escuchando.
          </li>
          <li>
            <strong>Actividades interactivas y calculadoras</strong> para
            practicar justo los conceptos que más gente reprueba en el
            examen.
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

        <h3 className={s.h3}>Pruébalo tú</h3>
        <p className={p.notaDemo}>
          Estas dos lecciones son reales y se abren dentro del campus
          virtual de la academia, tal como las estudia un alumno. Los
          videos y podcasts originales pertenecen a Nova, así que en su
          lugar verás un aviso donde irían — todo lo demás es la lección
          completa:
        </p>
        <div className={p.demoCards}>
          <a
            className={p.demoCard}
            href="/demos/nova-leccion-workers-compensation.html"
            target="_blank"
            rel="noopener"
          >
            <span className={p.demoTag}>LECCIÓN COMPLETA</span>
            <b>Compensación para trabajadores</b>
            <span>
              Un tema árido del examen de licencia, contado con historia,
              calculadora de indemnizaciones y evaluación.
            </span>
          </a>
          <a
            className={p.demoCard}
            href="/demos/nova-leccion-polizas-vivienda.html"
            target="_blank"
            rel="noopener"
          >
            <span className={p.demoTag}>LECCIÓN COMPLETA</span>
            <b>Tipos de pólizas de vivienda</b>
            <span>
              Quién corre el riesgo en cada póliza — con casos, comparativas
              y práctica al cierre.
            </span>
          </a>
        </div>
      </div>

      <CtaInline texto="¿Tu empresa también vende conocimiento que hoy vive en PDF? Eso se puede convertir en academia." />

      {/* CASO 02 · TALENTORÍA */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>CASO 02 · ACADEMIA DE RECURSOS HUMANOS</span>
        <h2 className={s.h2}>Talentoría</h2>
        <p className={s.respuesta}>
          Talentoría lleva años reclutando y seleccionando talento para
          otras empresas, y en ese oficio acumuló lo que no se compra en
          ningún lado: criterio real, de miles de contrataciones. Su
          necesidad era convertir todo ese conocimiento en algo que pudiera
          compartirse — no un manual dormido en un cajón, sino una academia
          en línea que le enseñara a otros reclutadores a trabajar con
          inteligencia artificial igual de bien que ellos.
        </p>

        <div className={p.ficha}>
          <div className={p.fichaDato}>
            <span className={p.fichaEtiqueta}>Tipo</span>
            <span className={p.fichaValor}>
              Academia en línea de reclutamiento y selección con IA
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
              Convertir años de experiencia en un curso completo, a la
              altura de su reputación
            </span>
          </div>
        </div>

        <h3 className={s.h3}>Qué construimos</h3>
        <p className={s.prose}>
          Su academia completa, con el curso de reclutamiento y selección
          con inteligencia artificial más ambicioso que hemos producido:
          cientos de lecciones organizadas en módulos, con videos, juegos,
          actividades interactivas y evaluaciones que miden criterio — qué
          decides frente a un caso — y no memoria.
        </p>
        <p className={s.prose}>
          El curso tiene además su propio universo narrativo: un curador
          con oficio que acompaña y corrige al participante, y un villano —
          BIASED.exe — que aparece justo cuando el tema se presta para
          tomar un atajo equivocado. Esa fricción entre personajes es lo
          que convierte cada lección en una serie de decisiones, no en una
          lectura.
        </p>

        <h3 className={s.h3}>Qué lleva adentro</h3>
        <ul className={s.lista}>
          <li>
            <strong>Cientos de lecciones en módulos</strong> — de los
            fundamentos de la IA en recursos humanos hasta los indicadores
            de calidad de contratación.
          </li>
          <li>
            <strong>Personajes y narrativa propios</strong> que confrontan
            al participante en lugar de narrarle.
          </li>
          <li>
            <strong>Juegos, videos y actividades interactivas</strong> en
            cada módulo — el conocimiento se practica, no solo se lee.
          </li>
          <li>
            <strong>Evaluación de criterio</strong> — el participante
            decide sobre casos reales y ve la consecuencia de su decisión.
          </li>
        </ul>

        <h3 className={s.h3}>Pruébalo tú</h3>
        <p className={p.notaDemo}>
          Esta es una de los cientos de lecciones del curso, abierta dentro
          del aula virtual de la academia — el temario del lado izquierdo
          te da una idea del tamaño real del proyecto:
        </p>
        <div className={p.demoCards}>
          <a
            className={p.demoCard}
            href="/demos/talentoria-perfilamiento-vacantes-ia.html"
            target="_blank"
            rel="noopener"
          >
            <span className={p.demoTag}>LECCIÓN COMPLETA · CON SU VILLANO</span>
            <b>Perfilamiento de vacantes con IA</b>
            <span>
              Por qué el perfil que pide &ldquo;pasión y ADN innovador&rdquo;
              atrae puros CVs equivocados — y cómo la IA ayuda a escribir el
              correcto, sin sesgos.
            </span>
          </a>
        </div>
      </section>

      {/* CASO 03 · PROFE LUIS */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>CASO 03 · GAMIFICACIÓN</span>
        <h2 className={s.h2}>El Profe Luis</h2>
        <p className={s.respuesta}>
          El Profe Luis explica matemáticas a más de 3 millones de personas
          en redes sociales, y quería compartir todo su conocimiento en un
          lugar propio: una plataforma donde sus clases vivieran completas
          y ordenadas, con su forma de hablar y de enseñar. El reto era
          trasladar esa cercanía a una plataforma sin que se convirtiera en
          el material escolar del que sus alumnos justamente huyen.
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
          Una estructura de dos tiempos: primero la lección presenta el
          tema con la voz del Profe — explicación, contexto, ejemplos y
          humor —; enseguida el alumno pasa a un juego hecho a la medida de
          ese tema, para practicar jugando lo que acaba de entender. El
          juego no repite la lección: la pone a prueba, que es distinto y
          es donde de verdad se aprende.
        </p>
        <p className={s.prose}>
          El resultado en la plataforma se siente como estar en clase con
          él: los alumnos avanzan tema por tema con su explicación y
          rematan cada uno jugando. Esa cercanía — que la gente sienta que
          está trabajando con el Profe y no con un libro digital — fue el
          requisito número uno de todo el diseño.
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

        <h3 className={s.h3}>Pruébalo tú</h3>
        <p className={p.notaDemo}>
          La primera clase del curso completa — con el juego Astro-Radar
          integrado al final, como lo vive el alumno — y un segundo juego
          que construimos para el tema de la recta numérica. Se disfrutan
          más en computadora:
        </p>
        <div className={p.demoCards}>
          <a
            className={p.demoCard}
            href="/demos/profeluis-leccion-numeros.html"
            target="_blank"
            rel="noopener"
          >
            <span className={p.demoTag}>LECCIÓN + SU JUEGO INTEGRADO</span>
            <b>¿Qué rayos es un número?</b>
            <span>
              La primera clase del curso con la voz del Profe, que remata
              con el Astro-Radar como práctica jugable.
            </span>
          </a>
          <a
            className={p.demoCard}
            href="/demos/profeluis-juego-burbujas.html"
            target="_blank"
            rel="noopener"
          >
            <span className={p.demoTag}>JUEGO DE PRÁCTICA</span>
            <b>Burbujas de la Recta</b>
            <span>
              Revienta las burbujas ubicando números en la recta antes de
              que se te vayan.
            </span>
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
