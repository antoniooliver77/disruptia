import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { CONTACTO } from "../lib/contacto";
import p from "../prosa.module.css";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de disruptia.org: qué datos personales se recaban, con qué finalidad y cómo ejercer tus derechos ARCO.",
  alternates: { canonical: "/aviso-de-privacidad" },
  robots: { index: true, follow: true },
};

export default function AvisoPrivacidadPage() {
  return (
    <PageShell
      migas={[{ href: "/aviso-de-privacidad", label: "Aviso de privacidad" }]}
    >
      <header className={p.head}>
        <span className={p.code}>DOCUMENTO LEGAL</span>
        <h1 className={p.title}>Aviso de privacidad</h1>
        <p className={p.lede}>
          Corto y sin letra chica: qué datos tuyos recibimos, para qué los
          usamos y cómo puedes pedirnos que los corrijamos o los borremos.
        </p>
      </header>

      <section className={p.section}>
        <h2 className={p.h2}>Responsable de tus datos</h2>
        <p className={p.prose}>
          DIsruptIA, representada por Oliver Barona (en adelante, &ldquo;el
          Responsable&rdquo;), con domicilio en México, es responsable del
          tratamiento de los datos personales que proporciones a través de
          este sitio, conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares.
        </p>

        <h2 className={p.h2}>Qué datos recabamos y para qué</h2>
        <p className={p.prose}>
          A través del formulario de contacto y de WhatsApp podemos recibir:
          nombre, correo electrónico, teléfono y la información que decidas
          compartir sobre tu organización y su proyecto de capacitación.
          Estos datos se usan exclusivamente para: responder tu mensaje,
          preparar propuestas y cotizaciones, y — si contratamos — prestar
          los servicios acordados. No enviamos publicidad no solicitada ni
          vendemos, rentamos o compartimos tus datos con terceros, salvo
          obligación legal.
        </p>

        <h2 className={p.h2}>Servicios de terceros</h2>
        <p className={p.prose}>
          El formulario de contacto se procesa mediante Formspree y la
          mensajería mediante WhatsApp; ambos servicios tratan los datos
          conforme a sus propias políticas de privacidad. Este sitio no usa
          cookies de rastreo publicitario.
        </p>

        <h2 className={p.h2}>Tus derechos (ARCO)</h2>
        <p className={p.prose}>
          Puedes solicitar en cualquier momento el acceso, rectificación,
          cancelación u oposición al tratamiento de tus datos escribiendo a{" "}
          <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>. Te
          responderemos en un plazo máximo de 20 días hábiles.
        </p>

        <h2 className={p.h2}>Cambios a este aviso</h2>
        <p className={p.prose}>
          Cualquier modificación se publicará en esta misma página. Última
          actualización: julio de 2026.
        </p>
      </section>
    </PageShell>
  );
}
