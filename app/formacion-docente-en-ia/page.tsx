import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Formación docente en inteligencia artificial",
  description:
    "Creamos el curso en línea de IA para los docentes de tu institución: criterio, evaluación auténtica y planeación didáctica. Sin prohibir ni fingir.",
  alternates: { canonical: "/formacion-docente-en-ia" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formación docente en inteligencia artificial",
  serviceType:
    "Diseño y producción de programas en línea de formación docente en IA",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Programa en línea para formar al claustro en uso didáctico de la inteligencia artificial, integridad académica y evaluación auténtica.",
  url: "https://disruptia.org/formacion-docente-en-ia",
};

const FAQS = [
  {
    q: "¿Qué es la formación docente en inteligencia artificial?",
    a: "Es formar al claustro para tomar decisiones didácticas en un aula donde la IA ya está: qué tareas siguen teniendo sentido, cómo evaluar cuando la respuesta está a un prompt de distancia, y cómo usar la IA para planear y dar mejor clase. No es un curso de herramientas: las herramientas cambian cada seis meses, el criterio no.",
  },
  {
    q: "¿No basta con prohibir el uso de IA a los alumnos?",
    a: "Prohibirla ya perdió, y cada institución lo comprueba sola. Los detectores fallan en ambos sentidos —acusan al inocente y dejan pasar al que copió—, y la prohibición solo enseña a esconderlo. Lo que sí funciona es rediseñar lo que se evalúa, y eso es trabajo de diseño didáctico, no de vigilancia.",
  },
  {
    q: "¿Nuestros docentes mayores van a poder con esto?",
    a: "Sí, y suelen sorprender. La resistencia no es a la tecnología: es a sentirse tontos frente a sus alumnos. Por eso el programa empieza por el terreno donde son expertos —qué hace valiosa una tarea, qué es evidencia de aprendizaje— y la herramienta entra después, al servicio de eso. Un docente con treinta años de aula tiene más criterio pedagógico que cualquier modelo.",
  },
  {
    q: "¿Ustedes imparten el curso a nuestros docentes?",
    a: "No. Diseñamos y producimos el programa en línea con los casos y las políticas de tu institución, y lo dejamos funcionando en tu plataforma para que cada docente lo curse a su ritmo y las generaciones siguientes también. Tu coordinación académica lo opera; nosotros lo construimos y le enseñamos a mantenerlo.",
  },
  {
    q: "¿Incluye la política de uso de IA de la institución?",
    a: "Podemos construirla contigo como parte del proyecto. Es la pregunta que todo claustro hace en la primera sesión —qué está permitido y qué no— y un programa que no la responde deja a los docentes exactamente igual de solos que antes.",
  },
  {
    q: "¿Sirve para cualquier nivel educativo?",
    a: "Sí, pero se diseña distinto. Las decisiones de un profesor de secundaria no son las de un catedrático de posgrado: cambian los dilemas, las tareas y hasta lo que significa hacer trampa. Adaptamos casos y ejemplos al nivel y a las asignaturas de tu institución.",
  },
  {
    q: "¿Cuánto tiempo le toma a un docente cursarlo?",
    a: "Se diseña para el tiempo que un docente realmente tiene, que es poco y fragmentado: módulos cortos que se pueden avanzar entre clases, sin sesiones en vivo que competir con el horario. Lo que sí toma tiempo es la práctica —rediseñar una tarea propia y su rúbrica—, y ese es precisamente el trabajo que hace que el programa sirva.",
  },
  {
    q: "¿El contenido no se va a quedar obsoleto en un año?",
    a: "El de herramientas sí, y por eso pesa poco en el diseño. El de criterio didáctico —qué hace valiosa una tarea, cómo se evidencia el aprendizaje, cómo se evalúa un proceso y no solo un producto— lleva décadas siendo válido y va a seguir siéndolo. Además te dejamos el método para actualizar los ejemplos: la parte que caduca la puede mantener tu propia coordinación académica.",
  },
];

