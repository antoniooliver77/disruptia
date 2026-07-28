import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Onboarding empresarial: inducción que reduce la rotación",
  description:
    "Creamos el onboarding digital de tu empresa: inducción en línea, primeros 90 días y ruta por puesto. Menos rotación temprana, gente productiva más rápido.",
  alternates: { canonical: "/onboarding-empresarial" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de programas de onboarding empresarial",
  serviceType: "Diseño y producción de onboarding digital e inducción de personal",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Diseño y producción del onboarding en línea de una empresa: inducción, primeros 90 días, rutas por puesto y evidencia de que la persona ya puede operar.",
  url: "https://disruptia.org/onboarding-empresarial",
};

const FAQS = [
  {
    q: "¿Qué es el onboarding empresarial?",
    a: "Es el proceso completo que lleva a una persona de recién contratada a plenamente productiva: cultura, procesos, herramientas y el oficio de su puesto. No es el día de inducción ni la firma de documentos; es el diseño de los primeros 90 días, que es donde se decide si esa contratación se queda o se pierde.",
  },
  {
    q: "¿Cuánto dura un buen onboarding?",
    a: "Noventa días como marco, con tres momentos distintos: la primera semana (orientación y primeras tareas reales), el primer mes (el oficio del puesto) y el trimestre (autonomía y evidencia de desempeño). Un onboarding de un día no es corto: es inexistente, solo que con café y gafete.",
  },
  {
    q: "¿Cómo reduce la rotación un onboarding bien hecho?",
    a: "Ataca las tres causas de la salida temprana: la persona no entendió qué se esperaba de ella, no logró resultados los primeros meses y no encontró a quién preguntarle sin sentirse tonta. Un onboarding diseñado responde las tres antes de que se conviertan en renuncia. La rotación temprana es cara y, casi siempre, autoinfligida.",
  },
  {
    q: "¿Sirve el onboarding en línea para puestos operativos?",
    a: "Sí, y suele ser donde más rinde, porque son los puestos con más ingresos, más turnos y menos disponibilidad de un instructor. Diseñamos para su contexto: cápsulas cortas desde el celular, lenguaje del piso, práctica con los casos que de verdad pasan en el turno.",
  },
  {
    q: "¿Ustedes dan la inducción a nuestro personal nuevo?",
    a: "No. Creamos el onboarding en línea y lo dejamos funcionando en tu plataforma: cada persona que entra a tu empresa lo recibe automáticamente, sin que nadie tenga que agendar nada. Tu equipo lo opera; nosotros lo diseñamos, lo producimos y te enseñamos a actualizarlo.",
  },
  {
    q: "¿Qué pasa con la parte humana? ¿No se vuelve frío?",
    a: "Al revés: bien hecho, libera lo humano. Cuando lo repetible —políticas, sistemas, procesos— vive en línea y está siempre disponible, el jefe y el buddy dejan de gastar sus horas explicando lo mismo y las usan en lo que solo un humano puede hacer: acompañar, corregir y presentar a la persona con el resto del equipo.",
  },
  {
    q: "¿Cada cuándo hay que actualizar el onboarding?",
    a: "Una revisión ligera cada seis meses y una a fondo al año suele bastar, más una actualización inmediata cada vez que cambia un proceso que el onboarding enseña. Por eso te entregamos las plantillas y el método: si cada cambio de política requiere contratarnos, el programa envejece y la gente nueva aprende cosas que ya no son ciertas — que es peor que no enseñarles nada.",
  },
  {
    q: "¿Se puede reutilizar el onboarding para gente que ya trabaja aquí?",
    a: "Sí, y suele ser un efecto secundario muy bien recibido. Al construir el onboarding queda documentado por primera vez cómo se hacen bien las cosas, y ese material sirve para nivelar a quien lleva años haciéndolo a su manera, para cambios de puesto y para promociones. Varias empresas descubren ahí que su gente con antigüedad tenía huecos que nadie se atrevía a nombrar.",
  },
];

