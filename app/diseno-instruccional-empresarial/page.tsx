import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Diseño instruccional para empresas",
  description:
    "El oficio de convertir lo que sabe tu empresa en cursos que la gente termina y aplica: qué es, cómo se hace y qué entregables te quedan.",
  alternates: { canonical: "/diseno-instruccional-empresarial" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño instruccional para empresas",
  serviceType: "Diseño instruccional y guion de cursos corporativos",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Diseño instruccional de cursos corporativos: objetivos observables, práctica con decisiones reales y evaluación de desempeño.",
  url: "https://disruptia.org/diseno-instruccional-empresarial",
};

const FAQS = [
  {
    q: "¿Qué es el diseño instruccional?",
    a: "Es el oficio de decidir cómo se va a enseñar algo para que la persona pueda hacerlo después: qué se enseña, en qué orden, con cuánta práctica, con qué ejemplos y cómo se comprueba que aprendió. Es el equivalente al arquitecto en una construcción — alguien puede poner ladrillos sin planos, pero el resultado se nota. En un curso, el diseño instruccional es lo que separa una experiencia que cambia el trabajo del lunes de una presentación con examen al final.",
  },
  {
    q: "¿En qué se diferencia de simplemente grabar a nuestro experto?",
    a: "Tu experto sabe hacer el trabajo, y eso es justamente lo que dificulta que lo enseñe: cuando dominas algo, olvidas cuánto te costó aprenderlo y das por obvios veinte pasos que para alguien nuevo no lo son. El diseño instruccional extrae ese conocimiento, lo ordena para quien no lo tiene, decide qué se practica y qué se consulta, y convierte la experiencia en una secuencia que otra persona puede recorrer sola.",
  },
  {
    q: "¿Qué es un guion instruccional y para qué lo quiero?",
    a: "Es el plano de un curso antes de producirlo: pantalla por pantalla, qué se dice, qué se muestra, qué hace el participante y qué pasa cuando se equivoca. Sirve para dos cosas muy prácticas: te permite revisar y corregir el curso cuando cambiar algo cuesta minutos —en lugar de descubrir el problema cuando ya está grabado y programado— y le da a tu equipo un documento con el que puede actualizar el contenido en el futuro sin volver a contratarnos.",
  },
  {
    q: "¿Qué es ADDIE y lo usan?",
    a: "ADDIE es el modelo clásico del oficio y sus siglas describen cinco fases: análisis, diseño, desarrollo, implementación y evaluación. Sí lo usamos como columna vertebral, porque el orden que propone es sensato, pero no en su versión rígida de manual: trabajamos por iteraciones cortas, mostrando piezas navegables desde temprano en lugar de guardar el resultado para el gran develado del final. Los modelos sirven para pensar, no para justificar seis meses de silencio.",
  },
  {
    q: "¿Cómo escriben los objetivos de aprendizaje?",
    a: "En términos de lo que la persona podrá hacer, no de lo que sabrá. «Conocer la política de crédito» no es un objetivo porque nadie puede verificarlo; «decidir si una solicitud de crédito cumple los criterios y justificar la decisión» sí lo es, porque se puede observar y evaluar. Ese cambio de redacción parece cosmético y no lo es: al obligar a nombrar una acción observable, define automáticamente qué debe practicarse y cómo se va a evaluar.",
  },
  {
    q: "¿Usan inteligencia artificial para diseñar los cursos?",
    a: "La usamos en la producción —para generar variantes de casos, redactar borradores y acelerar materiales—, pero las decisiones de diseño las toma una persona: qué se enseña, qué se practica, qué se evalúa y qué se corta. La razón es simple: esas decisiones dependen de conocer tu operación y lo que le duele, y eso sale del diagnóstico y de las conversaciones con tu gente, no de un modelo.",
  },
];