export default function FormacionDocenteIaPage() {
  return (
    <PageShell
      migas={[
        { href: "/instituciones-educativas", label: "Instituciones educativas" },
        { href: "/formacion-docente-en-ia", label: "Formación docente en IA" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/docente-noche.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>INSTITUCIONES · FORMACIÓN DOCENTE</span>
        <h1 className={`${s.title} aparece`}>
          Formación docente en IA: dejar de perseguirla y empezar a enseñar con ella
        </h1>
        <p className={s.lede}>
          Tus docentes ya viven en un aula donde la inteligencia artificial
          está, la usen o no. Unos la prohíben, otros fingen que no existe y
          los más la usan a escondidas sin saber si está bien. Ninguna de las
          tres es una política institucional. Construimos el programa en
          línea que le da criterio a tu claustro — no una lista de
          herramientas que caduca en seis meses.
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
        <h2 className={s.h2}>
          ¿Qué es la formación docente en inteligencia artificial?
        </h2>
        <p className={s.respuesta}>
          Es formar al claustro para tomar decisiones didácticas en un aula
          donde la IA ya está presente: qué tareas siguen teniendo sentido
          pedagógico, cómo se evalúa cuando la respuesta está a un prompt de
          distancia, y cómo usar la inteligencia artificial para planear y
          dar mejor clase. No es un curso de herramientas — esas cambian cada
          semestre; es un curso de criterio, que es lo único que no caduca.
        </p>
        <p className={s.prose}>
          La distinción importa porque casi toda la oferta del mercado es lo
          contrario: dos horas mostrando diez aplicaciones. El docente sale
          entretenido, no vuelve a abrir ninguna y el lunes tiene el mismo
          problema que el viernes — un trabajo entregado que no sabe si
          escribió su alumno.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · EL DOLOR</span>
        <h2 className={s.h2}>Lo que tu claustro ya intentó (y por qué no bastó)</h2>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>INTENTO 1</span>
            <h3>Prohibirla</h3>
            <p>
              Reglamento nuevo, advertencia en el encuadre. El resultado
              medible: los alumnos la siguen usando y ahora además lo
              esconden. Cero aprendizaje, más desconfianza.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>INTENTO 2</span>
            <h3>Comprar un detector</h3>
            <p>
              Falla en los dos sentidos: acusa a quien escribió solo y deja
              pasar a quien copió con estilo. Una acusación falsa cuesta más
              que diez trabajos copiados.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>INTENTO 3</span>
            <h3>El webinar de dos horas</h3>
            <p>
              Diez herramientas en fila y ninguna decisión pedagógica. El
              docente sale con la sensación de estar atrasado y sin nada que
              aplicar el lunes.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>INTENTO 4</span>
            <h3>Volver al examen en papel</h3>
            <p>
              Resuelve la copia y sacrifica todo lo demás: se evalúa memoria
              bajo vigilancia en lugar de criterio profesional. Es retroceder
              veinte años para ganar un semestre.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · EL PROGRAMA</span>
        <h2 className={s.h2}>¿Qué aprende un docente en este programa?</h2>
        <p className={s.prose}>
          Cuatro módulos, cada uno terminando en una pieza que el docente usa
          con su grupo real — no en un diploma:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Qué hace y qué no hace la IA</strong>
            Sin misticismo ni pánico: qué puede resolver un modelo, dónde se
            equivoca con seguridad y por qué inventa. Base honesta para
            decidir cualquier otra cosa.
          </li>
          <li>
            <strong>Rediseñar la tarea</strong>
            Tomar una tarea propia que la IA contesta en diez segundos y
            rediseñarla para que vuelva a exigir pensamiento. Sale una tarea
            lista para aplicar.
          </li>
          <li>
            <strong>Evaluar con evidencia</strong>
            Evaluación auténtica: desempeño, proceso, defensa oral, producto
            situado. El docente sale con una rúbrica suya, terminada.
          </li>
          <li>
            <strong>Enseñar con IA</strong>
            Usarla para planear, generar variantes de ejercicios, adaptar
            materiales y dar retroalimentación más rápida — con el criterio
            del docente siempre al frente.
          </li>
          <li>
            <strong>La política del aula</strong>
            Qué se permite, qué se declara y qué se prohíbe en su materia,
            alineado a la política institucional. Se acabó el "depende de
            cada quien".
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Tu claustro ya te está preguntando qué hacer con la IA? Podemos construir la respuesta." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LA CLAVE</span>
        <h2 className={s.h2}>La evaluación auténtica: el corazón del asunto</h2>
        <p className={s.prose}>
          Si tuviéramos que quedarnos con un solo módulo, sería este. La
          inteligencia artificial no rompió la educación: rompió un tipo muy
          específico de tarea — la que pedía reproducir información
          disponible. Esa tarea llevaba décadas siendo cuestionable y ahora
          simplemente dejó de ser sostenible.
        </p>
        <p className={s.prose}>
          Una evaluación auténtica pide lo que un modelo no puede entregar
          por el alumno: aplicar a un contexto específico y verificable,
          defender una decisión, documentar el proceso, trabajar sobre datos
          propios, sostener el argumento frente a preguntas. No es más
          trabajo para el docente — bien diseñada suele ser menos, porque
          califica una vez lo que importa en lugar de leer treinta textos
          idénticos.
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ANTES</span>
            <h3>&ldquo;Escribe un ensayo sobre la Revolución Mexicana&rdquo;</h3>
            <p>
              Cualquier modelo lo resuelve en segundos y bastante bien. No
              mide nada del alumno más que su capacidad de copiar y pegar.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>DESPUÉS</span>
            <h3>
              &ldquo;Documenta un vestigio de esa época en tu colonia y
              defiéndelo&rdquo;
            </h3>
            <p>
              Requiere ir, mirar, decidir y sostener el argumento. La IA puede
              ayudar a redactar; no puede ir por el alumno ni responder las
              preguntas del grupo.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · EL FORMATO</span>
        <h2 className={s.h2}>¿Por qué en línea y no un taller presencial?</h2>
        <p className={s.respuesta}>
          Porque un taller lo toman los docentes que ese día pudieron ir, y
          se pierde en cuanto termina. Un programa en línea lo cursan todos
          —incluidos los de turno vespertino, los de asignatura y los que
          entren el próximo ciclo—, se puede volver a consultar cuando
          aparece la duda real, y queda como activo de la institución.
        </p>
        <p className={s.prose}>
          Hay un argumento pedagógico además del logístico: este contenido se
          aprende practicando sobre las tareas propias de cada docente, y eso
          no cabe en dos horas de sala. Cursándolo a su ritmo, cada quien
          rediseña sus materiales con el acompañamiento del programa.
        </p>
      </section>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>06 · LA RESISTENCIA</span>
        <h2 className={s.h2}>¿Cómo se maneja al claustro que no quiere?</h2>
        <p className={s.prose}>
          Toda institución tiene ese grupo, y suele ser el más experimentado.
          El error clásico es tratarlo como retraso tecnológico y mandarlo a
          un curso de herramientas — que es exactamente lo que confirma su
          sospecha de que esto es una moda administrativa más.
        </p>
        <p className={s.prose}>
          La resistencia, cuando uno la escucha bien, casi nunca es a la
          tecnología. Es a tres cosas legítimas: al ridículo frente a alumnos
          que dominan la herramienta mejor que ellos, a la sensación de que
          treinta años de oficio se están devaluando, y a la carga de
          trabajo de rediseñar materiales que llevan años funcionando. Las
          tres son razonables. Ninguna se resuelve con un comunicado de
          rectoría.
        </p>
        <p className={s.prose}>
          Nuestro diseño las ataca de frente: el programa empieza en el
          terreno donde ese docente es la máxima autoridad —qué hace valiosa
          una tarea, qué es evidencia real de aprendizaje— y solo entonces
          introduce la herramienta, al servicio de un criterio que él ya
          tenía. Y no pide rediseñar el curso completo: pide una tarea, la
          suya, la que ya sospechaba que estaba rota. Cuando ese docente ve
          que su tarea rediseñada funciona mejor con su propio grupo, se
          convierte en el mejor argumento que tendrás dentro de la sala de
          maestros — mucho mejor que cualquier consultor externo.
        </p>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>07 · QUIÉN LO CONSTRUYE</span>
        <h2 className={s.h2}>Diseñado por gente que ha dado clase</h2>
        <p className={s.prose}>
          Es la única credencial que importa para este tema. El equipo
          fundador de DIsruptIA viene del aula y de la producción editorial y
          educativa —con colaboraciones para UNAM, Santillana, SM Ediciones,
          Pearson y Editores Mexicanos Unidos—, y lleva más de 15 años
          diseñando formación que se aplica.
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
          Puedes ver <a href="/casos">los casos completos</a>,{" "}
          <a href="/metodo">el método de los 3 actos</a> con el que
          diseñamos, o cómo construimos{" "}
          <a href="/instituciones-educativas">la academia digital completa</a>{" "}
          de una institución.
        </p>
      </div>

      <Faq
        titulo="Preguntas frecuentes sobre formación docente en IA"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Tus docentes no necesitan otro webinar: necesitan criterio"
        texto="Cuéntanos cuántos docentes son, de qué niveles y qué les preocupa más. Te devolvemos cómo se vería su programa en línea y qué módulo conviene lanzar primero."
        waMensaje="Hola, represento a una institución educativa y quiero formar a nuestros docentes en inteligencia artificial."
      />
    </PageShell>
  );
}
