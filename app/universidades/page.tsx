import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Educación en línea para universidades",
  description:
    "Creamos la oferta digital de tu universidad: programas en línea con calidad académica, campus virtual y formación del claustro.",
  alternates: { canonical: "/universidades" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Educación en línea para universidades",
  serviceType:
    "Diseño y producción de programas universitarios en línea y campus virtual",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Digitalización de programas universitarios: diseño instruccional, producción de cursos, campus virtual y formación del claustro.",
  url: "https://disruptia.org/universidades",
};

const FAQS = [
  {
    q: "¿Qué significa tener educación en línea de verdad y no clases grabadas?",
    a: "Significa que el curso fue diseñado para la pantalla desde el principio: la unidad no es la sesión de cincuenta minutos sino el objetivo de aprendizaje, hay actividades donde el alumno produce algo, la evaluación mide desempeño y el acompañamiento está previsto. Una clase presencial grabada conserva el formato de un medio que funciona por la presencia del profesor — y al quitarle esa presencia, queda un video largo que la mayoría abandona en el minuto diez.",
  },
  {
    q: "¿Esto afecta nuestro RVOE o el reconocimiento oficial?",
    a: "Depende de qué se digitalice. La educación continua y los cursos de extensión no requieren RVOE, por eso suelen ser el mejor punto de partida. Si lo que quieres es llevar en línea un programa con reconocimiento oficial, hay un trámite específico ante la autoridad educativa que conviene planear desde el inicio, porque exige documentar el modelo, la plataforma y el seguimiento académico. Nosotros diseñamos y producimos con ese estándar en mente; la gestión del trámite la lleva tu área jurídica o académica, que es quien conoce el expediente de la institución.",
  },
  {
    q: "¿Qué pasa con los docentes que se resisten?",
    a: "Suelen tener razones que vale la pena escuchar antes de convencerlos de nada: han visto pasar tres plataformas, les pidieron grabarse sin apoyo y sospechan —a veces con motivo— que la digitalización viene con más trabajo y el mismo salario. Lo que funciona no es el discurso sino la experiencia: cuando un docente ve que el diseño instruccional le resuelve la mitad del trabajo y que sus alumnos participan más, cambia de opinión solo. Por eso empezamos con quienes quieren, y los resultados hacen el resto.",
  },
  {
    q: "¿Cuánto tarda digitalizar un programa completo?",
    a: "Un diplomado de educación continua puede estar listo en unos meses; una licenciatura completa es un proyecto de años, y quien te diga lo contrario no ha producido una. Por eso trabajamos por fases: se elige un programa piloto, se construye completo y bien, y con ese modelo funcionando se acelera todo lo demás — porque ya existen las plantillas, el criterio y un claustro que aprendió cómo se hace.",
  },
  {
    q: "¿Ustedes dan las clases o contratan profesores?",
    a: "No. Creamos los cursos en línea y dejamos la academia digital funcionando; tu claustro la opera, porque el conocimiento y el aval académico son de tu institución. Justamente por eso incluimos formación docente en todos los proyectos: el objetivo es que tu equipo pueda operar, evaluar y ampliar la oferta sin depender de nosotros.",
  },
  {
    q: "¿Y si ya tenemos plataforma pero casi nadie la usa?",
    a: "Es la situación más común y casi nunca es culpa de la plataforma. Cuando revisamos casos así, el diagnóstico suele ser el mismo: adentro hay archivos en lugar de cursos, los docentes no recibieron formación didáctica para el medio y nadie definió qué significa un buen programa en línea en esa institución. Cambiar de plataforma en ese escenario solo mueve el problema de lugar y gasta el presupuesto en lo que no era.",
  },
];

