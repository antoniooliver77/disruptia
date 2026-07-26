import s from "./CtaInline.module.css";

/**
 * CTA intermedio: franja delgada con borde que corta la lectura en
 * puntos de decisión, sin robarle el papel a la banda final.
 */
export function CtaInline({
  texto,
  label = "Crear nuestra academia →",
}: {
  texto: string;
  label?: string;
}) {
  return (
    <aside className={s.franja}>
      <p className={s.texto}>{texto}</p>
      <a className="btn btnPrimario" href="/contacto">
        {label}
      </a>
    </aside>
  );
}
