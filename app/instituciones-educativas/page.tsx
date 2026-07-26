import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Academia en línea para instituciones educativas",
  description:
    "Creamos la academia digital de tu institución: cursos en línea con calidad académica, formación docente y educación continua. De los PDF al campus virtual real.",
  alternates: { canonical: "/instituciones-educativas" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de academias digitales para instituciones educativas",
  serviceType:
    "Diseño y producción de cursos en línea y academias digitales institucionales",
  provider: { "@type": "Organization", name: "DisruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Diseño instruccional, producción de cursos en línea, formación docente y montaje de campus virtual para escuelas y universidades.",
  url: "https://disruptia.org/instituciones-educativas",
};

const FAQS = [
  {
    q: "¿Qué es una academia digital institucional?",
    a: "Es la oferta educativa en línea de una institución construida como sistema: cursos diseñados para la pantalla (no clases grabadas), un campus virtual donde viven, docentes formados para operarlos y evaluación que sí mide aprendizaje. Es la diferencia entre tener Moodle y tener educación en línea.",
  },
  {
    q: "¿Trabajan con cualquier nivel educativo?",
    a: "Sí: colegios de educación básica, preparatorias, universidades, posgrados, escuelas técnicas y de idiomas, y academias privadas. Cambia el diseño — un curso para adolescentes no se parece a un diplomado ejecutivo —, no el método.",
  },
  {
    q: "¿Ustedes dan las clases o imparten los cursos?",
    a: "No. Creamos los cursos en línea y dejamos la academia funcionando; tus docentes y tu institución la operan. Justamente por eso incluimos formación docente: para que tu equipo la haga suya y no dependa de nosotros.",
  },
  {
    q: "¿Pueden convertir nuestras clases presenciales a cursos en línea?",
    a: "Sí, y es de lo que más hacemos. Pero convertir no es grabar: rediseñamos cada clase para la pantalla, con actividades, ritmo y evaluación pensados para en línea. Una cámara al fondo del salón no es educación digital.",
  },
  {
    q: "¿Qué pasa con la integridad académica y la IA?",
    a: "La abordamos de frente: diseñamos evaluaciones auténticas — desempeño, proyectos, evidencia — que la IA no puede contestar por el alumno, y formamos a los docentes para usar la IA como herramienta didáctica en lugar de perseguirla como amenaza.",
  },
  {
    q: "¿Cuánto cuesta crear la academia de nuestra institución?",
    a: "Depende del alcance: cuántos programas, cuántos cursos, si ya tienen campus virtual o hay que montarlo. Cotizamos por proyecto cerrado, por fases, empezando por lo que más impacto tiene. El primer paso es una conversación.",
  },
];

export default function InstitucionesEducativasPage() {
  return (
    <PageShell
      migas={[
        { href: "/instituciones-educativas", label: "Instituciones educativas" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header className={s.head}>
        <span className={s.kicker}>SILO · INSTITUCIONES EDUCATIVAS</span>
        <h1 className={`${s.title} aparece`}>
          La academia en línea de tu institución, con calidad académica real
        </h1>
        <p className={s.lede}>
          Tu institución sabe enseñar — lo hace todos los días en el aula. Lo
          que la pandemia dejó claro es que eso no se traduce solo a la
          pantalla: subir PDF y grabar clases no es educación en línea.
          Nosotros construimos tu academia digital: cursos diseñados para en
          línea, docentes formados y un campus virtual que sí se usa.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
        </div>
      </header>

      <section className={s.section}>
        <h2 className={s.h2}>
          ¿Qué es una academia en línea para instituciones educativas?
        </h2>
        <p className={s.prose}>
          Es la oferta educativa digital de una escuela o universidad
          construida como sistema completo: cursos en línea con diseño
          instruccional (no clases grabadas subidas a una carpeta), un campus
          virtual donde viven, docentes formados para operarlos y evaluación
          del aprendizaje que resiste la era de la inteligencia artificial.
        </p>
        <p className={s.prose}>
          La diferencia con "tener plataforma" es la misma que hay entre un
          edificio y una escuela. Muchas instituciones ya pagaron Moodle,
          Classroom o Teams; pocas tienen ahí adentro programas que un alumno
          quiera cursar y un docente pueda operar. Esa distancia — entre la
          herramienta y la educación — es exactamente lo que construimos.
        </p>

        <h2 className={s.h2}>¿Para qué le sirve a tu institución una academia digital?</h2>
        <ul className={s.lista}>
          <li>
            <strong>Nueva oferta sin nuevo campus</strong> — educación
            continua, diplomados y micro-credenciales en línea que generan
            ingresos propios con la infraestructura que ya tienes.
          </li>
          <li>
            <strong>Continuidad y flexibilidad</strong> — programas híbridos
            donde lo digital no es el plan B, sino la parte mejor diseñada
            del modelo.
          </li>
          <li>
            <strong>Retención de alumnos</strong> — nivelación, tutoría y
            acompañamiento en línea para que la deserción deje de resolverse
            con llamadas de última hora.
          </li>
          <li>
            <strong>Docentes al día</strong> — formación docente en
            herramientas digitales y en IA, con práctica real y no con otro
            webinar de dos horas.
          </li>
          <li>
            <strong>Vinculación con empresas</strong> — programas a la medida
            para organizaciones, donde tu institución pone el aval académico
            y la academia digital pone la escala.
          </li>
        </ul>

        <h2 className={s.h2}>¿Cómo construimos la academia de una institución?</h2>
        <p className={s.prose}>
          El mismo método de cinco pasos que usamos con empresas, ajustado al
          rigor académico: aquí hay planes de estudio, RVOE y colegiados que
          respetar. Cada paso deja un entregable revisable.
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Diagnóstico académico</strong>
            Qué programas conviene digitalizar primero, qué capacidad docente
            existe y qué infraestructura ya está pagada. Salimos con una hoja
            de ruta por fases, no con una lista de deseos.
          </li>
          <li>
            <strong>Diseño curricular y instruccional</strong>
            Del plan de estudios al guion de cada curso: objetivos,
            actividades, ritmo y evaluación diseñados para la pantalla,
            alineados a tu modelo educativo.
          </li>
          <li>
            <strong>Producción de los cursos</strong>
            Pantallas, video educativo, actividades, casos y evaluaciones —
            con IA para acelerar la producción y revisión pedagógica humana
            en cada pieza.
          </li>
          <li>
            <strong>Campus virtual funcionando</strong>
            Montamos la academia sobre tu plataforma o te ayudamos a elegir
            una: estructura de cursos, inscripciones, seguimiento,
            constancias.
          </li>
          <li>
            <strong>Formación docente y transferencia</strong>
            Tus docentes aprenden a operar, evaluar y mejorar la academia.
            El proyecto termina cuando ya no nos necesitan.
          </li>
        </ol>

        <h2 className={s.h2}>¿Qué construimos para instituciones?</h2>
        <ul className={s.lista}>
          <li>
            <strong>Academia digital universitaria</strong> — educación
            continua y programas en línea que generan ingresos propios.
          </li>
          <li>
            <strong>Formación docente en IA</strong> — el dolor más urgente
            del aula: qué hacer con la inteligencia artificial en lugar de
            prohibirla.
          </li>
          <li>
            <strong>Cursos en línea institucionales</strong> — conversión de
            programas presenciales con rediseño real, no con grabaciones.
          </li>
          <li>
            <strong>Evaluación del aprendizaje</strong> — rúbricas, evaluación
            auténtica y evidencia de desempeño para la era de la IA.
          </li>
          <li>
            <strong>Plataformas para colegios, preparatorias, técnicas e
            idiomas</strong> — cada nivel con su diseño, del aula de secundaria
            al diplomado ejecutivo.
          </li>
        </ul>
        <p className={s.prose}>
          Cada línea tiene su página con el detalle — las estamos publicando
          por partes. Si tu caso no aparece todavía,{" "}
          <a href="/contacto">escríbenos</a> y lo platicamos directo.
        </p>

        <h2 className={s.h2}>Los errores que más proyectos digitales educativos matan</h2>
        <p className={s.prose}>
          La educación en línea institucional tiene su propio cementerio, y
          casi todas las lápidas dicen lo mismo. Estos son los errores que
          vemos repetirse — todos prevenibles desde el diseño:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Grabar la clase y llamarle curso</strong> — una cámara al
            fondo del salón produce videos de cincuenta minutos que nadie
            termina. La clase presencial y el curso en línea son medios
            distintos; lo que funciona en uno aburre en el otro.
          </li>
          <li>
            <strong>Digitalizar sin rediseñar la evaluación</strong> — el
            examen de siempre, en línea y con IA disponible, mide la
            habilidad del alumno para preguntarle a ChatGPT. La evaluación
            auténtica no es opcional: es la diferencia entre certificar
            aprendizaje y certificar copiado.
          </li>
          <li>
            <strong>Dejar solos a los docentes</strong> — se contrata la
            plataforma, se da un curso de dos horas sobre botones y se
            espera educación digital. El docente necesita formación
            didáctica para el medio, no un manual de usuario.
          </li>
          <li>
            <strong>Lanzar todo el catálogo a la vez</strong> — veinte
            programas a medias pierden contra tres programas excelentes que
            los alumnos recomiendan. En educación, la reputación es el
            canal de venta.
          </li>
          <li>
            <strong>Confundir plataforma con proyecto</strong> — Moodle
            instalado no es una academia, igual que una biblioteca vacía no
            es una universidad.
          </li>
        </ul>

        <h2 className={s.h2}>¿Moodle, plataforma comercial o desarrollo a medida?</h2>
        <p className={s.prose}>
          La pregunta que toda institución hace primero — y que conviene
          responder al final, cuando ya sabes qué programas vivirán ahí. Aun
          así, el criterio honesto cabe en una tabla:
        </p>
        <div className={s.tablaWrap}>
          <table className={s.tabla}>
            <thead>
              <tr>
                <th>Opción</th>
                <th>Cuándo conviene</th>
                <th>El costo oculto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Moodle u otro LMS libre</td>
                <td>Presupuesto contenido y equipo técnico propio</td>
                <td>La administración: alguien tiene que mantenerlo, y ese
                alguien casi nunca existe todavía</td>
              </tr>
              <tr>
                <td>Plataforma comercial</td>
                <td>Arranque rápido sin equipo técnico</td>
                <td>Renta por alumno que crece con tu éxito, y tus cursos
                viven en casa ajena</td>
              </tr>
              <tr>
                <td>Desarrollo a medida</td>
                <td>Modelo educativo que ninguna plataforma soporta</td>
                <td>El más caro de mantener; solo se justifica con escala u
                oferta muy diferenciada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={s.prose}>
          Nuestra postura: la plataforma se elige después del diseño
          curricular, y nosotros no vendemos ninguna — por eso podemos
          recomendarte la que te conviene y no la que nos deja comisión.
        </p>

        <h2 className={s.h2}>Formación docente: la pieza que decide todo lo demás</h2>
        <p className={s.prose}>
          Puedes tener el mejor campus virtual del país: si el claustro no lo
          hace suyo, tienes un archivero caro. Por eso toda academia
          institucional que construimos incluye formación docente — y la
          diseñamos con el mismo método de los 3 actos: los docentes
          practican diseñando y evaluando en línea, con sus propios grupos
          como caso real.
        </p>
        <p className={s.prose}>
          El capítulo urgente es la inteligencia artificial. Prohibirla ya
          perdió; el camino es formar criterio: qué tareas siguen teniendo
          sentido, cómo se evalúa cuando la respuesta está a un prompt de
          distancia, y cómo usar la IA para planear mejor una clase en lugar
          de temerle. Es nuestra línea de formación más pedida, y la que más
          rápido cambia la conversación en una sala de maestros.
        </p>

        <h2 className={s.h2}>¿Cómo se mide la calidad de una academia digital?</h2>
        <p className={s.prose}>
          Con los indicadores que una institución seria ya conoce, leídos
          para el medio digital:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Terminación real por programa</strong> — no inscritos:
            alumnos que llegan al final. En línea, la deserción silenciosa
            es el enemigo número uno.
          </li>
          <li>
            <strong>Evidencia de aprendizaje</strong> — desempeño en
            proyectos y casos, comparable entre generaciones.
          </li>
          <li>
            <strong>Recomendación de alumnos y docentes</strong> — el
            indicador que predice la matrícula del siguiente ciclo.
          </li>
          <li>
            <strong>Sustentabilidad</strong> — para educación continua: que
            el programa pague su producción y deje margen. Un programa en
            línea que pierde dinero cada generación no es un proyecto
            académico, es un hobby caro.
          </li>
        </ul>

        <h2 className={s.h2}>
          Educación continua: la puerta de entrada más inteligente
        </h2>
        <p className={s.prose}>
          Si tuviéramos que recomendar por dónde empezar a la mayoría de las
          universidades, sería aquí. La educación continua — diplomados,
          cursos de actualización, micro-credenciales — tiene tres ventajas
          que ningún otro programa reúne: no toca el plan de estudios
          oficial (cero trámite de RVOE para arrancar), genera ingresos
          propios desde la primera generación y funciona como laboratorio
          del modelo digital de la institución sin arriesgar la matrícula
          formal.
        </p>
        <p className={s.prose}>
          Además resuelve un problema de vinculación: las empresas de tu
          región necesitan exactamente lo que tu claustro sabe — pero lo
          necesitan en línea, en cohortes cortas y con horario de adultos
          que trabajan. Una academia de educación continua bien construida
          convierte ese conocimiento dormido en oferta que se vende sola, y
          de paso le da a tus académicos un canal digno de publicar lo que
          saben.
        </p>

        <h2 className={s.h2}>¿Cómo arranca el proyecto? Los primeros 30 días</h2>
        <p className={s.prose}>
          Para quitarle lo abstracto: esto es lo que pasa el primer mes de
          trabajo con una institución, semana por semana.
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Semana 1 — escuchar</strong>
            Sesiones con dirección académica, docentes clave y — esto casi
            nadie lo hace — alumnos. Inventario de lo que ya existe:
            plataforma, contenidos, capacidades del claustro.
          </li>
          <li>
            <strong>Semana 2 — decidir</strong>
            Hoja de ruta por fases: qué programa arranca primero y por qué,
            qué se reutiliza, qué se produce desde cero. Con presupuesto
            cerrado por fase, para que lo lleves al comité sin sorpresas.
          </li>
          <li>
            <strong>Semanas 3 y 4 — probar</strong>
            Diseño del primer curso piloto: estructura, guion del primer
            módulo y prototipo navegable. No un documento de visión: una
            pieza que tu equipo puede abrir, criticar y corregir.
          </li>
        </ol>
        <p className={s.prose}>
          A partir de ahí, cada fase repite el ciclo del{" "}
          <a href="/metodo">método de los 3 actos</a>: producción, montaje,
          formación docente y lanzamiento — con entregables visibles cada
          semana, no un "gran develado" a los seis meses.
        </p>

        <h2 className={s.h2}>¿Cuánto cuesta y cuánto tarda?</h2>
        <p className={s.prose}>
          Igual que con las empresas: depende del alcance, y lo honesto es
          decirlo. Un diplomado de educación continua no cuesta lo mismo que
          digitalizar una licenciatura. Trabajamos por fases con cotización
          cerrada: el primer programa demuestra el modelo y entrena a tu
          equipo; los siguientes salen más rápido y más baratos porque el
          método ya quedó en casa.
        </p>
        <p className={s.prose}>
          Lo que no cambia de proyecto a proyecto: la academia queda de la
          institución — cursos, plantillas y método documentado —, la
          formación docente va incluida, y la primera conversación no
          cuesta nada. Si después de escucharte creemos que no somos el
          equipo correcto, también te lo vamos a decir.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <section>
          <h2 className={s.h2}>La prueba: educación en línea que sí enganchó</h2>
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
            El equipo fundador de DisruptIA ha colaborado con UNAM,
            Santillana, SM Ediciones, Pearson y Editores Mexicanos Unidos —
            editorial y academia, no solo tecnología.{" "}
            <a href="/casos">Lee los casos completos</a> o{" "}
            <a href="/metodo">conoce el método de los 3 actos</a>.
          </p>
        </section>
      </div>

      <Faq
        titulo="Preguntas frecuentes de instituciones educativas"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Tu institución ya sabe enseñar — falta la versión digital"
        texto="Cuéntanos qué programa quieren llevar en línea primero, o qué les está doliendo: deserción, docentes, oferta nueva. Respondemos con una hoja de ruta concreta por fases."
        waMensaje="Hola, represento a una institución educativa y queremos crear nuestra academia digital."
      />
    </PageShell>
  );
}