export default function UniversidadesPage() {
  return (
    <PageShell
      migas={[
        { href: "/instituciones-educativas", label: "Instituciones educativas" },
        { href: "/universidades", label: "Universidades" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/docentes.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>INSTITUCIONES · UNIVERSIDADES</span>
        <h1 className={`${s.title} aparece`}>
          Educación en línea para universidades, con la calidad que ya tienes en el aula
        </h1>
        <p className={s.lede}>
          Casi todas las universidades mexicanas pasaron por lo mismo en 2020:
          hubo que llevar todo a la pantalla en cuestión de semanas, con lo
          que había y sin tiempo de diseñar nada. Aquello fue una hazaña
          logística y dejó una idea equivocada de lo que es la educación en
          línea — porque lo que se hizo entonces era supervivencia, no
          diseño. Construir la oferta digital de una universidad en serio es
          otra cosa, y por suerte se parece bastante más a lo que tu
          institución ya sabe hacer bien.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/instituciones-educativas">
            Ver academias educativas
          </a>
        </div>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>01 · LA DEFINICIÓN</span>
        <h2 className={s.h2}>¿Qué es educación en línea universitaria de verdad?</h2>
        <p className={s.respuesta}>
          Es un programa diseñado desde el principio para estudiarse en
          pantalla: la unidad de trabajo no es la sesión de cincuenta minutos
          sino el objetivo de aprendizaje, cada tema incluye actividades donde
          el alumno produce algo, la evaluación mide desempeño en lugar de
          memoria, y el acompañamiento docente está previsto en el diseño y no
          improvisado por correo. Todo eso conviviendo con lo que tu
          institución no debe soltar: el rigor académico, la secuencia
          curricular y el aval de su claustro.
        </p>
        <p className={s.prose}>
          La distinción con «subir las clases» no es un detalle de calidad,
          sino de medio. Una clase presencial funciona en buena medida por la
          presencia: el profesor lee la cara del grupo, ajusta el ritmo,
          repite cuando ve confusión. Al grabarla, todo eso se pierde y queda
          un monólogo largo sin nadie que ajuste nada — por eso los videos de
          cincuenta minutos tienen tasas de abandono altísimas, y no porque
          los alumnos de hoy tengan poca atención.
        </p>
        <p className={s.prose}>
          Lo que sí se traslada, y es lo más valioso que tiene una
          universidad, es el criterio académico: qué se enseña, con qué
          profundidad, en qué orden y qué se considera evidencia suficiente de
          que alguien aprendió. Ese criterio es exactamente lo que un
          proveedor de contenidos genéricos no puede aportar — y la razón por
          la que el proyecto tiene que construirse con tu claustro adentro, no
          alrededor de él.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · POR DÓNDE EMPEZAR</span>
        <h2 className={s.h2}>¿Qué conviene digitalizar primero?</h2>
        <p className={s.prose}>
          La respuesta corta —y la que damos a casi todas las universidades—
          es: por donde el trámite no frene y el resultado se vea pronto.
          Estas son las cuatro puertas de entrada, ordenadas por facilidad:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>PUERTA 1</span>
            <h3>Educación continua</h3>
            <p>
              Diplomados y cursos de actualización: no tocan el plan de
              estudios oficial, generan ingresos propios desde la primera
              generación y sirven de laboratorio del modelo digital sin
              arriesgar matrícula.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PUERTA 2</span>
            <h3>Las materias que más reprueban</h3>
            <p>
              Casi toda universidad tiene dos o tres asignaturas donde se cae
              media generación. Digitalizarlas con buen diseño ataca la
              deserción justo donde más duele.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PUERTA 3</span>
            <h3>La nivelación de nuevo ingreso</h3>
            <p>
              El curso propedéutico que hoy se da a las carreras y que casi
              nadie aprovecha. En línea, cada alumno llega a primer semestre
              con la base que le faltaba.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PUERTA 4</span>
            <h3>Un posgrado en modalidad híbrida</h3>
            <p>
              El público de posgrado trabaja y valora la flexibilidad más que
              nadie. Es donde la modalidad híbrida deja de ser concesión y se
              vuelve ventaja competitiva.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · EL PROCESO</span>
        <h2 className={s.h2}>¿Cómo se construye la oferta digital, paso a paso?</h2>
        <p className={s.prose}>
          Es el mismo método de cinco pasos que usamos con empresas, ajustado
          al rigor que exige una institución educativa: aquí hay planes de
          estudio, colegiados y —cuando aplica— reconocimiento oficial que
          respetar.
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Diagnóstico académico</strong>
            Qué programas conviene digitalizar primero, qué capacidad tiene el
            claustro hoy y qué infraestructura ya está pagada. Sale una hoja
            de ruta por fases con presupuesto por fase, para que la lleves al
            comité sin sorpresas.
          </li>
          <li>
            <strong>Diseño curricular e instruccional</strong>
            Del plan de estudios al guion de cada curso: objetivos,
            actividades, ritmo y evaluación pensados para la pantalla, y
            alineados con el modelo educativo que tu institución ya declaró.
          </li>
          <li>
            <strong>Producción</strong>
            Pantallas, video educativo, actividades interactivas, casos y
            evaluaciones. Usamos inteligencia artificial para acelerar la
            producción, con revisión pedagógica humana en cada pieza.
          </li>
          <li>
            <strong>Campus virtual funcionando</strong>
            Montaje sobre tu plataforma actual o ayuda para elegir una:
            estructura de cursos, inscripciones, seguimiento académico y
            constancias.
          </li>
          <li>
            <strong>Formación docente y transferencia</strong>
            Tus profesores aprenden a operar, evaluar y mejorar los
            programas. El proyecto termina cuando tu institución ya no nos
            necesita para el siguiente.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Qué programa de tu universidad se beneficiaría más de estar en línea? Empecemos por ese." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LO QUE MÁS PESA</span>
        <h2 className={s.h2}>Las cuatro decisiones que definen el proyecto</h2>
        <p className={s.prose}>
          Más allá de la tecnología, hay cuatro decisiones académicas que
          determinan si la oferta digital de una universidad prospera o se
          queda en intento:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>DECISIÓN 1</span>
            <h3>Qué significa aquí «calidad en línea»</h3>
            <p>
              Sin un estándar propio y escrito, cada docente interpreta lo
              suyo y la oferta queda dispareja. Definirlo al inicio evita
              discusiones interminables después.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>DECISIÓN 2</span>
            <h3>Cómo se evalúa en la era de la IA</h3>
            <p>
              Si la evaluación sigue pidiendo textos que un modelo redacta en
              segundos, el problema no es de vigilancia sino de diseño. La
              evaluación auténtica es la salida.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>DECISIÓN 3</span>
            <h3>Quién acompaña al alumno</h3>
            <p>
              La deserción en línea es silenciosa: nadie ve la silla vacía.
              Definir quién detecta al que se está cayendo y con qué señales
              es lo que sostiene la matrícula.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>DECISIÓN 4</span>
            <h3>Qué se le reconoce al docente</h3>
            <p>
              Diseñar un curso en línea es trabajo adicional y distinto. Si no
              hay descarga, pago o reconocimiento curricular, el claustro lo
              hará una vez y no volverá.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LA MEDICIÓN</span>
        <h2 className={s.h2}>¿Cómo se sabe que la oferta digital funciona?</h2>
        <p className={s.prose}>
          Con indicadores que tu institución ya conoce, leídos para el medio
          digital — y con uno que suele olvidarse:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Terminación real por programa</strong> — no inscritos:
            alumnos que llegan al final. En línea es el indicador más honesto
            y el más incómodo.
          </li>
          <li>
            <strong>Evidencia de aprendizaje comparable</strong> — desempeño
            en proyectos y casos que se pueda comparar entre generaciones y
            con la modalidad presencial.
          </li>
          <li>
            <strong>Recomendación de alumnos y docentes</strong> — en
            educación, la reputación sigue siendo el principal canal de
            matrícula.
          </li>
          <li>
            <strong>Sustentabilidad económica</strong> — sobre todo en
            educación continua: que el programa pague su producción y deje
            margen para financiar el siguiente.
          </li>
        </ul>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>06 · QUIÉN LO CONSTRUYE</span>
        <h2 className={s.h2}>Gente que viene del aula y de la producción editorial</h2>
        <p className={s.prose}>
          Es la credencial que importa cuando el interlocutor es un consejo
          académico. El equipo fundador de DIsruptIA ha colaborado con la
          UNAM, Santillana, SM Ediciones, Pearson y Editores Mexicanos Unidos,
          y lleva más de quince años diseñando formación que se aplica — con
          el primer lugar del Concurso Internacional de Creación de Cursos
          iSpring 2025 de por medio.
        </p>
        <figure className={s.cita}>
          <blockquote>
            &ldquo;Oliver logró encontrar mi esencia y ponerla en una
            plataforma educativa.&rdquo;
          </blockquote>
          <figcaption>
            El Profe Luis — divulgador educativo con más de 3 millones de
            seguidores
          </figcaption>
        </figure>
        <p className={s.prose}>
          Puedes ver <a href="/casos">los casos completos</a>, abrir lecciones
          reales en <a href="/portafolio">el portafolio</a>, o revisar cómo
          abordamos{" "}
          <a href="/formacion-docente-en-ia">la formación docente en IA</a>,
          que suele ser la pieza que decide si el claustro adopta el proyecto.
        </p>
      </div>

      <Faq
        titulo="Preguntas frecuentes de universidades"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Tu universidad ya tiene el conocimiento y el aval: falta la versión digital"
        texto="Cuéntanos qué programa quieren llevar en línea primero, o qué les está doliendo más: deserción, matrícula, claustro. Respondemos con una hoja de ruta por fases."
        waMensaje="Hola, represento a una universidad y queremos construir nuestra oferta educativa en línea."
      />
    </PageShell>
  );
}