export default function OnboardingPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/onboarding-empresarial", label: "Onboarding empresarial" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/primer-dia.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · ONBOARDING</span>
        <h1 className={`${s.title} aparece`}>
          Onboarding empresarial: los primeros 90 días deciden todo
        </h1>
        <p className={s.lede}>
          Gastaste semanas y dinero en encontrar a la persona correcta. Llegó
          el lunes, le diste un gafete, un correo y la presentación de la
          empresa de hace cuatro años. A los tres meses se fue — y volviste a
          reclutar. El onboarding no es un trámite de bienvenida: es la
          primera capacitación que da tu empresa, y la que más caro sale
          cuando no existe.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/academias-corporativas">
            Ver academias corporativas
          </a>
        </div>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>01 · LA DEFINICIÓN</span>
        <h2 className={s.h2}>¿Qué es el onboarding empresarial?</h2>
        <p className={s.respuesta}>
          El onboarding empresarial es el proceso completo que lleva a una
          persona recién contratada hasta ser plenamente productiva: cultura,
          procesos, herramientas y el oficio concreto de su puesto. Se mide
          en meses, no en horas, y su resultado no es que la persona "ya
          conozca la empresa", sino que pueda operar sola y con criterio.
        </p>
        <p className={s.prose}>
          Casi todas las empresas creen tener onboarding. Lo que casi todas
          tienen es inducción: un día de documentos, recorrido y
          presentación institucional. La inducción es una parte del
          onboarding, la más corta y la menos determinante. Lo que decide si
          esa contratación funciona es lo que pasa las siguientes doce
          semanas — y eso, en la mayoría de las empresas, no está diseñado
          por nadie: depende de qué tan buen humor y qué tan poca carga tenga
          el jefe directo ese mes.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · EL COSTO</span>
        <h2 className={s.h2}>¿Qué te cuesta hoy no tener onboarding?</h2>
        <p className={s.prose}>
          Es un gasto invisible porque nunca llega como factura. Está
          repartido en cuatro lugares y en todos lo estás pagando:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 1</span>
            <h3>Rotación temprana</h3>
            <p>
              La gente que se va antes del año se lleva todo lo que
              invertiste en reclutarla y formarla — y te obliga a empezar de
              cero con la siguiente.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 2</span>
            <h3>Horas de tu mejor gente</h3>
            <p>
              Cada ingreso nuevo consume horas de quien más produce,
              explicando lo mismo que explicó el mes pasado. Es la
              capacitación más cara que existe.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 3</span>
            <h3>Rampa lenta</h3>
            <p>
              Semanas o meses de sueldo pagado a alguien que todavía no
              puede rendir al nivel del puesto, no por falta de talento sino
              de información.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 4</span>
            <h3>Errores evitables</h3>
            <p>
              El proceso mal ejecutado, el cliente mal atendido, el reporte
              equivocado. Errores que no son de la persona: son del sistema
              que la dejó sola.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · LA ESTRUCTURA</span>
        <h2 className={s.h2}>¿Cómo se estructuran los primeros 90 días?</h2>
        <p className={s.prose}>
          Con tres etapas y una regla que las une: en cada una la persona
          debe lograr algo real, no solo recibir información. Así se ve el
          onboarding que construimos:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Antes del día uno</strong>
            Bienvenida, accesos listos y expectativas claras antes de que
            llegue. Suena menor y es de lo que más impacto tiene: la persona
            entra sabiendo que la esperaban.
          </li>
          <li>
            <strong>Semana 1 — ubicarse</strong>
            Cultura, reglas del juego, herramientas y una primera tarea real
            terminada. Que el viernes pueda decir "hice algo", no "me
            presentaron a mucha gente".
          </li>
          <li>
            <strong>Mes 1 — el oficio</strong>
            El curso del puesto: los procesos que va a ejecutar, con
            práctica y casos reales de tu operación. Aquí vive el grueso del
            contenido en línea.
          </li>
          <li>
            <strong>Mes 3 — autonomía</strong>
            Evaluación de desempeño real: ¿ya puede operar sin supervisión
            constante? La respuesta es evidencia, no una impresión del jefe.
          </li>
          <li>
            <strong>Cierre y mejora</strong>
            La persona evalúa su propio onboarding. Ese dato, generación
            tras generación, es lo que mantiene vivo el programa.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Cuánta gente nueva entra a tu empresa cada mes? Con eso ya podemos dimensionar tu onboarding." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · EL ENTREGABLE</span>
        <h2 className={s.h2}>¿Qué incluye el onboarding que construimos?</h2>
        <p className={s.prose}>
          Todo lo que se repite en cada ingreso, diseñado una vez y
          funcionando para siempre:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>PIEZA 1</span>
            <h3>El curso de bienvenida</h3>
            <p>
              Quiénes somos, cómo trabajamos y qué se espera de ti — contado
              como historia, no como organigrama con quiz al final.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PIEZA 2</span>
            <h3>Los cursos por puesto</h3>
            <p>
              Rutas distintas para vendedor, operario o analista. Cada quien
              recibe lo suyo automáticamente, sin que nadie arme listas a
              mano.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PIEZA 3</span>
            <h3>La guía del jefe directo</h3>
            <p>
              Qué conversación tener en la semana 1, en el mes 1 y en el mes
              3. El onboarding falla más por jefes sin guion que por
              contenido malo.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PIEZA 4</span>
            <h3>La evidencia</h3>
            <p>
              Evaluaciones de desempeño que dicen si la persona ya puede
              operar, y un reporte que recursos humanos puede leer sin
              exportar nada.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PIEZA 5</span>
            <h3>La automatización</h3>
            <p>
              Alta, inscripción, recordatorios y constancias sin
              intervención humana. Si tu equipo tiene que empujarlo cada
              semana, no está terminado.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LOS ERRORES</span>
        <h2 className={s.h2}>Los errores clásicos del onboarding</h2>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 1</span>
            <h3>Confundir inducción con onboarding</h3>
            <p>
              Un día de bienvenida y de ahí "que aprenda sobre la marcha".
              Sobre la marcha se aprende, sí: a hacerlo mal y a irse.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 2</span>
            <h3>Vaciar toda la información el primer día</h3>
            <p>
              Ocho horas de presentaciones seguidas. Nadie retiene eso, y de
              paso la persona empieza cansada y con la sensación de estar
              atrasada.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 3</span>
            <h3>Dejarlo todo al jefe directo</h3>
            <p>
              Sin guion ni materiales, cada jefe improvisa un onboarding
              distinto — y la calidad de la experiencia depende de con quién
              te tocó.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 4</span>
            <h3>No tener nada para el segundo mes</h3>
            <p>
              La bienvenida está resuelta y después hay silencio. El mes 2 es
              justo cuando la persona decide si se queda.
            </p>
          </article>
        </div>
      </section>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>06 · LOS CASOS DIFÍCILES</span>
        <h2 className={s.h2}>¿Y si tu empresa contrata a muchos a la vez?</h2>
        <p className={s.prose}>
          Hay tres escenarios donde el onboarding en línea deja de ser una
          mejora y se vuelve la única salida viable. Si tu empresa está en
          alguno, ya sabes por qué el modelo actual no aguanta:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Contratación por temporada</strong> — retail en fin de
            año, logística en picos, campo en cosecha. Cien personas entrando
            la misma semana no caben en la agenda de nadie: o el onboarding
            está en línea y automatizado, o simplemente no ocurre.
          </li>
          <li>
            <strong>Varias sedes o turnos</strong> — el turno nocturno y la
            sucursal foránea reciben siempre la versión resumida del
            onboarding, contada por alguien que ya iba de salida. La calidad
            de la formación termina dependiendo del código postal.
          </li>
          <li>
            <strong>Equipos remotos o híbridos</strong> — sin pasillos ni
            comida de bienvenida, todo lo que la persona aprende del ambiente
            simplemente no sucede. Aquí el onboarding diseñado no compensa:
            sustituye por completo lo que antes pasaba solo.
          </li>
        </ul>
        <p className={s.prose}>
          En los tres casos el argumento de inversión es el mismo y es
          fácil de calcular: divide lo que cuesta construir el onboarding
          entre toda la gente que va a entrar este año. Contra el costo de
          una sola renuncia temprana, la cuenta suele cerrarse sola.
        </p>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>07 · CÓMO SE MIDE</span>
        <h2 className={s.h2}>¿Cómo saber si tu onboarding funciona?</h2>
        <p className={s.prose}>
          Con cuatro números que tu empresa probablemente ya tiene, aunque
          nadie los mire juntos: la rotación antes de los seis meses, el
          tiempo hasta el primer resultado real del puesto, los errores de
          gente con menos de tres meses y qué tan seguido tu personal con
          experiencia es interrumpido para explicar lo básico.
        </p>
        <p className={s.prose}>
          Si esos cuatro números mejoran, el onboarding sirvió. Si solo mejora
          la encuesta de satisfacción de la bienvenida, tienes una fiesta de
          bienvenida muy bien evaluada.{" "}
          <a href="/metodo">Nuestro método</a> parte justo de ahí: definimos
          el indicador antes de diseñar nada. Lo mismo hacemos en{" "}
          <a href="/universidad-corporativa">la universidad corporativa</a> y
          en{" "}
          <a href="/capacitacion-con-inteligencia-artificial">
            la capacitación con IA
          </a>
          .
        </p>
      </div>

      <Faq titulo="Preguntas frecuentes sobre onboarding" preguntas={FAQS} />

      <CtaBanda
        titulo="La gente no renuncia el día que se va: renuncia el primer mes"
        texto="Cuéntanos cuánta gente entra a tu empresa al mes y en qué puestos. Te devolvemos cómo se vería su onboarding en línea y qué tendrías funcionando primero."
        waMensaje="Hola, quiero crear el onboarding en línea de mi empresa y me gustaría platicarlo."
      />
    </PageShell>
  );
}
