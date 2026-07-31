import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Capacitación en servicio al cliente",
  description:
    "Creamos la academia de servicio al cliente de tu empresa: cursos en línea con práctica de casos difíciles, para dar criterio y no guiones que se notan.",
  alternates: { canonical: "/academia-de-servicio-al-cliente" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de academias de servicio al cliente",
  serviceType: "Diseño y producción de cursos en línea de atención y servicio",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Academia de servicio al cliente en línea: criterio para resolver, manejo de clientes difíciles y práctica con los casos reales de tu operación.",
  url: "https://disruptia.org/academia-de-servicio-al-cliente",
};

const FAQS = [
  {
    q: "¿Qué es una academia de servicio al cliente?",
    a: "Es el sistema de formación permanente del área de atención: los cursos en línea, rutas y evaluaciones con los que tu gente aprende a resolver bien, no solo a responder amable. Incluye el conocimiento del producto, el criterio para decidir qué se puede hacer en cada situación y la práctica de las conversaciones difíciles que ocurren de verdad en tu operación.",
  },
  {
    q: "¿Por qué no basta con darles un guion?",
    a: "Porque el guion cubre la conversación esperada y los problemas ocurren en la inesperada. Cuando alguien solo tiene guion, en cuanto el cliente sale del camino previsto la persona se queda sin recursos: repite la frase, escala todo o improvisa mal. El guion además se oye — el cliente nota cuando le están leyendo algo, y esa sensación de estar hablando con una máquina es justo lo que arruina la experiencia. El criterio, en cambio, funciona en situaciones que nadie previó.",
  },
  {
    q: "¿Sirve para call center, para piso de tienda o para ambos?",
    a: "Para ambos, aunque se diseñan distinto. En teléfono o chat todo pasa por la palabra y el tiempo de respuesta; en piso entran el lenguaje corporal, la fila que espera y el compañero que observa. Cambian los casos y los ejercicios; lo que no cambia es el método: dar criterio, practicar situaciones reales y evaluar decisiones en lugar de memoria.",
  },
  {
    q: "¿Cómo se practica atender a un cliente enojado?",
    a: "Con simulaciones donde la conversación cambia según lo que la persona responde, de modo que puede ver cómo una frase desescala o incendia una situación. Con inteligencia artificial se puede además ensayar muchas veces contra un cliente que reacciona distinto cada vez y no se cansa — algo imposible en un taller presencial, donde cada participante alcanza a practicar una o dos veces.",
  },
  {
    q: "¿Cuánto tarda en verse en las encuestas de satisfacción?",
    a: "El NPS y las encuestas de satisfacción se mueven despacio porque dependen de muchas cosas además de la formación: el producto, los tiempos de entrega, el sistema. Lo que se ve antes son indicadores más cercanos al trabajo: cuántos casos resuelve la persona sin escalar, cuánto tarda en resolverlos y cuántas quejas se repiten por el mismo motivo. Esos cambian en semanas y son los que conviene fijar como objetivo.",
  },
  {
    q: "¿Ustedes capacitan a nuestro equipo de atención?",
    a: "No. Diseñamos y producimos la academia en línea y la dejamos funcionando en tu plataforma, para que cada persona que entra la reciba automáticamente. Tu equipo la opera; nosotros la construimos y te entregamos el método documentado para que puedas agregar los casos nuevos que vayan apareciendo — porque en servicio siempre aparecen.",
  },
];