export default function DisenoInstruccionalPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/diseno-instruccional-empresarial", label: "Diseño instruccional" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/sesion-diseno.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · DISEÑO INSTRUCCIONAL</span>
        <h1 className={`${s.title} aparece`}>
          Diseño instruccional: el oficio que decide si tu curso sirve o solo existe
        </h1>
        <p className={s.lede}>
          Hay una pregunta que casi nadie hace antes de producir un curso, y
          es la que determina todo lo demás: ¿qué va a poder hacer esta
          persona el lunes que hoy no puede? Responderla con precisión, y
          después construir el camino para llegar ahí, es lo que se llama
          diseño instruccional. No es la parte bonita del proceso —esa es la
          producción— pero es la que decide si el dinero que vas a invertir
          se convierte en un cambio real o en un archivo más en la plataforma.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/portafolio">
            Ver lecciones que diseñamos
          </a>
        </div>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>01 · LA DEFINICIÓN</span>
        <h2 className={s.h2}>¿Qué es el diseño instruccional?</h2>
        <p className={s.respuesta}>
          El diseño instruccional es el oficio de planear cómo se va a enseñar
          algo para que la persona termine pudiendo hacerlo. Define qué se
          enseña y qué se deja fuera, en qué orden, con cuánta práctica, con
          qué ejemplos, en qué formato y cómo se comprueba que el aprendizaje
          ocurrió. Es a un curso lo que el plano es a un edificio: se puede
          construir sin él, y de hecho mucha gente lo hace, pero el resultado
          revela la diferencia.
        </p>
        <p className={s.prose}>
          Ayuda pensarlo por contraste. Cuando una empresa decide capacitar,
          suele saltar directo a la producción: se junta al experto, se graba
          lo que sabe, se arma una presentación y se sube a la plataforma. El
          contenido está —a veces es excelente contenido— pero nadie decidió
          qué debía lograr el participante, cuánto tenía que practicar ni cómo
          se sabría que funcionó. El diseño instruccional es justamente todo
          ese pensamiento previo, y es invisible en el producto final: cuando
          está bien hecho, el curso simplemente se siente claro.
        </p>
        <p className={s.prose}>
          En inglés al profesional se le llama <em>instructional designer</em>,
          y en México el puesto todavía es raro dentro de las empresas — por
          eso el trabajo suele recaer en quien tenga tiempo, que casi nunca es
          quien tiene el oficio. Es una carrera con décadas de investigación
          detrás sobre cómo aprenden los adultos, cuánta información aguanta
          la memoria de trabajo y por qué la práctica espaciada supera a la
          repetición en bloque.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · LA DIFERENCIA</span>
        <h2 className={s.h2}>¿Qué cambia cuando hay diseño detrás?</h2>
        <p className={s.prose}>
          Cuatro cosas concretas, todas visibles para quien toma el curso
          aunque no sepa nombrarlas:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 1</span>
            <h3>Sobra menos de la mitad</h3>
            <p>
              Un experto quiere contarlo todo, porque para él todo es
              interesante. El diseño decide qué se queda según el objetivo, y
              esa poda suele reducir el curso a la mitad — lo que además baja
              el costo de producción y la deserción.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 2</span>
            <h3>La práctica se parece al trabajo</h3>
            <p>
              En lugar de preguntas de opción múltiple sobre definiciones, la
              persona enfrenta las decisiones que va a tomar en su puesto —
              con los datos incompletos con los que las toma en la realidad.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 3</span>
            <h3>Hay una razón para seguir</h3>
            <p>
              Cada pantalla deja una pregunta abierta que la siguiente
              responde. Esa tensión —prestada del oficio de contar historias—
              es lo que sostiene la atención cuando nadie está vigilando.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 4</span>
            <h3>La evaluación mide algo real</h3>
            <p>
              Se diseña antes que el contenido, no después, y mide desempeño:
              si la persona puede tomar la decisión correcta frente a un caso,
              da igual si recuerda la definición textual.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · EL PROCESO</span>
        <h2 className={s.h2}>¿Cómo se diseña un curso, paso a paso?</h2>
        <p className={s.prose}>
          Este es el recorrido que sigue cada curso que producimos. Cada paso
          termina en algo que puedes leer y corregir, porque cambiar una idea
          en un documento cuesta minutos y cambiarla en un curso terminado
          cuesta semanas.
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Definir qué podrá hacer</strong>
            Se escribe el objetivo en términos de acción observable, no de
            conocimiento. Este paso parece trivial y es el que más discusiones
            productivas provoca, porque obliga a ponerse de acuerdo en qué
            significa «que aprendan».
          </li>
          <li>
            <strong>Diseñar la evaluación primero</strong>
            Antes de escribir una sola pantalla, definimos cómo vamos a saber
            que funcionó. Hacerlo al revés —contenido primero, examen al
            final— es la razón por la que tantos cursos evalúan lo fácil de
            preguntar en vez de lo importante.
          </li>
          <li>
            <strong>Extraer el conocimiento del experto</strong>
            Sesiones con quien domina el tema, enfocadas en lo que no está
            escrito: los criterios, los atajos, los errores caros y las
            excepciones. Aquí es donde aparece el material que ningún manual
            contiene.
          </li>
          <li>
            <strong>Estructurar y escribir el guion</strong>
            El curso completo pantalla por pantalla, con lo que se dice, lo
            que se muestra, lo que hace el participante y qué ocurre cuando
            se equivoca. Es el documento que tú revisas y apruebas.
          </li>
          <li>
            <strong>Prototipar y ajustar</strong>
            Antes de producir todo, se arma un módulo navegable y se prueba
            con gente real del puesto. Lo que aprendemos ahí corrige el resto
            del curso — y siempre hay algo que corregir.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Tienes un experto con conocimiento valioso y sin tiempo para enseñarlo? Ese es exactamente el punto de partida." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LOS ENTREGABLES</span>
        <h2 className={s.h2}>¿Qué documentos produce el diseño instruccional?</h2>
        <p className={s.prose}>
          Son cuatro, y todos quedan en tu poder al terminar el proyecto.
          Insistimos en esto porque es la diferencia entre contratar un curso
          y construir una capacidad: con estos documentos, tu equipo puede
          mantener y ampliar el contenido sin depender de nosotros.
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 1</span>
            <h3>La carta descriptiva</h3>
            <p>
              El resumen ejecutivo del curso: objetivos, a quién va dirigido,
              duración, estructura de módulos y cómo se evalúa. Es el
              documento que se comparte con dirección y con auditoría.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 2</span>
            <h3>El guion instruccional</h3>
            <p>
              El curso completo por escrito, pantalla por pantalla, con
              interacciones y retroalimentación. Es el plano con el que se
              produce y el documento con el que se actualiza después.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 3</span>
            <h3>Los instrumentos de evaluación</h3>
            <p>
              Casos, rúbricas y criterios de aprobación, con la lógica de por
              qué cada respuesta es correcta — que es la parte que convierte
              un examen en una herramienta de aprendizaje.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ENTREGABLE 4</span>
            <h3>La plantilla replicable</h3>
            <p>
              El formato y los criterios para que el siguiente curso lo pueda
              diseñar tu equipo siguiendo la misma lógica. Es lo que hace que
              la academia crezca sin volver a empezar.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LOS PRINCIPIOS</span>
        <h2 className={s.h2}>Cinco principios que aplicamos siempre</h2>
        <p className={s.prose}>
          No son inventos nuestros: vienen de décadas de investigación sobre
          aprendizaje adulto. Lo que sí es nuestro es la terquedad con la que
          los sostenemos cuando el calendario aprieta.
        </p>
        <ul className={s.lista}>
          <li>
            <strong>El adulto aprende lo que necesita ahora</strong> — por eso
            cada tema entra por un problema que la persona reconoce como suyo,
            en lugar de por una definición que promete servir algún día.
          </li>
          <li>
            <strong>La memoria de trabajo es pequeña</strong> — presentar
            veinte conceptos en una pantalla garantiza que no se retenga
            ninguno, así que preferimos una idea por pantalla aunque haya que
            hacer más pantallas.
          </li>
          <li>
            <strong>Se aprende haciendo y recibiendo respuesta</strong> —
            explicar es el paso uno; sin práctica con retroalimentación
            inmediata, el conocimiento se evapora en días.
          </li>
          <li>
            <strong>El error bien tratado enseña más que el acierto</strong> —
            por eso diseñamos las respuestas incorrectas con tanto cuidado
            como las correctas: cada una explica por qué tiene sentido
            equivocarse ahí.
          </li>
          <li>
            <strong>Lo que no se practica, no se transfiere</strong> — si el
            objetivo es que sepa negociar, el curso tiene que ponerlo a
            negociar; leer sobre negociación produce gente que habla bien de
            negociación.
          </li>
        </ul>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>06 · LA PRUEBA</span>
        <h2 className={s.h2}>Diseño instruccional que puedes abrir y juzgar</h2>
        <p className={s.prose}>
          Todo lo anterior suena razonable en un texto; lo justo es que lo
          compruebes. En{" "}
          <a href="/portafolio">nuestro portafolio</a> puedes abrir lecciones
          reales —una sobre un tema tan árido como el cálculo de
          compensaciones en seguros, otra sobre reclutamiento con inteligencia
          artificial— y ver cómo se comportan estos principios cuando dejan de
          ser teoría.
        </p>
        <figure className={s.cita}>
          <blockquote>
            &ldquo;Nuestra academia ha sido un éxito tanto económico como
            educativo, gracias a su gran labor pedagógica.&rdquo;
          </blockquote>
          <figcaption>Nova Insurance Academy</figcaption>
        </figure>
        <p className={s.prose}>
          Detrás de cada diseño está Oliver Barona, diseñador instruccional
          senior con más de quince años de oficio y ganador del Concurso
          Internacional de Creación de Cursos iSpring 2025. El método completo
          está explicado en <a href="/metodo">la página del método</a>.
        </p>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>07 · CUÁNDO CONVIENE</span>
        <h2 className={s.h2}>¿Cuándo vale la pena contratar diseño instruccional?</h2>
        <p className={s.prose}>
          Cuando el costo de que la gente no aprenda es mayor que el costo de
          diseñar bien, que es más seguido de lo que parece. Si el curso lo
          van a tomar veinte personas una sola vez, quizá baste con juntar al
          experto y grabarlo; pero si lo van a tomar cada nuevo ingreso
          durante los próximos tres años, si el error que previene cuesta
          dinero o si el tema es lo bastante difícil como para que la gente lo
          abandone a la mitad, entonces el diseño se paga solo.
        </p>
        <p className={s.prose}>
          Hay otra señal, menos obvia y más frecuente: cuando ya intentaron
          producir el curso internamente y quedó a medias. Casi siempre no
          falta contenido ni voluntad — falta alguien que decida qué se queda
          fuera, y esa decisión es incómoda de tomar desde adentro.
        </p>
      </section>

      <Faq
        titulo="Preguntas frecuentes sobre diseño instruccional"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Tu empresa ya tiene el conocimiento: falta convertirlo en curso"
        texto="Cuéntanos qué necesitan enseñar y quién lo sabe hacer hoy. Te decimos cómo lo diseñaríamos, qué entregables tendrías y en qué orden."
        waMensaje="Hola, necesito diseño instruccional para los cursos de mi empresa."
      />
    </PageShell>
  );
}
