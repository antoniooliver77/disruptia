import s from "./CtaBanda.module.css";
import { waLink } from "../lib/contacto";

/**
 * Banda hueso de conversión — cada página manda su mensaje de WhatsApp
 * contextual. Un solo CTA por página, repetido (regla del manual).
 */
export function CtaBanda({
  titulo,
  texto,
  waMensaje,
}: {
  titulo: string;
  texto: string;
  waMensaje: string;
}) {
  return (
    <section className={s.banda}>
      <h2 className={s.titulo}>{titulo}</h2>
      <p className={s.texto}>{texto}</p>
      <div className={s.acciones}>
        <a className="btn btnPrimario" href="/contacto">
          Crear nuestra academia →
        </a>
        <a className={s.wa} href={waLink(waMensaje)}>
          o escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
