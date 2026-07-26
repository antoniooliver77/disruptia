import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Academia corporativa: crea la escuela de tu empresa",
  description:
    "Creamos tu academia corporativa completa: cursos en línea a la medida, plataforma y método. Capacitación interna que sí cambia cómo trabaja tu gente.",
  alternates: { canonical: "/academias-corporativas" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de academias corporativas",
  serviceType: "Diseño y construcción de academias de capacitación empresarial",
  provider: { "@type": "Organization", name: "DisruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Diseño instruccional, producción de cursos en línea a la medida y montaje de plataforma para la academia corporativa de tu empresa.",
  url: "https://disruptia.org/academias-corporativas",
};

const FAQS = [
  {
    q: "¿Qué diferencia hay entre comprar cursos y crear una academia corporativa?",
    a: "Un curso comprado es genérico: habla de una empresa que no es la tuya. Una academia corporativa se construye sobre tus procesos, tus productos y tus casos reales, y queda como un activo de tu empresa: la puedes crecer, medir y usar para cada nueva generación de empleados sin volver a pagar por persona.",
  },
  {
    q: "¿Cuánta gente necesito para que valga la pena una academia?",
    a: "Más que un número mágico, la señal es la repetición: si cada mes explicas lo mismo a gente nueva, si la rotación te obliga a reentrenar constantemente, o si un error de operación te cuesta más que un curso, ya te conviene. La academia convierte ese esfuerzo repetido en un sistema que trabaja solo.",
  },
  {
    q: "¿Dan la capacitación en vivo o presencial?",
    a: "No. Creamos cursos en línea y academias digitales: los diseñamos, los producimos y los dejamos funcionando en tu plataforma. Así tu gente se capacita todos los días, en todos los turnos y todas las sedes, sin depender de la agenda de un instructor.",
  },
  {
    q: "¿Sirve para personal operativo que no está frente a una computadora?",
    a: "Sí. Diseñamos para el contexto real de tu gente: cursos que se toman desde el celular, en cápsulas cortas, con lenguaje del piso y no de oficina. La capacitación en manufactura, retail o logística es de lo que más construimos.",
  },
  {
    q: "¿Qué pasa con la capacitación obligatoria (STPS, DC-3, NOM-035)?",
    a: "La academia puede incluir tus cursos normativos y dejar registro de quién los tomó y con qué resultado, para que el cumplimiento deje de ser una carpeta de evidencias armada a las carreras.",
  },
  {
    q: "¿Cuánto cuesta crear una academia corporativa?",
    a: "Depende del alcance: cuántos cursos, para cuánta gente, sobre qué plataforma. No vendemos paquetes de catálogo; cotizamos sobre tu caso. El primer paso es una conversación donde definimos alcance y prioridades, y te respondemos con una propuesta concreta.",
  },
];

export default function AcademiasCorporativasPage() {
  return (
    <PageShell
      migas={[{ href: "/academias-corporativas", label: "Academias corporativas" }]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* HERO */}
      <header className={s.head}>
        <span className={s.kicker}>SILO · EMPRESAS</span>
        <h1 className={`${s.title} aparece`}>
          Academia corporativa: la escuela interna de tu empresa
        </h1>
        <p className={s.lede}>
          Tu empresa ya capacita — en juntas, en WhatsApp, en el "pregúntale a
          Lupita que ella sabe". Una academia corporativa convierte ese
          conocimiento disperso en cursos en línea a la medida, medibles y
          disponibles todos los días. Nosotros la diseñamos, la producimos y
          te la entregamos funcionando.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/casos">
            Ver casos reales
          </a>
        </div>
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
      </header>

      {/* 01 · DEFINICIÓN */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>01 · LA DEFINICIÓN</span>
        <h2 className={s.h2}>¿Qué es una academia corporativa?</h2>
        <p className={s.respuesta}>
          Una academia corporativa es el sistema de formación interna de una
          empresa: el conjunto de cursos en línea, rutas de aprendizaje,
          plataforma y evaluaciones con el que una organización desarrolla a
          su propia gente. A diferencia de la capacitación suelta — un curso
          por aquí, un webinar por allá —, la academia es permanente,
          acumulativa y de la empresa: el conocimiento queda en un activo
          propio, no en la memoria de quien tomó el curso.
        </p>
        <p className={s.prose}>
          En la práctica, la academia corporativa responde tres preguntas que
          el área de recursos humanos carga sola desde hace años: qué debe
          saber cada puesto, cómo se lo enseñamos sin frenar la operación, y
          cómo sabemos que de verdad lo aprendió. Cuando esas tres respuestas
          viven en un sistema — y no en carpetas, correos y buena voluntad —
          la capacitación interna deja de ser un gasto que se repite y se
          convierte en desarrollo de talento que se acumula.
        </p>
      </section>

      {/* 02 · EL PROBLEMA — banda navy */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · EL PROBLEMA</span>
        <h2 className={s.h2}>¿Por qué comprar un LMS no resuelve la capacitación?</h2>
        <p className={s.respuesta}>
          Porque el LMS es el edificio, no la escuela. Un LMS (plataforma de
          gestión del aprendizaje) administra usuarios, entrega contenidos y
          registra avances — pero no trae adentro los cursos que tu operación
          necesita. La historia se repite en miles de empresas: se contrata
          la plataforma, se suben los PDF y los videos de siempre, y a los
          seis meses el reporte dice lo que todos ya sabían: nadie entra.
        </p>
        <p className={s.prose}>
          Nuestro trabajo empieza donde el LMS se queda corto: en el diseño
          instruccional de cursos que tu gente sí quiere terminar, hechos
          sobre tus procesos y tus casos. Si ya tienes plataforma,
          construimos sobre ella; si no, te ayudamos a elegir una sin
          casarte con la más cara.
        </p>
      </div>

      {/* 03 · LA COMPARACIÓN */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · LA COMPARACIÓN</span>
        <h2 className={s.h2}>¿Academia corporativa o universidad corporativa?</h2>
        <p className={s.prose}>
          Son grados del mismo camino. La academia corporativa resuelve la
          formación de áreas concretas; la universidad corporativa es la
          versión madura: varias academias — ventas, operaciones, liderazgo —
          bajo una misma estructura, con planes de carrera y certificación
          interna. La buena noticia: no tienes que decidir hoy. Toda
          universidad corporativa empezó siendo una academia que funcionó.
        </p>
        <div className={s.tablaWrap}>
          <table className={s.tabla}>
            <thead>
              <tr>
                <th>Criterio</th>
                <th>Academia corporativa</th>
                <th>Universidad corporativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alcance</td>
                <td>Una o pocas áreas (ventas, servicio, onboarding)</td>
                <td>Toda la organización, por escuelas o facultades</td>
              </tr>
              <tr>
                <td>Objetivo</td>
                <td>Cerrar brechas concretas de desempeño</td>
                <td>Plan de carrera, upskilling y reskilling continuos</td>
              </tr>
              <tr>
                <td>Punto de partida ideal</td>
                <td>Un dolor urgente y medible</td>
                <td>Una academia que ya demostró resultados</td>
              </tr>
              <tr>
                <td>Tiempo para arrancar</td>
                <td>Semanas</td>
                <td>Meses, por fases</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 04 · EL PROCESO */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>04 · EL PROCESO</span>
        <h2 className={s.h2}>¿Cómo se crea una academia de capacitación empresarial?</h2>
        <p className={s.prose}>
          El proceso que seguimos con cada empresa tiene cinco pasos. No hay
          magia: hay método, y cada paso deja un entregable que puedes ver y
          corregir antes de seguir.
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Diagnóstico (la DNC de verdad)</strong>
            Detección de necesidades de capacitación sobre tu operación real:
            qué puestos, qué brechas, qué le cuestan hoy a la empresa. Salimos
            con un mapa de cursos priorizado — no con un catálogo de deseos.
          </li>
          <li>
            <strong>Diseño instruccional</strong>
            Cada curso se diseña antes de producirse: objetivos observables,
            práctica con decisiones reales, evaluación que mide desempeño y
            no memoria. Aquí es donde un curso deja de ser un video con quiz.
          </li>
          <li>
            <strong>Producción de los cursos</strong>
            Guiones, pantallas, actividades, casos, evaluaciones. Usamos
            inteligencia artificial para producir más rápido — con revisión
            pedagógica humana en cada pieza, porque la IA acelera el trabajo
            pero no sabe qué le duele a tu operación.
          </li>
          <li>
            <strong>Montaje de la plataforma</strong>
            Tu academia queda funcionando: rutas por puesto, inscripciones,
            constancias, reportes. Sobre tu LMS actual o sobre uno nuevo
            elegido para tu caso y tu presupuesto.
          </li>
          <li>
            <strong>Lanzamiento y acompañamiento</strong>
            Estrategia de arranque para que la gente entre (el mejor curso
            del mundo no sirve vacío), lectura de datos de los primeros
            grupos y ajustes. Nos vamos cuando la academia opera sin
            nosotros.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Ya ubicaste en qué paso está atorada tu empresa? Platiquémoslo." />

      {/* 05 · LO QUE CONSTRUIMOS */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LO QUE CONSTRUIMOS</span>
        <h2 className={s.h2}>¿Qué academias construimos para empresas?</h2>
        <p className={s.prose}>
          Cada empresa arranca por donde más le duele. Estas son las
          academias que más nos piden — por función, por proceso y por
          industria:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>POR FUNCIÓN</span>
            <h3>Academia de ventas</h3>
            <p>
              Onboarding comercial, producto, manejo de objeciones y práctica
              de cierre, para acortar la rampa de cada vendedor nuevo.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>POR FUNCIÓN</span>
            <h3>Academia de servicio al cliente</h3>
            <p>
              Criterio antes que guion: cursos donde el equipo practica
              clientes difíciles sin quemar clientes reales.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>POR PROCESO</span>
            <h3>Onboarding empresarial</h3>
            <p>
              Los primeros 90 días resueltos: cultura, procesos y puesto,
              para que la rotación temprana deje de comerse tus
              contrataciones.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>POR PROCESO</span>
            <h3>Capacitación normativa</h3>
            <p>
              DC-3, NOM-035 y cursos obligatorios con registro y evidencia,
              sin teatro.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>POR INDUSTRIA</span>
            <h3>Capacitación por industria</h3>
            <p>
              Manufactura desde el celular en piso, retail con temporada
              alta, financiero con cumplimiento, salud con protocolos.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CON IA</span>
            <h3>Capacitación con inteligencia artificial</h3>
            <p>
              Rutas personalizadas, práctica con retroalimentación y datos de
              aprendizaje que sí se pueden leer.
            </p>
          </article>
        </div>
        <p className={s.prose}>
          Cada una de estas academias tiene su propia página con el detalle de
          qué incluye — las estamos publicando por partes; si la tuya aún no
          aparece, <a href="/contacto">escríbenos</a> y te contamos el plan
          para tu caso.
        </p>
      </section>

      {/* 06 · EL ENTREGABLE — banda hueso */}
      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>06 · EL ENTREGABLE</span>
        <h2 className={s.h2}>¿Qué incluye exactamente una academia hecha por DisruptIA?</h2>
        <p className={s.prose}>
          "Academia" es una palabra que cada proveedor usa como quiere, así
          que vale la pena aterrizarla. Cuando entregamos una academia
          corporativa, entregamos esto — y puedes usar esta lista para
          comparar propuestas, incluida la nuestra:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 1</span>
            <h3>El mapa de formación</h3>
            <p>
              Qué debe saber cada puesto y en qué orden: rutas de aprendizaje
              por rol, no un catálogo alfabético de cursos.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 2</span>
            <h3>Los cursos, producidos</h3>
            <p>
              Guion, pantallas, actividades, casos y evaluación de cada
              curso. Contenido a la medida de tu operación, con tu
              vocabulario y tus reglas.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 3</span>
            <h3>La plataforma operando</h3>
            <p>
              Inscripciones automáticas, constancias, recordatorios y
              reportes que un humano puede leer sin exportar cinco archivos.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 4</span>
            <h3>El sistema de evidencia</h3>
            <p>
              Cómo sabe la empresa que alguien ya está listo para operar:
              evaluaciones de desempeño, no exámenes de memoria.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 5</span>
            <h3>El método documentado</h3>
            <p>
              Plantillas y criterios para que tu equipo produzca los
              siguientes cursos sin nosotros. La academia es tuya, no una
              renta.
            </p>
          </article>
        </div>
      </div>

      {/* 07 · LOS ERRORES */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>07 · LOS ERRORES</span>
        <h2 className={s.h2}>Los errores que más academias internas matan</h2>
        <p className={s.prose}>
          Hemos visto morir academias con presupuesto, sponsor y buena
          intención. Casi siempre por alguna de estas cinco causas — y las
          cinco se previenen en el diseño, no en el rescate:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 1</span>
            <h3>Empezar por la plataforma</h3>
            <p>
              Se compra el LMS primero y se decide qué enseñar después. Es
              construir el edificio antes de saber qué escuela va adentro.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 2</span>
            <h3>Subir lo que ya existía</h3>
            <p>
              Los manuales de inducción y las presentaciones de la última
              convención no se vuelven cursos por estar en línea. Se vuelven
              evidencia de que nadie los abre.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 3</span>
            <h3>Querer todo el catálogo el primer día</h3>
            <p>
              Cuarenta cursos mediocres pierden contra cinco cursos que la
              gente recomienda. La academia crece por reputación interna.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 4</span>
            <h3>Medir terminación en lugar de desempeño</h3>
            <p>
              El 95% de finalización con la operación igual que antes no es
              un logro: es una alarma con moño.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 5</span>
            <h3>Lanzar sin estrategia de arranque</h3>
            <p>
              La academia no se anuncia en un correo: se lanza como producto
              interno, con los jefes adentro primero.
            </p>
          </article>
        </div>
      </section>

      {/* 08 · LA MEDICIÓN — banda navy */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>08 · LA MEDICIÓN</span>
        <h2 className={s.h2}>¿Cómo se mide el éxito de una academia corporativa?</h2>
        <p className={s.prose}>
          Con indicadores en cadena, de la más superficial a la que le
          importa a dirección. Los cuatro niveles clásicos de evaluación
          (Kirkpatrick) se traducen a preguntas simples:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>¿Les sirvió? (reacción)</strong>
            No si les gustó: si lo recomendarían a un colega del mismo
            puesto. La recomendación interna predice el uso futuro mejor que
            cualquier encuesta de satisfacción.
          </li>
          <li>
            <strong>¿Aprendieron? (aprendizaje)</strong>
            Medido con desempeño en práctica — decisiones en casos, no
            opción múltiple de memoria. Aquí es donde el diseño de la
            evaluación se paga solo.
          </li>
          <li>
            <strong>¿Lo aplican? (transferencia)</strong>
            La pregunta del método de los 3 actos: ¿qué hace distinto esta
            persona el lunes? Se mide en la operación, con el jefe directo
            como testigo.
          </li>
          <li>
            <strong>¿Le sirvió al negocio? (resultados)</strong>
            Rampa de vendedores más corta, menos rotación temprana, menos
            errores de operación, cumplimiento sin crisis de auditoría. El
            indicador se elige en el diagnóstico, no al final.
          </li>
        </ol>
      </div>

      {/* 09 · LA IA Y LA OPERACIÓN */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>09 · LA INTELIGENCIA ARTIFICIAL</span>
        <h2 className={s.h2}>¿Y la inteligencia artificial en todo esto?</h2>
        <p className={s.respuesta}>
          La IA aparece dos veces en una academia bien hecha. En la
          producción: acelera guiones, variantes de casos y materiales, lo
          que baja el costo por curso — siempre con revisión pedagógica
          humana, porque la IA no sabe qué le duele a tu operación. Y en el
          aprendizaje: práctica conversacional, retroalimentación inmediata
          y rutas que se ajustan a cómo va cada quien.
        </p>
        <p className={s.prose}>
          Donde no la usamos: para generar cursos genéricos en volumen. Un
          curso malo producido rápido sigue siendo un curso malo — solo que
          ahora tienes cuarenta.
        </p>

        <h2 className={s.h2}>¿Quién opera la academia dentro de la empresa?</h2>
        <p className={s.prose}>
          Una academia necesita tres papeles internos, y ninguno es de
          tiempo completo al inicio: un sponsor de dirección (que la
          defienda en el presupuesto), un dueño operativo — normalmente en
          recursos humanos o desarrollo de talento — y expertos internos que
          prestan su conocimiento por horas, no por semanas. Nuestro trabajo
          incluye dejarles el método documentado: la dependencia del
          proveedor es un defecto de diseño, no un modelo de negocio.
        </p>
      </section>

      {/* 10 · LA PRUEBA — banda navy */}
      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>10 · LA PRUEBA</span>
        <h2 className={s.h2}>La prueba: una academia que ya funciona</h2>
        <figure className={s.cita}>
          <blockquote>
            &ldquo;Oliver excedió por mucho nuestras expectativas. Nuestra
            academia ha sido un éxito tanto económico como educativo,
            gracias a su gran labor pedagógica.&rdquo;
          </blockquote>
          <figcaption>
            Nova Academy — academia corporativa construida por el equipo de
            DisruptIA
          </figcaption>
        </figure>
        <p className={s.prose}>
          Detrás de cada proyecto está el mismo método: 15+ años de diseño
          instruccional, 120+ proyectos entregados y el primer lugar del
          Concurso Internacional de Creación de Cursos iSpring 2025.{" "}
          <a href="/casos">Lee los casos completos</a> o{" "}
          <a href="/metodo">conoce el método de los 3 actos</a>.
        </p>
      </div>

      {/* 11 · EL MOMENTO Y EL COSTO */}
      <section className={s.bloque}>
        <span className={s.bloqueNum}>11 · EL MOMENTO</span>
        <h2 className={s.h2}>¿Cuándo es el momento de crear la academia?</h2>
        <p className={s.prose}>
          Hay señales inequívocas. Si tu mejor gente pasa horas explicando lo
          mismo a cada nuevo ingreso; si la rotación convierte cada
          renuncia en semanas de productividad perdida; si abriste una sede
          o un turno y la calidad no viajó con la expansión; si la auditoría
          de capacitación se resuelve cada año con un maratón de evidencias
          — cualquiera de esas es la señal. Todas juntas son la factura que
          ya estás pagando sin academia.
        </p>
        <p className={s.prose}>
          La contraseñal también existe: si tu empresa cambia de proceso
          cada mes, primero estabiliza y documenta. Una academia enseña lo
          que la operación ya decidió; no sustituye las decisiones.
        </p>

        <h2 className={s.h2}>¿Cuánto cuesta y cuánto tarda?</h2>
        <p className={s.prose}>
          Lo honesto: depende del alcance. Una academia de un área con sus
          primeros cursos no cuesta lo mismo que una universidad corporativa
          de tres escuelas — y ninguna empresa necesita empezar por lo
          grande. Trabajamos por fases: la primera academia demuestra
          resultados y financia la ambición de la siguiente.
        </p>
        <p className={s.prose}>
          Lo que sí es igual en todos los proyectos: cotización cerrada por
          alcance (sin sorpresas por hora), entregables visibles desde la
          primera semana y una academia que queda tuya — cursos, plataforma
          y método documentado.
        </p>
      </section>

      <CtaInline texto="Cotización cerrada, por fases y sin letras chicas. El primer paso es platicar." />

      <Faq titulo="Preguntas frecuentes sobre academias corporativas" preguntas={FAQS} />

      <CtaBanda
        titulo="Tu empresa ya sabe lo que enseña — falta la escuela"
        texto="Cuéntanos qué área te duele más: ventas, servicio, onboarding, cumplimiento. Te respondemos con una propuesta concreta de academia, con fases, alcance y fecha de arranque."
        waMensaje="Hola, dirijo una empresa y quiero crear nuestra academia de capacitación."
      />
    </PageShell>
  );
}
