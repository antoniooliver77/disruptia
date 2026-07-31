import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { Faq } from "../components/Faq";
import { CtaBanda } from "../components/CtaBanda";
import { CtaInline } from "../components/CtaInline";
import s from "../silo.module.css";

export const metadata: Metadata = {
  title: "DNC: detección de necesidades de capacitación",
  description:
    "Cómo hacer una DNC que sirva: detectar qué necesita aprender tu gente de verdad, con evidencia de la operación y no con una encuesta de deseos.",
  alternates: { canonical: "/deteccion-de-necesidades" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Detección de necesidades de capacitación (DNC)",
  serviceType: "Diagnóstico de brechas de competencias y plan de capacitación",
  provider: { "@type": "Organization", name: "DIsruptIA", url: "https://disruptia.org" },
  areaServed: "MX",
  description:
    "Diagnóstico de necesidades de capacitación basado en evidencia de la operación: qué puestos, qué brechas y qué le cuestan hoy a la empresa.",
  url: "https://disruptia.org/deteccion-de-necesidades",
};

const FAQS = [
  {
    q: "¿Qué es una DNC o detección de necesidades de capacitación?",
    a: "Es el diagnóstico que hace una empresa para saber qué necesita aprender su gente y en qué orden. Bien hecha, no pregunta qué cursos quiere cada quien: compara lo que cada puesto debería saber hacer contra lo que hoy hace, y ordena esa lista por lo que le cuesta más caro a la operación. El resultado no es un listado de temas, sino un plan con prioridades y una razón de negocio detrás de cada una.",
  },
  {
    q: "¿Sirve la encuesta de «qué cursos te gustaría tomar»?",
    a: "Sirve para medir interés, que es un dato valioso para la adopción, pero no basta para decidir el presupuesto. La gente pide lo que conoce y lo que le suena atractivo, no necesariamente lo que la operación necesita — y como nadie levanta la mano para pedir un curso sobre aquello en lo que falla, las brechas más caras suelen ser justo las que no aparecen en la encuesta. Nosotros la usamos como una fuente entre varias, nunca como la única.",
  },
  {
    q: "¿Cuánto tiempo toma hacer una DNC?",
    a: "Entre dos y cuatro semanas para una operación de tamaño medio, dependiendo de cuántos puestos entren y de qué tan disponibles estén los jefes de área para las entrevistas. Si alguien te ofrece una DNC completa en tres días, lo que te va a entregar es la encuesta contestada — que no es lo mismo, aunque se le parezca en el PDF.",
  },
  {
    q: "¿Qué nos entregan al final?",
    a: "Un mapa de formación priorizado: qué puestos necesitan qué, en qué orden conviene atacarlo, qué se resuelve con curso y qué no, y cuál es el indicador de operación que debería moverse en cada caso. Con eso puedes decidir el presupuesto del año, y también defenderlo frente a dirección con números en lugar de intuiciones.",
  },
  {
    q: "¿Y si el problema no se resuelve con capacitación?",
    a: "Te lo decimos, aunque nos deje sin proyecto. Buena parte de lo que llega disfrazado de necesidad de capacitación es en realidad un proceso mal diseñado, una herramienta que no funciona o un incentivo que premia justo lo contrario de lo que se pide — y ningún curso arregla eso. Un diagnóstico honesto también sirve para no gastar en formación lo que se arregla con una decisión.",
  },
  {
    q: "¿Hacen la DNC aunque no construyamos la academia con ustedes?",
    a: "Sí. El diagnóstico se entrega completo y es tuyo: puedes ejecutarlo con tu equipo interno, con otro proveedor o con nosotros. Preferimos que la primera conversación sea sobre qué te conviene y no sobre qué nos conviene, entre otras cosas porque un mapa mal hecho arruina cualquier academia que venga después — incluida la nuestra.",
  },
];

export default function DncPage() {
  return (
    <PageShell
      migas={[
        { href: "/academias-corporativas", label: "Academias corporativas" },
        { href: "/deteccion-de-necesidades", label: "Detección de necesidades" },
      ]}
      ctaMovil
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <header
        className={`${s.head} ${s.headFoto}`}
        style={{ "--foto": "url(/fotos/diagnostico-piso.jpg)" } as React.CSSProperties}
      >
        <span className={s.kicker}>EMPRESAS · DIAGNÓSTICO</span>
        <h1 className={`${s.title} aparece`}>
          DNC: saber qué necesita aprender tu gente antes de gastar en cursos
        </h1>
        <p className={s.lede}>
          Cada año se repite la misma escena en miles de empresas: recursos
          humanos manda una encuesta preguntando qué cursos le gustarían a
          cada quien, junta las respuestas en una tabla y con eso arma el
          plan anual. El presupuesto se ejerce, los cursos se imparten y en
          diciembre nadie sabe decir qué cambió. Una detección de necesidades
          de capacitación —DNC, para los amigos— sirve justo para lo
          contrario: para saber, con evidencia, qué le está costando dinero a
          tu operación y qué parte de eso sí se arregla enseñando.
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
        <h2 className={s.h2}>¿Qué es la detección de necesidades de capacitación?</h2>
        <p className={s.respuesta}>
          La detección de necesidades de capacitación es el diagnóstico con el
          que una empresa averigua qué debe aprender su gente y en qué orden
          conviene enseñárselo. Compara dos cosas: lo que cada puesto debería
          saber hacer para que la operación funcione, y lo que efectivamente
          hace hoy. Esa distancia entre el deber y el hacer se llama brecha, y
          el trabajo de la DNC consiste en encontrarla, medirla y ordenarla
          por lo que le cuesta a la empresa.
        </p>
        <p className={s.prose}>
          Conviene aclarar algo desde el principio, porque es donde más se
          confunde el término: una DNC no es una encuesta. La encuesta puede
          ser una de sus fuentes, y de hecho suele serlo, pero preguntarle a
          la gente qué le gustaría aprender mide interés, no necesidad. Son
          cosas distintas y ambas importan — el interés predice quién va a
          terminar el curso, mientras que la necesidad predice qué pasa con la
          operación si nadie lo toma.
        </p>
        <p className={s.prose}>
          En español la sigla se usa tanto que a veces se olvida qué significa
          cada letra, así que vale la pena decirlo completo: <strong>D</strong>etección
          de <strong>N</strong>ecesidades de <strong>C</strong>apacitación.
          Y ya que estamos, otra aclaración útil: la DNC no es un requisito
          burocrático inventado para llenar un formato de la Secretaría del
          Trabajo, aunque muchas empresas la vivan así. Es la herramienta que
          decide en qué se gasta el presupuesto de formación de todo un año.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>02 · POR QUÉ IMPORTA</span>
        <h2 className={s.h2}>¿Qué pasa cuando se capacita sin diagnóstico?</h2>
        <p className={s.prose}>
          No pasa nada dramático, y ese es exactamente el problema: pasa algo
          caro y silencioso, que nadie detecta hasta que alguien de finanzas
          pregunta para qué sirvió el gasto. Estos son los cuatro síntomas
          que vemos una y otra vez:
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>SÍNTOMA 1</span>
            <h3>Cursos que nadie pidió y todos aprueban</h3>
            <p>
              Se contrata el catálogo del proveedor de siempre, la gente
              asiste porque es obligatorio y todos pasan el examen. La
              operación, mientras tanto, sigue exactamente igual que antes
              del curso.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>SÍNTOMA 2</span>
            <h3>El área que grita se lleva el presupuesto</h3>
            <p>
              Sin diagnóstico, el dinero va a donde hay un director insistente
              y no a donde hay una brecha cara — que muchas veces está en un
              área silenciosa que ya se acostumbró a resolverlo mal.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>SÍNTOMA 3</span>
            <h3>Se enseña lo que ya saben</h3>
            <p>
              Es el desperdicio más común y el más desmoralizante: gente con
              años de oficio sentada en un curso introductorio, perdiendo un
              día de trabajo y confirmando que la capacitación de esta empresa
              no va en serio.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>SÍNTOMA 4</span>
            <h3>Se capacita lo que no era capacitación</h3>
            <p>
              El clásico: se dan tres cursos de servicio al cliente cuando el
              problema real es que el sistema tarda cuarenta segundos en
              cargar una cuenta. Ningún curso arregla una herramienta lenta.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>03 · EL MÉTODO</span>
        <h2 className={s.h2}>¿Cómo se hace una DNC que sí sirve?</h2>
        <p className={s.prose}>
          Con cinco pasos, y ninguno de ellos consiste en mandar un formulario
          masivo. La lógica es sencilla: primero se define qué debería pasar,
          después se mira qué pasa de verdad, y al final se ordena la
          diferencia por dinero.
        </p>
        <ol className={s.pasos}>
          <li>
            <strong>Qué necesita el negocio</strong>
            Antes de hablar de cursos, hablamos con dirección: qué metas
            tiene la empresa este año, qué la está frenando y qué duele lo
            suficiente como para pagar por arreglarlo. Sin esta conversación,
            todo lo demás es opinión.
          </li>
          <li>
            <strong>Qué debería saber cada puesto</strong>
            Se construye el perfil real de cada puesto crítico: qué decisiones
            toma, qué errores puede cometer y cuánto cuesta cada uno. Este
            paso se hace con los jefes directos, que son quienes saben dónde
            se rompe la cadena.
          </li>
          <li>
            <strong>Qué pasa hoy en la operación</strong>
            Aquí se sale de la oficina. Observamos el trabajo real, revisamos
            los indicadores que ya existen —errores, retrabajos, quejas,
            rotación, tiempos— y escuchamos a quien opera. Los datos duros
            evitan que el diagnóstico sea una colección de anécdotas.
          </li>
          <li>
            <strong>Separar lo que es capacitación de lo que no</strong>
            Una brecha puede venir de que la gente no sabe, no puede o no
            quiere, y solo la primera se resuelve enseñando. Este filtro
            —incómodo, porque a veces señala al proceso o al liderazgo— es lo
            que evita gastar en cursos que estaban condenados desde el
            principio.
          </li>
          <li>
            <strong>Priorizar y entregar el mapa</strong>
            Lo que queda se ordena por impacto y urgencia, y se convierte en
            un plan con secuencia: qué se ataca primero, con qué formato, y
            qué indicador debería moverse cuando funcione.
          </li>
        </ol>
      </section>

      <CtaInline texto="¿Quieres saber qué está costando hoy una brecha en tu operación? Empecemos por ahí." />

      <div className={s.bandaHueso}>
        <span className={s.bloqueNum}>04 · LAS FUENTES</span>
        <h2 className={s.h2}>¿De dónde sale la información de una buena DNC?</h2>
        <p className={s.prose}>
          De cinco lugares distintos, y la gracia está en cruzarlos: cuando
          una brecha aparece en tres fuentes independientes, deja de ser una
          sospecha y se vuelve un hecho con el que se puede tomar una
          decisión de presupuesto.
        </p>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>FUENTE 1</span>
            <h3>Los indicadores que ya tienes</h3>
            <p>
              Rotación, mermas, retrabajos, quejas de clientes, incidentes de
              seguridad, tiempos de ciclo. Tu empresa ya está midiendo dónde
              le duele; casi nadie lee esos números pensando en formación.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>FUENTE 2</span>
            <h3>Los jefes directos</h3>
            <p>
              Son quienes ven fallar a su gente todos los días y quienes
              cargan con el costo de corregirlo. Entrevistarlos bien es la
              fuente más rica y la que más se salta por falta de tiempo.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>FUENTE 3</span>
            <h3>La observación del trabajo real</h3>
            <p>
              Ver cómo se hace de verdad una tarea revela distancias enormes
              entre el procedimiento escrito y lo que ocurre en el turno de la
              noche — y esa distancia suele ser la brecha.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>FUENTE 4</span>
            <h3>La gente que hace el trabajo</h3>
            <p>
              No preguntándole qué curso quiere, sino qué parte de su trabajo
              le da inseguridad, a quién le pregunta cuando no sabe y qué
              aprendió a fuerza de equivocarse.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>FUENTE 5</span>
            <h3>Lo que viene</h3>
            <p>
              Una planta nueva, un sistema que se implementa, una norma que
              cambia, un producto que se lanza. La mitad de las necesidades
              del año que entra todavía no existen — pero ya se pueden ver.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>05 · EL ENTREGABLE</span>
        <h2 className={s.h2}>¿Qué te entregamos cuando termina la DNC?</h2>
        <p className={s.prose}>
          Un documento que se pueda usar, no uno que se archive. En concreto,
          esto:
        </p>
        <ul className={s.lista}>
          <li>
            <strong>El mapa de brechas por puesto</strong> — qué necesita
            aprender cada rol crítico, con la evidencia que lo respalda para
            que nadie tenga que creerlo por fe.
          </li>
          <li>
            <strong>La priorización con su razón de negocio</strong> — qué se
            ataca primero y por qué, expresado en el indicador que debería
            moverse y no en «es importante para la cultura».
          </li>
          <li>
            <strong>La separación honesta</strong> — qué se resuelve con
            formación, qué con proceso, qué con herramienta y qué con una
            conversación de liderazgo.
          </li>
          <li>
            <strong>La recomendación de formato</strong> — qué conviene como
            curso en línea, qué como práctica acompañada y qué como material
            de consulta en el momento de la duda.
          </li>
          <li>
            <strong>El plan por fases</strong> — con qué empezar el primer
            trimestre para tener un resultado visible antes de pedir más
            presupuesto.
          </li>
        </ul>
        <p className={s.prose}>
          Ese mapa es, literalmente, el primer paso del método con el que
          construimos{" "}
          <a href="/academias-corporativas">academias corporativas completas</a>:
          sin él, lo que sigue —diseño, producción, plataforma— se construye
          sobre suposiciones.
        </p>
      </section>

      <div className={s.bandaNavy}>
        <span className={s.bloqueNum}>06 · LOS ERRORES</span>
        <h2 className={s.h2}>Los errores que arruinan una DNC</h2>
        <div className={s.cards}>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 1</span>
            <h3>Confundirla con el trámite anual</h3>
            <p>
              Llenar el formato porque lo pide la norma y guardarlo. El
              documento existe, la decisión nunca se tomó, y el presupuesto
              se ejerce igual que el año pasado.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 2</span>
            <h3>Preguntar solo a los jefes</h3>
            <p>
              Los jefes ven los síntomas, pero quien opera conoce las causas.
              Un diagnóstico que nunca bajó al piso describe el problema desde
              lejos, y desde lejos todo parece falta de actitud.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 3</span>
            <h3>Diagnosticar todo al mismo tiempo</h3>
            <p>
              Querer cubrir los cuarenta puestos de la empresa produce un
              documento enorme que nadie ejecuta. Es mejor un diagnóstico
              profundo de los cinco puestos que mueven el negocio.
            </p>
          </article>
          <article className={s.card}>
            <span className={s.cardMeta}>ERROR 4</span>
            <h3>No volver a mirarlo</h3>
            <p>
              Una DNC de hace tres años describe una empresa que ya no
              existe. Se revisa cada año y se actualiza cada vez que cambia
              un proceso importante.
            </p>
          </article>
        </div>
      </div>

      <section className={s.bloque}>
        <span className={s.bloqueNum}>07 · EL COSTO</span>
        <h2 className={s.h2}>¿Cuánto cuesta y cuándo conviene hacerla?</h2>
        <p className={s.prose}>
          El costo depende de cuántos puestos entren al diagnóstico y de qué
          tan disperso esté tu personal, así que se cotiza por alcance. Lo que
          sí podemos decirte de entrada es cuándo conviene: si vas a invertir
          una cantidad seria en formación este año, gastar una fracción en
          saber en qué invertirla suele ser la decisión más rentable del
          proyecto. Y si el presupuesto es tan apretado que hay que elegir
          entre diagnosticar o capacitar, conviene diagnosticar poco y bien —
          cinco puestos a fondo— antes que repartir el dinero a ciegas.
        </p>
        <p className={s.prose}>
          Hay un momento en el que la DNC deja de ser opcional: cuando la
          empresa crece o cambia lo suficiente como para que nadie tenga ya el
          panorama completo en la cabeza. Mientras el director de operaciones
          sepa de memoria qué le falta a cada persona, puedes vivir sin
          diagnóstico formal; en cuanto abres una sede, un turno o una línea
          nueva, esa memoria deja de alcanzar.
        </p>
      </section>

      <div className={`${s.bandaNavy} ${s.conIso}`}>
        <span className={s.bloqueNum}>08 · QUÉ SIGUE</span>
        <h2 className={s.h2}>Del diagnóstico a la academia</h2>
        <p className={s.prose}>
          La DNC responde qué enseñar. Lo que sigue es responder cómo, y ahí
          entra el resto del proceso: el{" "}
          <a href="/diseno-instruccional-empresarial">diseño instruccional</a>{" "}
          de cada curso, la{" "}
          <a href="/implementacion-de-lms">plataforma donde va a vivir</a> y la
          construcción de la{" "}
          <a href="/academias-corporativas">academia corporativa</a> completa.
          Cada paso deja algo revisable antes de pasar al siguiente, para que
          nunca tengas que aprobar a ciegas.
        </p>
        <p className={s.prose}>
          Si quieres ver cómo se ve el resultado final de este camino,{" "}
          <a href="/casos">los casos</a> cuentan proyectos terminados y{" "}
          <a href="/portafolio">el portafolio</a> te deja abrir lecciones
          reales para juzgarlas tú.
        </p>
      </div>

      <Faq
        titulo="Preguntas frecuentes sobre la DNC"
        preguntas={FAQS}
      />

      <CtaBanda
        titulo="Antes de gastar el presupuesto del año, vale la pena saber en qué"
        texto="Cuéntanos qué área te preocupa y qué indicadores tienes a la mano. Te decimos cómo se vería el diagnóstico, cuánto tomaría y qué tendrías para decidir el presupuesto."
        waMensaje="Hola, quiero hacer una detección de necesidades de capacitación en mi empresa."
      />
    </PageShell>
  );
}
