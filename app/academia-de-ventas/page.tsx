import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Academia de ventas para tu equipo comercial",
  description:
    "Creamos la academia de ventas de tu empresa: cursos en línea con práctica de objeciones y cierre, para acortar la rampa de cada vendedor nuevo.",
  alternates: { canonical: "/academia-de-ventas" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de academias de ventas",
  serviceType: "Diseño y producción de cursos en línea para equipos comerciales",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Academia de ventas en línea: onboarding comercial, producto, manejo de objeciones y práctica de cierre con casos reales de tu operación.",
  url: "https://disruptia.org/academia-de-ventas",
};

const FAQS = [
  {
    q: "¿Qué es una academia de ventas?",
    a: "Es el sistema de formación permanente del área comercial de una empresa: los cursos en línea que aprende un vendedor desde que entra, organizados en una ruta que va del producto a la conversación difícil, con práctica y evaluación de por medio. A diferencia del taller anual de motivación, la academia está disponible todos los días, forma igual a quien entró ayer que a quien entró hace dos años, y deja registro de quién ya puede salir a vender solo.",
  },
  {
    q: "¿Sirve si nuestro producto es muy técnico o muy específico?",
    a: "Sirve especialmente ahí, porque cuanto más específico es el producto, menos ayuda un curso genérico de ventas comprado en catálogo. Toda la academia se construye sobre tu producto, tus objeciones reales y los casos que de verdad ocurren en tu mercado — el conocimiento sale de tus mejores vendedores, y nuestro trabajo es extraerlo y convertirlo en algo que otro pueda aprender.",
  },
  {
    q: "¿Cómo se practica vender en un curso en línea?",
    a: "Con simulaciones de conversación donde el vendedor elige qué responder y ve la consecuencia de su elección, con casos que presentan datos incompletos como en la vida real, y con ejercicios donde tiene que justificar por qué descartó una opción. La inteligencia artificial permite además práctica conversacional: el cliente difícil no se cansa, así que se puede ensayar veinte veces la llamada que antes se ensayaba una vez al año en un taller.",
  },
  {
    q: "¿Reemplaza al coaching del gerente comercial?",
    a: "No, y sería mal negocio que lo intentara. Lo que hace es liberar al gerente: cuando lo repetible —producto, proceso, argumentos, sistema— ya vive en la academia, sus horas dejan de gastarse explicando lo mismo a cada ingreso y se van a lo único que un curso no puede hacer, que es acompañar a una persona concreta en su territorio y con sus cuentas.",
  },
  {
    q: "¿Qué tan rápido se ven resultados?",
    a: "El indicador que se mueve primero es la rampa: cuánto tarda un vendedor nuevo en llegar a cuota. Se nota desde la primera generación que entra con la academia funcionando, porque llega a las visitas sabiendo cosas que antes aprendía en el camino. Los indicadores de conversión tardan más y dependen de muchas variables además de la formación — cualquiera que te prometa un porcentaje exacto de aumento en ventas está adivinando.",
  },
  {
    q: "¿Ustedes dan la capacitación a nuestros vendedores?",
    a: "No. Diseñamos y producimos los cursos en línea y dejamos la academia funcionando en tu plataforma, para que cada vendedor nuevo la reciba automáticamente sin que nadie agende nada. Tu equipo la opera; nosotros la construimos, te entregamos el método documentado y te enseñamos a actualizarla cuando cambie el producto o el precio.",
  },
];

