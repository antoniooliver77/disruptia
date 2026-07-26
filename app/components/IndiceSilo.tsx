import s from "./IndiceSilo.module.css";

export type ItemSilo = { href: string; label: string; nota: string };

/**
 * Índice del silo: se coloca justo después del hero de un pillar para
 * que los clusters sean visibles sin scrollear media página.
 */
export function IndiceSilo({
  titulo,
  items,
}: {
  titulo: string;
  items: ItemSilo[];
}) {
  return (
    <nav className={s.indice} aria-label={titulo}>
      <span className={s.titulo}>{titulo}</span>
      <ul className={s.lista}>
        {items.map((i) => (
          <li key={i.href}>
            <a href={i.href} className={s.item}>
              <span className={s.label}>{i.label}</span>
              <span className={s.nota}>{i.nota}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
