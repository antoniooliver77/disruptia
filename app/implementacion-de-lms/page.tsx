import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "Implementación de LMS para empresas",
  description:
    "Qué es un LMS, cómo elegir el correcto para tu empresa y cómo se implementa sin que termine vacío. Te ayudamos a decidir: no vendemos plataformas.",
  alternates: { canonical: "/implementacion-de-lms" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Implementación de LMS para empresas",
  serviceType: "Selección, configuración y puesta en marcha de plataforma de capacitación",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Asesoría para elegir plataforma de capacitación, configuración de rutas por puesto, carga de contenidos y estrategia de adopción.",
  url: "https://disruptia.org/implementacion-de-lms",
};

const FAQS = [
  {
    q: "¿Qué es un LMS?",
    a: "LMS son las siglas en inglés de Learning Management System, que en español se traduce como sistema de gestión del aprendizaje. Es la plataforma donde viven los cursos de una organización: administra usuarios, inscribe gente, entrega contenidos, registra avances y emite constancias. Es infraestructura, no contenido — la diferencia importa, porque un LMS vacío administra perfectamente el vacío.",
  },
  {
    q: "¿Ustedes venden alguna plataforma?",
    a: "No, y es deliberado: no tenemos convenio de comisión con ningún proveedor. Eso nos permite recomendarte la que le conviene a tu caso, incluso cuando la respuesta es «quédate con la que ya pagas» o «para tu tamaño no necesitas una todavía». Si vendiéramos plataformas, nuestra recomendación valdría bastante menos.",
  },
  {
    q: "¿Cuál es el mejor LMS del mercado?",
    a: "No existe esa respuesta, igual que no existe el mejor coche: depende de cuánta gente lo va a usar, si tienen correo corporativo o no, si necesitas emitir constancias oficiales, si hay que integrarlo con nómina y de cuánto equipo técnico dispones. Lo que sí existe es el mejor para tu caso, y se descubre con cinco preguntas — no con una comparativa de funciones donde todas las plataformas dicen tenerlo todo.",
  },
  {
    q: "¿Podemos usar el LMS que ya compramos?",
    a: "En la mayoría de los casos sí, y siempre lo revisamos antes de proponerte gastar en otro. Muchas plataformas subutilizadas no tienen un problema de herramienta sino de configuración y de contenido: rutas mal armadas, inscripciones manuales que nadie sostiene y cursos que no invitan a entrar. Cuando ese es el diagnóstico, cambiar de plataforma solo mueve el problema de lugar.",
  },
  {
    q: "¿Qué es SCORM y necesito preocuparme por eso?",
    a: "SCORM es un estándar que permite que un curso producido fuera de la plataforma se comunique con ella para reportar avance y calificaciones. Te importa por una razón muy práctica: si tus cursos están en SCORM, puedes cambiar de plataforma llevándotelos contigo; si están construidos dentro del editor propio de un proveedor, mudarte significa rehacerlos. Es la diferencia entre rentar y ser dueño de tu contenido.",
  },
  {
    q: "¿Cuánto tarda implementar una plataforma?",
    a: "La instalación técnica es cuestión de días. Lo que toma semanas es lo demás: definir las rutas por puesto, cargar y probar los contenidos, configurar reportes que alguien pueda leer, y preparar el lanzamiento para que la gente entre. Cuando escuches «lo montamos en una tarde», están hablando solo de la primera parte — que es la más fácil y la menos determinante.",
  },
];

