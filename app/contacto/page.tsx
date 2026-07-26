import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { ContactForm } from "../components/ContactForm";
import { CONTACTO, waLink } from "../lib/contacto";
import p from "../prosa.module.css";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos qué academia quieres construir. Respondemos con fecha y siguiente paso, no con un folleto. También por WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <PageShell migas={[{ href: "/contacto", label: "Contacto" }]}>
      <header className={p.head}>
        <span className={p.code}>CONTACTO</span>
        <h1 className={p.title}>Hablemos de tu academia</h1>
        <p className={p.lede}>
          Cuéntanos qué quieren construir y para quién. Leemos todo y
          respondemos con una fecha y un siguiente paso concreto — no con un
          folleto.
        </p>
      </header>

      <section className={p.section}>
        <ContactForm />
        <p className={p.prose} style={{ marginTop: "48px" }}>
          ¿Prefieres el chat directo?{" "}
          <a
            href={waLink(
              "Hola, vengo de la página de contacto de disruptia.org y quiero platicar sobre crear nuestra academia."
            )}
          >
            Escríbenos por WhatsApp
          </a>{" "}
          o al correo <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>.
        </p>
      </section>
    </PageShell>
  );
}