export default function AcademiaVentasPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/academia-de-ventas", label: "Academia de ventas" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/practica-ventas.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · ÁREA COMERCIAL</span>
        <h1 className={`${s.title} aparece`}>
          Academia de ventas: que el vendedor nuevo no aprenda quemando clientes
        </h1>
        <p className={s.lede}>
          En la mayoría de las empresas, un vendedor nuevo aprende de tres
          maneras: acompañando unos días a alguien con experiencia, leyendo un
          catálogo, y equivocándose frente a clientes reales durante los
          siguientes seis meses. La tercera es la que más enseña y también la
          más cara, porque cada cliente que se pierde mientras alguien se
          entrena no vuelve. Una academia de ventas convierte lo que tus
          mejores vendedores ya saben en una ruta que el nuevo puede recorrer
          antes de salir a la calle.
        </p>
        <div className={s.ctaTop}>
          <a className="btn btnPrimario" href="/contacto">
            Crear nuestra academia →
          </a>
          <a className="btn btnSecundario" href="/portafolio">
            Ver ejemplos de cursos
          </a>
        </div>
      </header>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>01 · LA DEFINICIÓN</span>
        <h2 className={s.h2}>¿Qué es una academia de ventas?</h2>
        <p className={s.respuesta}>
          Una academia de ventas es el sistema de formación permanente del
          área comercial de una empresa: el conjunto de cursos en línea,
          rutas por perfil y evaluaciones con el que un vendedor aprende
          desde que entra hasta que domina el oficio. Se distingue del taller
          tradicional en tres cosas: está disponible todos los días y no una
          vez al año, forma igual a quien entró ayer que a quien lleva tiempo,
          y deja evidencia de quién ya está listo para atender cuentas solo.
        </p>
        <p className={s.prose}>
          Vale la pena aclarar qué no es, porque el término se usa para
          muchas cosas. No es un catálogo de cursos genéricos de ventas
          comprados a un proveedor: esos hablan de una empresa que no es la
          tuya, con productos que no vendes y objeciones que nadie te pone.
          Tampoco es la carpeta compartida donde viven las presentaciones de
          producto — eso es material de consulta, valioso pero pasivo, y nadie
          aprende a manejar una objeción leyendo una ficha técnica.
        </p>
        <p className={s.prose}>
          Lo que sí es: tu conocimiento comercial, el que hoy vive repartido
          en la cabeza de tus tres mejores vendedores, convertido en una
          experiencia que otra persona puede recorrer sola y a su ritmo. Ese
          traslado —de la cabeza de alguien a un sistema que escala— es
          exactamente el trabajo.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · EL COSTO</span>
        <h2 className={s.h2}>¿Qué cuesta hoy no tenerla?</h2>
        <p className={s.prose}>
          Es un costo que ninguna empresa tiene en su presupuesto, porque está
          repartido en lugares que nadie suma. Cuando se suman, incomoda:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 1</span>
            <h3>La rampa larga</h3>
            <p>
              Cada mes que un vendedor tarda de más en llegar a cuota es
              sueldo pagado contra resultados que no llegan — y esa demora
              casi siempre es falta de información, no falta de talento.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 2</span>
            <h3>Las horas de tu mejor vendedor</h3>
            <p>
              A quien más vende se le pide que entrene al nuevo, así que la
              empresa paga dos veces: en las horas que deja de vender y en lo
              improvisada que resulta esa enseñanza.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 3</span>
            <h3>Cada quien vende como puede</h3>
            <p>
              Sin una ruta común, el discurso, el descuento que se autoriza y
              hasta lo que se promete al cliente cambian según quién atienda.
              Eso se paga después, en servicio y en cancelaciones.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>COSTO 4</span>
            <h3>El conocimiento se va con la gente</h3>
            <p>
              Cuando renuncia el vendedor que sabía manejar a los clientes
              difíciles, ese saber sale por la puerta con él. Nadie lo
              documentó porque nunca hubo dónde.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · LA RUTA</span>
        <h2 className={s.h2}>¿Qué aprende un vendedor y en qué orden?</h2>
        <p className={s.prose}>
          El orden importa tanto como el contenido: un vendedor que aprende
          técnicas de cierre antes de entender el producto cierra ventas que
          después no se pueden sostener. Esta es la secuencia que
          construimos, ajustada siempre a tu ciclo comercial:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Semana 1 — el terreno</strong>
            Quién es la empresa, quién es el cliente, qué problema real le
            resolvemos y por qué nos elige a nosotros y no al de enfrente.
            Sin esto, todo lo demás es recitar características.
          </li>
          <li>
            <strong>Semana 2 — el producto</strong>
            No la ficha técnica: qué resuelve cada cosa, para quién, cuándo
            no conviene y cómo se explica en treinta segundos. Con práctica de
            explicarlo, no solo de leerlo.
          </li>
          <li>
            <strong>Mes 1 — el proceso y las herramientas</strong>
            Cómo se prospecta aquí, cómo se registra en el sistema, qué se
            promete y qué no, quién autoriza qué. La parte administrativa que
            todos odian y que hunde cuentas cuando se hace mal.
          </li>
          <li>
            <strong>Mes 2 — la conversación difícil</strong>
            Objeciones reales de tus clientes, con práctica repetida:
            precio, competencia, «lo voy a pensar», el que ya tuvo una mala
            experiencia. Aquí es donde se gana o se pierde el oficio.
          </li>
          <li>
            <strong>Mes 3 — cerrar y sostener</strong>
            Cierre, negociación dentro de los márgenes autorizados y qué pasa
            después de la firma, que es donde se construye la recompra.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Cuánto tarda hoy un vendedor nuevo en llegar a cuota? Con ese dato podemos dimensionar tu academia." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LA PRÁCTICA</span>
        <h2 className={s.h2}>¿Cómo se practica vender sin arriesgar clientes?</h2>
        <p className={s.prose}>
          Esta es la pregunta que más nos hacen los directores comerciales, y
          es la correcta: leer sobre objeciones produce vendedores que hablan
          bien de objeciones. Estas son las cuatro formas de práctica que
          construimos, todas dentro del curso:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 1</span>
            <h3>La conversación ramificada</h3>
            <p>
              El vendedor elige qué responder y la conversación cambia según
              su elección — con el cliente enfriándose o abriéndose. Se puede
              repetir hasta que la respuesta salga natural.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 2</span>
            <h3>El cliente con inteligencia artificial</h3>
            <p>
              Un interlocutor que responde distinto cada vez y no se cansa,
              para ensayar la llamada difícil veinte veces. La
              retroalimentación llega en el momento, no en la junta del
              viernes.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 3</span>
            <h3>El caso con datos incompletos</h3>
            <p>
              Como en la realidad: una cuenta con información a medias donde
              hay que decidir si se persigue, se descarta o se escala — y
              justificar por qué.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>PRÁCTICA 4</span>
            <h3>La grabación comentada</h3>
            <p>
              Llamadas o visitas reales (con permiso) analizadas dentro del
              curso, señalando el minuto exacto donde se ganó o se perdió la
              conversación.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LA MEDICIÓN</span>
        <h2 className={s.h2}>¿Cómo se sabe si la academia está funcionando?</h2>
        <p className={s.prose}>
          Con cuatro indicadores que tu empresa probablemente ya mide, leídos
          esta vez desde la formación:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Tiempo a la primera venta y a cuota</strong> — el
            indicador más limpio, porque separa bien lo que aporta la
            formación de lo que aporta el mercado.
          </li>
          <li>
            <strong>Rotación comercial del primer año</strong> — mucha gente
            no renuncia por el sueldo sino por la sensación de estar
            perdiendo, que casi siempre viene de haber salido a vender sin
            saber lo suficiente.
          </li>
          <li>
            <strong>Consistencia entre vendedores</strong> — qué tanto se
            parecen los resultados de la gente con el mismo tiempo y
            territorio. La dispersión enorme suele ser síntoma de formación
            improvisada.
          </li>
          <li>
            <strong>Calidad de lo vendido</strong> — cancelaciones,
            devoluciones y quejas tempranas. Un curso que solo entrena a
            cerrar sube este número; uno bien diseñado lo baja.
          </li>
        </ul>
        <p className={s.prose}>
          Cuál de los cuatro se elige como objetivo principal se define en el{" "}
          <a href="/deteccion-de-necesidades">diagnóstico</a>, antes de
          diseñar nada — porque el indicador que se quiere mover determina qué
          se practica en el curso.
        </p>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>06 · CÓMO SE CONSTRUYE</span>
        <h2 className={s.h2}>De tus mejores vendedores a la academia</h2>
        <p className={s.prose}>
          El material no lo inventamos: lo extraemos. Empezamos con sesiones
          con quienes mejor venden en tu empresa, enfocadas en lo que no está
          escrito en ningún lado — cómo deciden a quién perseguir, qué dicen
          exactamente cuando escuchan «está muy caro», qué señales les
          indican que una cuenta no va a cerrar. Ese conocimiento, que hoy es
          intuición de tres personas, es la materia prima de todo el
          proyecto.
        </p>
        <p className={s.prose}>
          A partir de ahí el proceso es el mismo con el que construimos
          cualquier{" "}
          <a href="/academias-corporativas">academia corporativa</a>:{" "}
          <a href="/diseno-instruccional-empresarial">diseño instruccional</a>,
          producción, montaje en{" "}
          <a href="/implementacion-de-lms">la plataforma</a> y lanzamiento. Si
          tu equipo comercial además recibe gente nueva de forma constante,
          conviene amarrarlo con{" "}
          <a href="/onboarding-empresarial">el onboarding empresarial</a>, para
          que el vendedor entre a un solo camino y no a dos programas
          paralelos.
        </p>
      </div>

      <Faq
        titulo="Preguntas frecuentes sobre academias de ventas"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Tus mejores vendedores ya saben cómo: falta ponerlo donde otros lo aprendan"
        texto="Cuéntanos cuántos vendedores son, qué venden y cuánto tardan hoy en llegar a cuota. Te devolvemos cómo se vería su academia y con qué módulo conviene empezar."
        waMensaje="Hola, quiero crear la academia de ventas de mi empresa."
      />
    </PageShell>
  );
}
