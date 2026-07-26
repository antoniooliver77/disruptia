import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Capacitación con inteligencia artificial para empresas",
  description:
    "Cursos en línea con IA aplicada donde sí sirve: práctica conversacional, rutas personalizadas y datos de aprendizaje. Sin humo ni cursos genéricos.",
  alternates: { canonical: "/capacitacion-con-inteligencia-artificial" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Capacitación con inteligencia artificial",
  serviceType:
    "Diseño y producción de cursos en línea con inteligencia artificial aplicada",
  provider: { "@type": "Organization", name: "DisruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Cursos en línea con práctica conversacional, rutas adaptativas y analítica de aprendizaje, con revisión pedagógica humana.",
  url: "https://disruptia.org/capacitacion-con-inteligencia-artificial",
};

const FAQS = [
  {
    q: "¿Qué es la capacitación con inteligencia artificial?",
    a: "Es el uso de IA en dos momentos distintos: en la producción de los cursos —para acelerar guiones, variantes de casos y materiales— y en el aprendizaje mismo, con práctica conversacional, retroalimentación inmediata y rutas que se ajustan al avance de cada persona. Lo que no es: generar cursos genéricos en volumen y llamarle innovación.",
  },
  {
    q: "¿La IA sustituye al diseñador instruccional?",
    a: "No, y quien diga lo contrario nunca ha visto el resultado. La IA no sabe qué le duele a tu operación, qué error cuesta dinero ni qué se puede perdonar en una evaluación. Produce rápido lo que alguien más decidió; el criterio pedagógico —qué practicar, qué medir, qué cortar— sigue siendo humano. Por eso cada pieza que sale de nuestra producción pasa por revisión.",
  },
  {
    q: "¿Nuestros datos entran a un modelo público?",
    a: "No sin tu autorización explícita y por escrito. El contenido sensible de tu operación se maneja bajo el acuerdo de confidencialidad del proyecto, y definimos contigo desde el arranque qué información puede tocar herramientas externas y cuál se trabaja aislada. Es una conversación que tenemos al inicio, no una letra chica.",
  },
  {
    q: "¿Sirve la IA para capacitar a personal operativo?",
    a: "Sí, y a veces es donde más rinde: práctica desde el celular en cápsulas cortas, retroalimentación inmediata sin esperar al supervisor, y contenidos que se adaptan al ritmo de quien apenas está aprendiendo el proceso. La condición es diseñar para su contexto real —turnos, ruido, manos ocupadas—, no para una oficina.",
  },
  {
    q: "¿Cuánto baja el costo de producción con IA?",
    a: "Baja de forma real, sobre todo en producción de variantes, guiones y materiales de apoyo, y eso te permite tener más cursos por el mismo presupuesto. Pero no lo vendemos como descuento automático: el ahorro se va a más práctica y mejor evaluación, que es donde un curso se gana o se pierde.",
  },
  {
    q: "¿Dan cursos sobre cómo usar la IA en el trabajo?",
    a: "Sí: es una de las academias que más nos piden. Diseñamos y producimos el curso en línea de alfabetización en IA para tu empresa, con los casos de tus áreas y las reglas de uso que tu organización decida. Lo creamos y te lo entregamos funcionando — no lo impartimos en vivo.",
  },
  {
    q: "¿Funciona esto sobre el LMS que ya tenemos?",
    a: "En la mayoría de los casos sí, y siempre lo revisamos antes de proponerte cambiar nada. Algunas funciones avanzadas de práctica conversacional requieren integración adicional, y te decimos con claridad qué se puede hacer sobre tu plataforma actual y qué no. No vendemos plataformas, así que la recomendación no tiene comisión detrás.",
  },
];

export default function CapacitacionIaPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        {
          href: "/capacitacion-con-inteligencia-artificial",
          label: "Capacitación con IA",
        },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/practica-ia.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · INTELIGENCIA ARTIFICIAL</span>
        <h1 className={`${s.title} aparece`}>
          Capacitación con inteligencia artificial, sin el humo de siempre
        </h1>
        <p className={s.lede}>
          Te han prometido que la IA va a revolucionar la capacitación de tu
          empresa. Lo que casi nadie te dice es dónde sirve de verdad y dónde
          solo produce más basura, más rápido. Aquí te decimos las dos cosas
          — y construimos los cursos donde sí cambia el resultado.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/metodo">
            Ver nuestro método
          </a>
        </div>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>01 · LA DEFINICIÓN</span>
        <h2 className={s.h2}>¿Qué es la capacitación con inteligencia artificial?</h2>
        <p className={s.respuesta}>
          Es el uso de inteligencia artificial en dos momentos distintos del
          proceso: en la producción de los cursos, donde acelera guiones,
          variantes de casos y materiales; y en el aprendizaje mismo, donde
          permite práctica conversacional, retroalimentación inmediata y
          rutas que se ajustan al avance de cada persona. Todo lo demás que
          se vende bajo ese nombre —generar cursos genéricos en volumen— es
          producir más rápido el problema que ya tenías.
        </p>
        <p className={s.prose}>
          La confusión es entendible. Desde 2023 el mercado se llenó de
          herramientas que convierten un PDF en un curso en once minutos. El
          resultado es real y es impresionante la primera vez que lo ves. El
          problema aparece a los tres meses, cuando revisas los datos: la
          gente entra, avanza rapidísimo, aprueba y sigue trabajando
          exactamente igual. Producir contenido nunca fue el cuello de
          botella; hacer que alguien cambie lo que hace, sí.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · DÓNDE SÍ SIRVE</span>
        <h2 className={s.h2}>¿Dónde aporta de verdad la IA en un curso?</h2>
        <p className={s.prose}>
          En cuatro lugares concretos. Si una propuesta de "capacitación con
          IA" no está hablando de alguno de estos, está hablando de otra
          cosa:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>APLICACIÓN 1</span>
            <h3>Práctica conversacional</h3>
            <p>
              El cliente molesto que nunca se cansa, el candidato difícil, el
              paciente que no entiende. Tu gente practica veinte veces la
              conversación que antes solo ensayaba una vez al año en un
              taller.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>APLICACIÓN 2</span>
            <h3>Retroalimentación inmediata</h3>
            <p>
              Responder por qué una decisión fue mala en el segundo en que se
              tomó, no en la revisión de la próxima semana. Es la diferencia
              entre corregir y regañar.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>APLICACIÓN 3</span>
            <h3>Rutas que se ajustan</h3>
            <p>
              Quien ya domina un tema lo salta; quien batalla recibe más
              práctica de eso mismo. Se acaba el curso de talla única que
              aburre a la mitad y pierde a la otra.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>APLICACIÓN 4</span>
            <h3>Producción acelerada</h3>
            <p>
              Guiones, variantes de casos, materiales de apoyo. Con revisión
              humana en cada pieza: la IA hace el trabajo pesado, el criterio
              lo pone quien ha dado clase.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · DÓNDE NO</span>
        <h2 className={s.h2}>¿Dónde no usamos la inteligencia artificial?</h2>
        <p className={s.prose}>
          Esta lista nos ha costado proyectos y la sostenemos igual, porque
          es la razón por la que los cursos que entregamos funcionan:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Para decidir qué enseñar</strong> — eso sale del
            diagnóstico con tu gente, de ver la operación y de escuchar
            dónde duele. Ningún modelo conoce tu empresa.
          </li>
          <li>
            <strong>Para generar cursos completos sin revisión</strong> — un
            curso malo producido rápido sigue siendo un curso malo, solo que
            ahora tienes cuarenta y todos con tu logo.
          </li>
          <li>
            <strong>Para evaluar sin criterio humano detrás</strong> — la
            rúbrica la define un diseñador instruccional; la IA aplica y
            acelera, no decide qué es un buen desempeño.
          </li>
          <li>
            <strong>Para poner una voz robótica sobre diapositivas</strong> —
            eso no es innovación, es el mismo curso aburrido con narración
            sintética.
          </li>
          <li>
            <strong>Para fingir personalización</strong> — cambiar el nombre
            del participante en la pantalla no es una ruta adaptativa, y tu
            gente lo nota.
          </li>
        </ul>
      </section>

      <CtaInline texto="¿Quieres saber qué parte de tu capacitación sí mejoraría con IA? Te lo decimos sin venderte de más." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LOS RESULTADOS</span>
        <h2 className={s.h2}>¿Qué cambia en la práctica cuando la IA está bien usada?</h2>
        <p className={s.prose}>
          Tres cosas concretas, y ninguna tiene que ver con lo espectacular
          que se ve la plataforma:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 1</span>
            <h3>Más horas de práctica real</h3>
            <p>
              La práctica deja de estar limitada por la agenda de un
              instructor. Quien necesita ensayar diez veces, ensaya diez
              veces — a las once de la noche si así le toca.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 2</span>
            <h3>Datos que sirven para decidir</h3>
            <p>
              No "porcentaje de avance": en qué decisión concreta falla la
              mayoría. Ese dato le dice a tu operación qué corregir, no solo
              a quién recordarle que termine el curso.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAMBIO 3</span>
            <h3>Más cursos por el mismo presupuesto</h3>
            <p>
              La producción acelerada libera presupuesto, y ese ahorro se va
              a lo que de verdad mueve la aguja: más práctica y mejor
              evaluación.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · EL ARRANQUE</span>
        <h2 className={s.h2}>¿Por dónde se empieza sin apostar el presupuesto?</h2>
        <p className={s.prose}>
          Por un piloto acotado, y esto lo recomendamos incluso a empresas
          que llegan con presupuesto aprobado para algo mucho más grande. Se
          elige un curso donde la práctica sea claramente el cuello de
          botella —normalmente una conversación difícil: la objeción de
          precio, la queja del cliente, la llamada de cobranza— y se
          construye completo, con práctica conversacional y datos de
          aprendizaje desde el primer grupo.
        </p>
        <p className={s.prose}>
          El piloto responde en semanas lo que ninguna presentación puede
          responder: si tu gente entra sin que la persigan, si la práctica
          cambia lo que hacen frente al cliente y si los datos le dicen algo
          útil a tu operación. Con esas tres respuestas en la mano, la
          decisión de escalar deja de ser un acto de fe y se vuelve una
          cuenta.
        </p>
        <p className={s.prose}>
          Es también nuestra forma de trabajar contigo sin pedirte que
          confíes de entrada. Preferimos que la segunda fase la apruebes
          viendo resultados y no viendo diapositivas — y si el piloto no
          convence, te queda un curso que funciona y ninguna deuda con
          nosotros.
        </p>

        <h2 className={s.h2}>¿Qué necesita tu empresa para que esto funcione?</h2>
        <p className={s.prose}>
          Menos de lo que la gente cree, pero no cero. Tres cosas, y ninguna
          es tecnológica:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Acceso a expertos internos</strong> — unas horas de quien
            de verdad sabe hacer bien el trabajo. Sin esa materia prima, el
            curso es genérico por más IA que le pongas.
          </li>
          <li>
            <strong>Casos reales</strong> — las conversaciones, errores y
            decisiones que sí ocurren en tu operación. Anonimizados si hace
            falta, pero reales.
          </li>
          <li>
            <strong>Una decisión sobre datos</strong> — quién puede ver los
            resultados de aprendizaje y para qué se usan. Si la gente sospecha
            que la práctica es una evaluación encubierta, deja de practicar
            de verdad y empieza a actuar para el reporte.
          </li>
        </ul>
      </section>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>06 · LA PREGUNTA INCÓMODA</span>
        <h2 className={s.h2}>¿Y la privacidad de la información de la empresa?</h2>
        <p className={s.respuesta}>
          Es la primera pregunta que hace cualquier área de sistemas seria, y
          se responde al inicio del proyecto, no en la letra chica.
          Definimos contigo qué información puede tocar herramientas
          externas y cuál se trabaja aislada, todo bajo el acuerdo de
          confidencialidad del proyecto. Tu contenido sensible no entra a
          ningún modelo público sin tu autorización explícita y por escrito.
        </p>
        <p className={s.prose}>
          En la práctica, buena parte del contenido crítico —procesos
          internos, casos con nombres de clientes, políticas— se puede
          trabajar sin exponerlo, y el resto se anonimiza antes de tocar
          cualquier herramienta. Preferimos esa conversación incómoda al
          inicio que una llamada de tu área legal a mitad del proyecto.
        </p>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>07 · NUESTRA POSTURA</span>
        <h2 className={s.h2}>Inteligencia artificial, pedagogía humana</h2>
        <p className={s.prose}>
          Es nuestra firma de marca y también la descripción literal de cómo
          trabajamos. La IA está en nuestro nombre porque cambió de verdad lo
          que podemos producir y a qué costo. La pedagogía está en la misma
          frase porque sin ella la IA solo acelera errores.
        </p>
        <p className={s.prose}>
          Quien te prometa cursos sin diseño instruccional te está vendiendo
          volumen. Quien te diga que la IA no sirve para nada no ha
          producido un curso en tres años. Nosotros estamos en el único lugar
          honesto: usarla donde suma, revisarla siempre y decirte con
          claridad qué parte del trabajo hizo una máquina y qué parte hizo
          alguien que ha dado clase.{" "}
          <a href="/metodo">Así diseñamos en tres actos</a>, y así lo
          aplicamos en{" "}
          <a href="/academias-corporativas">las academias corporativas</a> y
          en <a href="/universidad-corporativa">las universidades corporativas</a>.
        </p>
      </div>

      <Faq
        titulo="Preguntas frecuentes sobre capacitación con IA"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Te decimos dónde sí y dónde no, antes de cobrarte nada"
        texto="Cuéntanos qué quieren capacitar. Te respondemos qué parte se beneficia de verdad de la inteligencia artificial y cuál se resuelve mejor con buen diseño y ya."
        waMensaje="Hola, quiero platicar sobre capacitación con inteligencia artificial para mi empresa."
      />
    </PageShell>
  );
}
