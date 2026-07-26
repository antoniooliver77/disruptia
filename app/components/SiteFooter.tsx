import Image from "next/image";
import s from "./SiteFooter.module.css";
import { CONTACTO } from "../lib/contacto";

/** Footer común: firma, tagline, legales y enlace al sitio del fundador. */
export function SiteFooter() {
  return (
    <footer className={s.banda}>
      <div className={s.inner}>
        <div className={s.marca}>
          <Image
            src="/logos/firma-horizontal-oscuro.png"
            alt="DisruptIA"
            width={179}
            height={40}
          />
          <p className={s.tagline}>El futuro se aprende.</p>
        </div>

        <div className={s.columnas}>
          <nav className={s.col} aria-label="Servicios">
            <span className={s.colTitulo}>Servicios</span>
            <a href="/academias-corporativas">Academias para empresas</a>
            <a href="/instituciones-educativas">Instituciones educativas</a>
            <a href="/metodo">Nuestro método</a>
            <a href="/casos">Casos</a>
          </nav>
          <nav className={s.col} aria-label="Contacto y legales">
            <span className={s.colTitulo}>Contacto</span>
            <a href="/contacto">Escríbenos</a>
            <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
            <a href="/aviso-de-privacidad">Aviso de privacidad</a>
            <a href="/terminos">Términos y condiciones</a>
          </nav>
        </div>
      </div>

      <div className={s.legal}>
        <p>
          © {new Date().getFullYear()} DisruptIA · Fundada por{" "}
          <a
            href="https://oliverbarona.com"
            rel="noopener"
          >
            Oliver Barona
          </a>
          , diseñador instruccional senior
        </p>
      </div>
    </footer>
  );
}
