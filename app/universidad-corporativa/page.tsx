import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Cómo crear una universidad corporativa en tu empresa",
  description:
    "Qué es una universidad corporativa, cómo se estructura y cómo se construye por fases. Creamos la tuya: cursos en línea, rutas de carrera y plataforma.",
  alternates: { canonical: "/universidad-corporativa" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creación de universidades corporativas",
  serviceType: "Diseño y construcción de universidad corporativa",
  provider: { "@type": "Organization", name: "DisruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Estructura de escuelas internas, rutas de carrera, producción de cursos en línea y plataforma para la universidad corporativa de tu empresa.",
  url: "https://disruptia.org/universidad-corporativa",
};

const FAQS = [
  {
    q: "¿Qué es una universidad corporativa?",
    a: "Es la estructura de formación completa de una empresa, organizada como una universidad: varias escuelas o academias internas (ventas, operaciones, liderazgo), rutas de aprendizaje ligadas al plan de carrera y certificación interna. A diferencia de un área de capacitación que reacciona a pedidos, la universidad corporativa tiene currículo propio y forma para el puesto que la persona va a ocupar, no solo para el que ocupa hoy.",
  },
  {
    q: "¿Cuál es la diferencia entre universidad corporativa y área de capacitación?",
    a: "El área de capacitación resuelve pedidos: alguien solicita un curso y se consigue. La universidad corporativa opera al revés: parte del mapa de capacidades que el negocio necesita en dos años y construye la formación para llegar ahí. Una es reactiva y se mide en cursos impartidos; la otra es estratégica y se mide en gente lista para el siguiente puesto.",
  },
  {
    q: "¿Se necesita ser una empresa grande para tener una universidad corporativa?",
    a: "No, pero sí se necesita repetición: varios puestos con la misma curva de aprendizaje, crecimiento o rotación que obliga a formar constantemente. Hemos visto universidades corporativas útiles en empresas de 200 personas y áreas de capacitación desperdiciadas en empresas de 5,000. Lo que decide no es el tamaño, es cuánto conocimiento crítico vive solo en la cabeza de unas cuantas personas.",
  },
  {
    q: "¿Cuánto tiempo toma montar una universidad corporativa?",
    a: "La estructura completa toma meses, pero no se lanza completa: se lanza por escuelas. La primera escuela —la del dolor más urgente— puede estar operando en semanas, y es la que financia y justifica las siguientes. Cualquiera que te prometa una universidad corporativa entera en un trimestre está vendiendo un catálogo, no una universidad.",
  },
  {
    q: "¿Quién dirige la universidad corporativa?",
    a: "Idealmente un dueño operativo dentro de recursos humanos o desarrollo de talento, con un sponsor en dirección general y un consejo académico interno formado por los líderes de cada área. Los expertos internos prestan conocimiento por horas; nosotros ponemos el diseño instruccional y la producción para que ese conocimiento se vuelva curso sin robarles la semana.",
  },
  {
    q: "¿Ustedes imparten las clases de la universidad corporativa?",
    a: "No. Diseñamos y producimos los cursos en línea y dejamos la estructura funcionando en tu plataforma; tu equipo la opera. Nuestro entregable incluye el método documentado para que tu gente produzca las siguientes escuelas sin depender de nosotros.",
  },
];

export default function UniversidadCorporativaPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/universidad-corporativa", label: "Universidad corporativa" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/plan-carrera.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · UNIVERSIDAD CORPORATIVA</span>
        <h1 className={`${s.title} aparece`}>
          Cómo crear una universidad corporativa que la gente sí curse
        </h1>
        <p className={s.lede}>
          Llega un punto en el que tu empresa ya no necesita cursos: necesita
          una estructura. Escuelas internas, rutas por puesto, gente que se
          prepara para el cargo que va a ocupar y no solo para el que tiene.
          Eso es una universidad corporativa — y se construye por partes, no
          por decreto.
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
        <h2 className={s.h2}>¿Qué es una universidad corporativa?</h2>
        <p className={s.respuesta}>
          Una universidad corporativa es la estructura de formación completa
          de una empresa, organizada como una universidad: varias escuelas o
          academias internas —ventas, operaciones, liderazgo, cumplimiento—
          con currículo propio, rutas de aprendizaje ligadas al plan de
          carrera y certificación interna. No es un catálogo de cursos con
          nombre bonito: es el sistema que decide qué debe saber cada persona
          para el puesto que viene, y lo enseña antes de que lo necesite.
        </p>
        <p className={s.prose}>
          El nombre asusta más de lo que debería. Ninguna empresa sensata
          arranca fundando facultades: arranca con una academia que resuelve
          un dolor concreto, la hace funcionar, y descubre que el modelo se
          puede repetir para la siguiente área. Cuando tienes tres o cuatro
          academias operando bajo el mismo método y la misma plataforma, ya
          tienes una universidad corporativa, aunque todavía no la llames
          así.
        </p>
        <p className={s.prose}>
          La diferencia real con la capacitación tradicional no está en el
          volumen de cursos, sino en la dirección de la pregunta. La
          capacitación tradicional pregunta "¿qué curso necesitan?"; la
          universidad corporativa pregunta "¿qué tiene que saber hacer esta
          empresa dentro de dos años, y quién lo va a saber hacer?". Es la
          diferencia entre apagar incendios y construir el edificio con
          material que no arde.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · LA ESTRUCTURA</span>
        <h2 className={s.h2}>¿Cómo se estructura una universidad corporativa?</h2>
        <p className={s.prose}>
          Con cuatro capas. Puedes usarlas como checklist para saber qué
          tienes ya y qué te falta — casi siempre existen las dos primeras y
          faltan las dos que sostienen todo lo demás.
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>CAPA 1</span>
            <h3>Las escuelas</h3>
            <p>
              Cada gran función tiene la suya: escuela comercial, de
              operaciones, de liderazgo, de cumplimiento. Cada escuela agrupa
              los cursos de su oficio y tiene un dueño que responde por ella.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAPA 2</span>
            <h3>Las rutas por puesto</h3>
            <p>
              No un catálogo alfabético: una secuencia. Qué toma un vendedor
              nuevo la primera semana, qué el primer trimestre, qué cuando
              aspira a coordinador. La ruta convierte cursos sueltos en
              carrera.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAPA 3</span>
            <h3>La certificación interna</h3>
            <p>
              El sello de que alguien ya puede operar solo, respaldado por
              evidencia de desempeño. Es lo que le da valor a la ruta: sin
              certificación, la formación es opcional en los hechos.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CAPA 4</span>
            <h3>El gobierno académico</h3>
            <p>
              Quién decide qué entra al currículo, quién aprueba contenidos y
              cada cuándo se revisan. Sin esta capa, la universidad se
              convierte en un archivo de cursos que envejecen en silencio.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · LA COMPARACIÓN</span>
        <h2 className={s.h2}>
          ¿Universidad corporativa o área de capacitación?
        </h2>
        <p className={s.prose}>
          Las dos son legítimas y muchas empresas necesitan la segunda antes
          que la primera. Lo caro es creer que tienes una cuando tienes la
          otra:
        </p>
        <div className={s.tablaWrap}>
          <table className={s.tabla}>
            <thead>
              <tr>
                <th>Criterio</th>
                <th>Área de capacitación</th>
                <th>Universidad corporativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Punto de partida</td>
                <td>Pedidos de las áreas</td>
                <td>Capacidades que el negocio necesitará</td>
              </tr>
              <tr>
                <td>Unidad de trabajo</td>
                <td>El curso</td>
                <td>La ruta de carrera</td>
              </tr>
              <tr>
                <td>Se mide por</td>
                <td>Cursos impartidos y asistencia</td>
                <td>Gente certificada y lista para el siguiente puesto</td>
              </tr>
              <tr>
                <td>Relación con el negocio</td>
                <td>Proveedor interno</td>
                <td>Socio de la estrategia de talento</td>
              </tr>
              <tr>
                <td>Qué pasa si el dueño se va</td>
                <td>Se detiene</td>
                <td>Sigue: el método está documentado</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={s.prose}>
          Si al leer la columna derecha pensaste "eso es lo que dirección nos
          está pidiendo y no sabemos cómo empezar", estás exactamente en el
          momento correcto para hablar con nosotros.
        </p>
      </section>

      <CtaInline texto="¿Ya sabes cuál sería tu primera escuela interna? Ese es el punto de partida." />

      <section className={s.bloque}>
        <span className={s.bloqueNum}>04 · EL PROCESO</span>
        <h2 className={s.h2}>¿Cómo se construye, por fases?</h2>
        <p className={s.prose}>
          Nadie funda una universidad completa el día uno. Este es el orden
          que sí funciona, y cada fase deja algo operando antes de pasar a la
          siguiente:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Mapa de capacidades</strong>
            Qué necesita saber hacer la empresa para cumplir su plan, y qué
            tan lejos está de eso hoy. Sale el orden de las escuelas y el
            argumento de negocio para el presupuesto.
          </li>
          <li>
            <strong>La primera escuela</strong>
            La del dolor más caro. Se diseña, se produce y se lanza completa
            —con ruta, cursos y certificación— para probar el modelo con
            gente real.
          </li>
          <li>
            <strong>El sistema replicable</strong>
            Con la primera escuela funcionando, se documentan plantillas,
            criterios y flujo de producción. Aquí la universidad deja de
            depender de un proveedor.
          </li>
          <li>
            <strong>Escuelas 2 y 3</strong>
            Salen más rápido y más baratas porque el método ya existe. Tu
            equipo participa en la producción; nosotros dirigimos.
          </li>
          <li>
            <strong>Gobierno y continuidad</strong>
            Consejo académico, calendario de revisión de contenidos e
            indicadores. La universidad queda viva sin nosotros.
          </li>
        </ol>
      </section>

      <div className={`${s.bandaHueso}`}>
        <span className={s.bloqueNum}>05 · LAS RUTAS</span>
        <h2 className={s.h2}>¿Qué hace que una ruta de carrera funcione?</h2>
        <p className={s.prose}>
          La ruta es el corazón de la universidad corporativa y donde más
          proyectos se equivocan. Una ruta que funciona cumple cuatro
          condiciones, y todas son incómodas de sostener:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>CONDICIÓN 1</span>
            <h3>Está amarrada a un puesto real</h3>
            <p>
              No a un tema de moda. Si la ruta no aparece en la conversación
              de promoción, nadie la toma en serio — y hacen bien.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CONDICIÓN 2</span>
            <h3>Tiene consecuencia</h3>
            <p>
              Certificarse abre algo: un tipo de cuenta, un turno, un
              permiso, una candidatura. Sin consecuencia, la ruta es un
              pasatiempo con logo de la empresa.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CONDICIÓN 3</span>
            <h3>Cabe en la jornada</h3>
            <p>
              Diseñada para el tiempo que la gente tiene de verdad, no para
              el que dirección imagina que tiene. Cápsulas cortas ganan
              siempre.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>CONDICIÓN 4</span>
            <h3>El jefe directo la conoce</h3>
            <p>
              La transferencia ocurre o muere en la operación. Un jefe que no
              sabe qué está aprendiendo su gente cancela en una semana lo que
              la ruta construyó en un mes.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>06 · LOS ERRORES</span>
        <h2 className={s.h2}>Los errores que hunden una universidad corporativa</h2>
        <p className={s.prose}>
          Son distintos de los errores de una academia suelta, porque aquí lo
          que falla es la ambición mal administrada:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 1</span>
            <h3>Anunciarla antes de tener nada</h3>
            <p>
              El lanzamiento con nombre, logo y correo masivo — y adentro
              cuatro cursos viejos. La credibilidad interna se gasta una sola
              vez.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 2</span>
            <h3>Copiar el modelo de otra empresa</h3>
            <p>
              La universidad de un banco no le sirve a una manufacturera. Lo
              que se copia es el método, jamás el currículo.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 3</span>
            <h3>Dejarla sin dueño operativo</h3>
            <p>
              Un comité no opera nada. Sin una persona que responda por ella
              todos los lunes, la universidad se vuelve un tema de junta
              trimestral.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 4</span>
            <h3>Confundirla con un LMS caro</h3>
            <p>
              Comprar la plataforma más completa del mercado no funda una
              universidad. Sigue faltando lo único que importa: el currículo.
            </p>
          </article>
        </div>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>07 · LA PRUEBA</span>
        <h2 className={s.h2}>Una academia corporativa que sí fue rentable</h2>
        <figure className={s.cita}>
          <blockquote>
            &ldquo;Oliver excedió por mucho nuestras expectativas. Nuestra
            academia ha sido un éxito tanto económico como educativo, gracias
            a su gran labor pedagógica.&rdquo;
          </blockquote>
          <figcaption>Nova Academy — academia corporativa</figcaption>
        </figure>
        <p className={s.prose}>
          Ese es exactamente el punto de partida de una universidad
          corporativa: una primera escuela que funciona tan bien que la
          empresa quiere la segunda.{" "}
          <a href="/casos">Lee el caso completo</a>,{" "}
          <a href="/metodo">conoce el método de los 3 actos</a> o revisa cómo
          construimos{" "}
          <a href="/onboarding-empresarial">el onboarding empresarial</a> y{" "}
          <a href="/capacitacion-con-inteligencia-artificial">
            la capacitación con inteligencia artificial
          </a>
          .
        </p>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>08 · EL COSTO</span>
        <h2 className={s.h2}>¿Cuánto cuesta una universidad corporativa?</h2>
        <p className={s.prose}>
          Se cotiza por escuela, no por universidad. Es la única forma
          honesta: nadie puede ponerle precio a un sistema completo antes de
          saber cuántas escuelas, cuántos cursos y sobre qué plataforma. La
          primera escuela lleva el costo del método —se construye desde
          cero—; las siguientes bajan de precio porque reutilizan plantillas,
          criterios y flujo de producción.
        </p>
        <p className={s.prose}>
          Ese descuento no es un gancho comercial: es la consecuencia natural
          de dejarte el método documentado. Nuestro negocio es que tu
          universidad crezca, no que dependas de nosotros para cada curso
          nuevo.
        </p>
        <p className={s.prose}>
          Vale la pena decir también lo que no cuesta: la plataforma no la
          vendemos nosotros, así que no hay comisión escondida en la
          recomendación. Si tu empresa ya paga un LMS que sirve, construimos
          ahí y te ahorras esa línea completa del presupuesto.
        </p>
      </section>

      <Faq
        titulo="Preguntas frecuentes sobre universidades corporativas"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Empieza por una escuela, no por el edificio"
        texto="Cuéntanos qué función te urge profesionalizar primero. Te devolvemos la estructura de esa escuela, su ruta y qué tendrías operando en el primer trimestre."
        waMensaje="Hola, quiero crear la universidad corporativa de mi empresa y me gustaría platicarlo."
      />
    </PageShell>
  );
}
