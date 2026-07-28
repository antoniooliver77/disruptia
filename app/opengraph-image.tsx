import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "DIsruptIA — Academias de capacitación y cursos en línea";

/**
 * Imagen Open Graph: la firma horizontal real (el logo jamás se
 * redibuja) sobre su fondo horneado, tagline y dominio.
 * Sin caracteres especiales: la fuente de next/og falla en build.
 */
export default async function OgImage() {
  const logo = await readFile(
    join(process.cwd(), "public/logos/firma-horizontal-oscuro.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "#000712",
          color: "#f4efe6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#3fd0e0",
            textTransform: "uppercase",
          }}
        >
          ACADEMIAS DE CAPACITACION Y CURSOS EN LINEA
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={897} height={200} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
          }}
        >
          <div style={{ display: "flex", color: "#ff5c1f", fontWeight: 700 }}>
            El futuro se aprende.
          </div>
          <div style={{ display: "flex", color: "#f4efe6" }}>disruptia.org</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
