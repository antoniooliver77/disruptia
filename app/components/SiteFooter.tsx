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
            alt="DIsruptIA"
            width={179}
            height={40}
          />
          <p className={s.tagline}>El futuro se aprende.</p>
        </div>

        <div className={s.columnas}>
          <nav className={s.col} aria-label="Empresas">
            <span className={s.colTitulo}>Empresas</span>
            <a href="/academias-corporativas">Academias corporativas</a>
            <a href="/universidad-corporativa">Universidad corporativa</a>
            <a href="/capacitacion-con-inteligencia-artificial">
              Capacitación con IA
            </a>
            <a href="/onboarding-empresarial">Onboarding empresarial</a>
          </nav>
          <nav className={s.col} aria-label="Instituciones educativas">
            <span className={s.colTitulo}>Instituciones</span>
            <a href="/instituciones-educativas">Academias educativas</a>
            <a href="/formacion-docente-en-ia">Formación docente en IA</a>
          </nav>
          <nav className={s.col} aria-label="DIsruptIA">
            <span className={s.colTitulo}>DIsruptIA</span>
            <a href="/metodo">Nuestro método</a>
            <a href="/casos">Casos</a>
            <a href="/portafolio">Portafolio</a>
            <a href="/recursos">Recursos</a>
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
          © {new Date().getFullYear()} DIsruptIA · Fundada por{" "}
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