export default function LmsPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/implementacion-de-lms", label: "Implementación de LMS" },
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
        <span className={s.kicker}>EMPRESAS · PLATAFORMA</span>
        <h1 className={`${s.title} aparece`}>
          Implementación de LMS: la plataforma es el edificio, no la escuela
        </h1>
        <p className={s.lede}>
          Un LMS —sistema de gestión del aprendizaje, por sus siglas en
          inglés— es el software donde viven los cursos de una empresa:
          inscribe gente, entrega contenidos, registra avances y emite
          constancias. Es una herramienta excelente y absolutamente necesaria
          cuando hay algo que administrar. El problema empieza cuando se
          compra esperando que resuelva la capacitación por sí sola, porque
          eso es como comprar un edificio esperando que dé clases.
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
        <h2 className={s.h2}>¿Qué es un LMS y qué hace exactamente?</h2>
        <p className={s.respuesta}>
          Un LMS (Learning Management System, o sistema de gestión del
          aprendizaje) es la plataforma donde una organización aloja y
          administra sus cursos en línea. Sus funciones principales son cuatro:
          dar de alta y organizar a los usuarios, entregarles los contenidos
          que les corresponden, registrar quién avanzó y con qué resultado, y
          emitir las constancias o reportes que la empresa necesita. Todo eso
          lo hace muy bien — pero ninguna de esas funciones incluye crear el
          contenido, que es lo que la gente realmente va a tomar.
        </p>
        <p className={s.prose}>
          La confusión es comprensible, porque los proveedores venden la
          plataforma como si fuera la solución completa, y en la demostración
          siempre se ve llena de cursos hermosos. Esos cursos son ejemplos:
          el día que firmas, lo que llega es la plataforma vacía. Por eso
          insistimos tanto en la distinción, aunque suene obvia escrita: el
          LMS es contenedor, y el contenido lo pones tú o alguien por ti.
        </p>
        <p className={s.prose}>
          Hay una segunda familia de plataformas que conviene conocer, porque
          suele aparecer en las comparativas: las llamadas LXP (plataformas de
          experiencia de aprendizaje), que en lugar de asignar cursos
          obligatorios recomiendan contenidos según intereses, al estilo de un
          servicio de streaming. Funcionan bien para desarrollo profesional
          voluntario y bastante mal para formación crítica, donde alguien
          tiene que garantizar que toda la gente de un puesto sepa lo mismo.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · LA PREGUNTA REAL</span>
        <h2 className={s.h2}>¿Necesitas un LMS o necesitas cursos?</h2>
        <p className={s.prose}>
          Es la primera pregunta que hacemos, y a veces la respuesta ahorra
          una compra completa. Un LMS empieza a justificarse cuando aparecen
          estas señales — y no antes:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>SEÑAL 1</span>
            <h3>Ya no puedes seguirle la pista a mano</h3>
            <p>
              Cuando saber quién tomó qué curso implica revisar hojas de
              cálculo, correos y listas de asistencia, la plataforma deja de
              ser un lujo y se vuelve ahorro de horas administrativas.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>SEÑAL 2</span>
            <h3>La gente entra y sale constantemente</h3>
            <p>
              Con rotación o crecimiento, alguien tiene que capacitar a cada
              nuevo ingreso sin que un humano agende nada. Esa automatización
              es de lo que más rinde de un LMS.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>SEÑAL 3</span>
            <h3>Necesitas comprobar el cumplimiento</h3>
            <p>
              Si una auditoría o una norma te exige demostrar quién se
              capacitó y cuándo, tener el registro automático te ahorra la
              carrera anual de juntar evidencias.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>SEÑAL 4</span>
            <h3>Tienes varias sedes o turnos</h3>
            <p>
              Cuando la gente no coincide en el mismo lugar ni a la misma
              hora, la plataforma es lo único que garantiza que todos reciban
              la misma formación.
            </p>
          </article>
        </div>
        <p className={s.prose}>
          Si ninguna de esas cuatro señales aparece todavía, nuestra
          recomendación honesta suele ser empezar por los cursos y posponer la
          plataforma. Es una conversación que hemos tenido varias veces y
          nunca nos ha costado un cliente: cuando alguien te dice que no
          compres, tiende a creerse lo demás que dice.
        </p>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · LA ELECCIÓN</span>
        <h2 className={s.h2}>¿Cómo elegir la plataforma correcta?</h2>
        <p className={s.prose}>
          Las comparativas de funciones no sirven, porque a estas alturas
          todas las plataformas ofrecen prácticamente lo mismo en el papel. Lo
          que decide es el encaje con tu operación, y eso se resuelve con
          estas cinco preguntas:
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>¿Cómo entra tu gente?</strong>
            Si tu personal operativo no tiene correo corporativo, la mitad de
            las plataformas del mercado quedan descartadas de entrada — y ese
            solo dato ahorra semanas de demostraciones inútiles.
          </li>
          <li>
            <strong>¿Desde qué dispositivo?</strong>
            Si el curso se va a tomar desde el celular en el piso de
            producción, entre turnos y con mala señal, la plataforma tiene que
            funcionar ahí. Muchas se ven espléndidas en laptop y son
            inservibles en un teléfono de gama media.
          </li>
          <li>
            <strong>¿Quién la va a administrar?</strong>
            Toda plataforma necesita a alguien que dé altas, revise reportes y
            resuelva contraseñas. Si ese alguien no existe todavía, conviene
            elegir la más simple aunque tenga menos funciones.
          </li>
          <li>
            <strong>¿Con qué se tiene que conectar?</strong>
            Nómina, control de asistencia, el sistema de recursos humanos. Las
            integraciones son la parte cara y la que más se subestima al
            cotizar.
          </li>
          <li>
            <strong>¿Cuánto crece el costo si funciona?</strong>
            Casi todas cobran por usuario activo, así que el éxito del
            proyecto encarece la renta. Vale la pena simular el costo con el
            triple de gente antes de firmar.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Ya tienes plataforma y sigue medio vacía? Eso casi nunca se arregla cambiándola." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LAS OPCIONES</span>
        <h2 className={s.h2}>Los tres caminos, con su costo oculto</h2>
        <p className={s.prose}>
          Simplificando bastante, todas las opciones del mercado caben en tres
          familias. Ninguna es mejor en abstracto; cada una tiene un costo que
          no aparece en la cotización:
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
                <td>Plataforma libre (Moodle y similares)</td>
                <td>Presupuesto contenido y alguien con perfil técnico
                disponible</td>
                <td>El mantenimiento: actualizaciones, respaldos y soporte
                recaen en tu equipo, y ese equipo casi nunca existe cuando se
                toma la decisión</td>
              </tr>
              <tr>
                <td>Plataforma comercial por suscripción</td>
                <td>Arranque rápido, soporte incluido y sin equipo técnico
                propio</td>
                <td>La renta crece con tu éxito, y tus cursos viven en casa
                ajena — salir de ahí puede significar rehacerlos</td>
              </tr>
              <tr>
                <td>Desarrollo a la medida</td>
                <td>Un modelo de formación que ninguna plataforma soporta, o
                escala muy grande</td>
                <td>El más caro de mantener a lo largo del tiempo; solo se
                justifica cuando el volumen o la diferenciación lo pagan</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={s.prose}>
          Para la mayoría de las empresas medianas mexicanas con las que
          trabajamos, la respuesta correcta ha sido la segunda opción —
          empezando por el plan más chico, que casi siempre alcanza para el
          primer año.
        </p>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · LA IMPLEMENTACIÓN</span>
        <h2 className={s.h2}>¿Qué incluye montar la plataforma de verdad?</h2>
        <p className={s.prose}>
          Instalar el software es lo rápido. Lo que hace que la gente entre —
          que es el objetivo — son estas seis piezas:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>Las rutas por puesto</strong> — que cada persona vea lo
            suyo al entrar, sin buscar en un catálogo de cuarenta cursos
            donde solo tres le corresponden.
          </li>
          <li>
            <strong>Las inscripciones automáticas</strong> — cuando alguien
            entra a la empresa o cambia de puesto, su formación se le asigna
            sola. Si alguien tiene que hacerlo a mano cada semana, dejará de
            hacerlo en el mes tres.
          </li>
          <li>
            <strong>Los contenidos cargados y probados</strong> — no solo
            subidos: probados en los dispositivos reales de tu gente, que es
            donde aparecen los problemas.
          </li>
          <li>
            <strong>Los reportes que alguien lea</strong> — dos o tres
            tableros útiles para recursos humanos y para los jefes, en lugar
            de un módulo de reportería con cuarenta opciones que nadie abre.
          </li>
          <li>
            <strong>Las constancias</strong> — con el formato que tu empresa
            necesita, incluidas las de cumplimiento normativo si aplican.
          </li>
          <li>
            <strong>El lanzamiento</strong> — la parte que más se olvida: la
            plataforma no se anuncia con un correo, se lanza como producto
            interno, empezando por los jefes.
          </li>
        </ul>
        <p className={s.prose}>
          Todo esto forma parte del cuarto paso del proceso con el que
          construimos una{" "}
          <a href="/academias-corporativas">academia corporativa</a> completa.
          Si aún no tienes claro qué cursos van a vivir ahí, conviene empezar
          por la{" "}
          <a href="/deteccion-de-necesidades">detección de necesidades</a> —
          elegir plataforma antes de saber qué se va a enseñar es el orden
          exacto que produce plataformas vacías.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>06 · LOS ERRORES</span>
        <h2 className={s.h2}>Por qué las plataformas terminan vacías</h2>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 1</span>
            <h3>Comprar primero, pensar después</h3>
            <p>
              Se firma el contrato en diciembre porque hay presupuesto y en
              marzo alguien pregunta qué cursos vamos a poner. El orden
              correcto empieza por el contenido.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 2</span>
            <h3>Llenarla con lo que había</h3>
            <p>
              Los PDF de inducción y las presentaciones de la última
              convención no se vuelven curso por estar en línea; se vuelven la
              prueba de que ahí no hay nada que valga la pena abrir.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 3</span>
            <h3>Elegir por lista de funciones</h3>
            <p>
              Se compara en una tabla enorme y gana la que más palomitas
              tiene. Ninguna de esas funciones importa si tu gente no puede
              entrar desde su celular.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 4</span>
            <h3>Lanzarla sin los jefes adentro</h3>
            <p>
              Si el jefe directo no sabe qué está tomando su gente ni lo
              menciona nunca, el mensaje que recibe el equipo es claro: esto
              no cuenta.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>07 · NUESTRO PAPEL</span>
        <h2 className={s.h2}>¿Qué hacemos exactamente en este tema?</h2>
        <p className={s.prose}>
          Te acompañamos a decidir y dejamos la plataforma operando, pero la
          licencia la contratas tú directamente con el proveedor: preferimos
          que la relación comercial sea tuya, para que puedas cambiar de
          proveedor —o de nosotros— sin quedar atrapado en medio. En concreto,
          hacemos el diagnóstico de requisitos, la comparación honesta de
          opciones, la configuración completa, la carga y prueba de
          contenidos, la capacitación de quien la va a administrar y el
          acompañamiento durante el lanzamiento.
        </p>
        <p className={s.prose}>
          Y si al revisar tu caso resulta que la plataforma que ya tienes
          sirve perfectamente, te lo decimos y trabajamos sobre ella. Nos ha
          pasado varias veces y es, francamente, la conversación más fácil de
          tener.
        </p>
      </section>

      <Faq
        titulo="Preguntas frecuentes sobre implementación de LMS"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="No vendemos plataformas — por eso podemos decirte cuál te conviene"
        texto="Cuéntanos cuánta gente es, desde dónde se conectarían y si ya tienes una plataforma. Te decimos qué opción tiene sentido para tu caso, aunque la respuesta sea que todavía no necesitas una."
        waMensaje="Hola, quiero asesoría para elegir o implementar el LMS de mi empresa."
      />
    </PageShell>
  );
}