export default function ServicioClientePage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/academia-de-servicio-al-cliente", label: "Servicio al cliente" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/servicio-cliente.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · ATENCIÓN Y SERVICIO</span>
        <h1 className={`${s.title} aparece`}>
          Servicio al cliente: dale criterio a tu gente, no un guion que se nota
        </h1>
        <p className={s.lede}>
          Todos hemos estado del otro lado de esa llamada: la persona que
          atiende es amabilísima, repite tres veces que entiende nuestra
          molestia y no puede resolver absolutamente nada. No es su culpa —
          le dieron frases y no le dieron criterio ni permiso para decidir.
          Una academia de servicio al cliente se construye justo al revés:
          primero el criterio para resolver, después las palabras para
          decirlo.
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
        <h2 className={s.h2}>¿Qué es una academia de servicio al cliente?</h2>
        <p className={s.respuesta}>
          Es el sistema de formación permanente del área de atención: el
          conjunto de cursos en línea, rutas por puesto y evaluaciones con el
          que tu gente aprende a resolver los problemas de los clientes. Cubre
          tres capas que suelen enseñarse por separado y funcionan mucho mejor
          juntas: el conocimiento del producto y los procesos, el criterio
          para decidir qué se puede hacer en cada situación, y la habilidad
          conversacional para manejar el momento difícil.
        </p>
        <p className={s.prose}>
          La capacitación tradicional en servicio suele atacar solo la tercera
          capa, que es la más visible: cómo saludar, cómo mostrar empatía, qué
          frases usar. El resultado es gente entrenada para sonar bien
          mientras sigue sin poder resolver, y eso —cualquiera que haya
          llamado a un centro de atención lo sabe— molesta más que la
          respuesta seca de alguien que sí sabe qué hacer.
        </p>
        <p className={s.prose}>
          Por eso el orden que proponemos es inverso al habitual: primero que
          la persona domine qué puede ofrecer, hasta dónde llega su autoridad
          y cómo se resuelve cada tipo de caso; después, cómo comunicarlo. La
          empatía sin capacidad de resolución es un teatro que el cliente
          detecta en la segunda frase.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · EL PROBLEMA</span>
        <h2 className={s.h2}>Por qué falla la capacitación en servicio</h2>
        <p className={s.prose}>
          Casi nunca por falta de ganas de la gente. Estas son las cuatro
          causas que encontramos una y otra vez cuando revisamos por qué un
          área de atención no mejora aunque se capacite:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>CAUSA 1</span>
            <h3>Se enseña actitud, falta información</h3>
            <p>
              El curso motiva y habla de la importancia del cliente, pero la
              persona sigue sin saber qué hacer cuando le piden una
              devolución fuera de política. La actitud sin herramientas se
              agota en dos semanas.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAUSA 2</span>
            <h3>Se practica lo fácil</h3>
            <p>
              El ejercicio del taller es un cliente educado con un problema
              simple. Los casos que de verdad queman a la gente —el furioso,
              el que tiene razón, el que miente— nunca se ensayan.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAUSA 3</span>
            <h3>No hay permiso para decidir</h3>
            <p>
              Se capacita para resolver y después el sistema exige autorizar
              todo con el supervisor. La contradicción entre lo que se enseña
              y lo que se permite desmoraliza más que no capacitar.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAUSA 4</span>
            <h3>Se capacita una vez y hay rotación alta</h3>
            <p>
              El taller se dio en marzo y en agosto la mitad del equipo es
              nuevo. Sin algo permanente y disponible, la formación se
              evapora al ritmo de las renuncias.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · LA RUTA</span>
        <h2 className={s.h2}>¿Qué aprende alguien de atención y en qué orden?</h2>
        <p className={s.prose}>
          Cinco etapas, pensadas para que la persona pueda atender casos
          reales desde temprano en lugar de esperar a terminar todo el
          programa:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Qué vendemos y a quién</strong>
            El producto desde los ojos del cliente: para qué lo compra, qué
            espera de él y qué le sale mal seguido. Sin esto, la persona
            atiende quejas de algo que no comprende.
          </li>
          <li>
            <strong>Qué puedo hacer yo</strong>
            El mapa de autoridad: qué resuelve la persona sola, qué necesita
            autorización, qué se escala y a quién. Esta claridad es lo que
            convierte a alguien en resolutivo.
          </li>
          <li>
            <strong>Los casos que representan el 80%</strong>
            Las situaciones que se repiten todos los días, con el
            procedimiento y el criterio de cada una. Aquí se gana la
            eficiencia real del área.
          </li>
          <li>
            <strong>La conversación difícil</strong>
            El cliente enojado, el que tiene razón y hay que reconocerlo, el
            que pide algo imposible. Con práctica repetida, porque estas
            conversaciones se aprenden con reflejos, no con teoría.
          </li>
          <li>
            <strong>Cuándo romper la regla</strong>
            El nivel avanzado: en qué situaciones conviene salirse del
            procedimiento para salvar a un cliente, y cómo justificarlo
            después. Solo se enseña cuando las cuatro anteriores están
            sólidas.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Cuáles son las tres quejas que más se repiten en tu operación? Ahí empieza el diseño." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LA PRÁCTICA</span>
        <h2 className={s.h2}>Practicar clientes difíciles sin quemar clientes reales</h2>
        <p className={s.prose}>
          Esta es la parte que ningún manual sustituye. Manejar a alguien
          molesto es una habilidad motriz más que intelectual: se sabe cuando
          sale sin pensarlo. Así se entrena dentro del curso:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 1</span>
            <h3>La conversación que se bifurca</h3>
            <p>
              Cada respuesta cambia el ánimo del cliente y el resultado del
              caso. La persona ve, en el momento, cómo una frase desescala o
              enciende una llamada.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 2</span>
            <h3>El cliente que no se cansa</h3>
            <p>
              Con inteligencia artificial, el mismo caso difícil se puede
              ensayar veinte veces con reacciones distintas. En un taller
              presencial cada quien alcanza a practicar una vez.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 3</span>
            <h3>El caso sin respuesta correcta</h3>
            <p>
              Situaciones donde todas las salidas tienen costo y hay que
              elegir la menos mala, justificándola. Es donde se construye el
              criterio de verdad.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 4</span>
            <h3>La llamada real comentada</h3>
            <p>
              Grabaciones propias (con permiso) analizadas dentro del curso,
              señalando el segundo exacto donde el caso se pudo salvar o se
              perdió.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LA MEDICIÓN</span>
        <h2 className={s.h2}>¿Qué indicadores deberían moverse?</h2>
        <p className={s.prose}>
          Conviene elegir uno o dos y sostenerlos, en lugar de prometer que
          todo mejorará. Estos son los que mejor responden a la formación:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Resolución en el primer contacto</strong> — el indicador
            rey del área, y el que más depende de que la persona tenga
            criterio y autoridad. Sube rápido cuando la formación es la
            correcta.
          </li>
          <li>
            <strong>Escalamientos innecesarios</strong> — cuántos casos suben
            al supervisor pudiendo resolverse abajo. Bajarlo libera tiempo de
            mando y sube la satisfacción del cliente.
          </li>
          <li>
            <strong>Quejas repetidas por el mismo motivo</strong> — si el
            mismo problema regresa, o no se resolvió bien o hay algo detrás
            que la formación está señalando.
          </li>
          <li>
            <strong>Rotación del área</strong> — atender clientes molestos
            sin herramientas quema a la gente. Un equipo que sabe resolver
            aguanta mucho más que uno que solo sabe disculparse.
          </li>
        </ul>
        <p className={s.prose}>
          Cuál se elige como objetivo se decide en el{" "}
          <a href="/deteccion-de-necesidades">diagnóstico</a>, porque el
          indicador determina qué se practica: entrenar para bajar
          escalamientos no se parece a entrenar para subir satisfacción.
        </p>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>06 · CÓMO SE CONSTRUYE</span>
        <h2 className={s.h2}>De tus casos reales a la academia</h2>
        <p className={s.prose}>
          El material sale de tu operación, no de un catálogo: revisamos las
          quejas, escuchamos llamadas, hablamos con quienes atienden todos los
          días y con los supervisores que reciben lo que se escala. De ahí
          salen los casos que se convierten en práctica — y suele aparecer,
          de paso, algún problema de proceso que estaba disfrazado de problema
          de actitud.
        </p>
        <p className={s.prose}>
          Después el camino es el mismo de cualquier{" "}
          <a href="/academias-corporativas">academia corporativa</a>:{" "}
          <a href="/diseno-instruccional-empresarial">diseño instruccional</a>,
          producción, montaje en{" "}
          <a href="/implementacion-de-lms">la plataforma</a> y lanzamiento. Si
          tu área tiene mucha rotación, conviene amarrarla con{" "}
          <a href="/onboarding-empresarial">el onboarding</a>, para que cada
          persona nueva entre a un solo camino continuo.
        </p>
      </div>

      <Faq
        titulo="Preguntas frecuentes sobre capacitación en servicio al cliente"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Un equipo que sabe resolver no necesita frases para sonar amable"
        texto="Cuéntanos cuánta gente atiende clientes, por qué canal y qué tres quejas se repiten más. Te devolvemos cómo se vería su academia y qué módulo conviene lanzar primero."
        waMensaje="Hola, quiero crear la academia de servicio al cliente de mi empresa."
      />
    </PageShell>
  );
}
