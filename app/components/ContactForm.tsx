"use client";

import { useState } from "react";
import s from "./ContactForm.module.css";
import { CONTACTO } from "../lib/contacto";

type Field = {
  id: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  placeholder: string;
  options?: string[];
  required?: boolean;
};

const FIELDS: Field[] = [
  {
    id: "nombre",
    label: "01 · NOMBRE",
    type: "text",
    placeholder: "Tu nombre completo",
    required: true,
  },
  {
    id: "correo",
    label: "02 · CORREO",
    type: "email",
    placeholder: "tu@correo.com",
    required: true,
  },
  {
    id: "perfil",
    label: "03 · ORGANIZACIÓN (opcional)",
    type: "select",
    placeholder: "¿Desde dónde nos escribes?",
    options: [
      "Empresa — queremos nuestra academia de capacitación",
      "Institución educativa — queremos nuestra academia digital",
      "Otro",
    ],
    required: false,
  },
  {
    id: "mensaje",
    label: "04 · MENSAJE",
    type: "textarea",
    placeholder: "Cuéntanos qué quieren construir y para quién.",
    required: true,
  },
];

export function ContactForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errores, setErrores] = useState<Record<string, string>>({});

  const set = (id: string, v: string) => {
    setValues((prev) => ({ ...prev, [id]: v }));
    setErrores((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id]; // el error se limpia en cuanto corrigen
      return next;
    });
  };

  /** Valida los campos obligatorios: nombre, correo y mensaje. */
  const validar = () => {
    const e: Record<string, string> = {};
    const nombre = (values.nombre ?? "").trim();
    const correo = (values.correo ?? "").trim();
    const mensaje = (values.mensaje ?? "").trim();

    if (nombre.length < 2) e.nombre = "Escribe tu nombre.";
    if (!correo) e.correo = "Necesitamos tu correo para responderte.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo))
      e.correo = "Ese correo no se ve válido. Revísalo, por favor.";
    if (mensaje.length < 10)
      e.mensaje = "Cuéntanos un poco más — al menos una frase.";

    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fallos = validar();
    if (Object.keys(fallos).length > 0) {
      setErrores(fallos);
      setStatus("idle");
      // enfoca el primer campo con problema
      const primero = FIELDS.find((f) => fallos[f.id]);
      if (primero) document.getElementById(primero.id)?.focus();
      return;
    }

    setErrores({});
    setStatus("sending");
    try {
      // El ID se configura en app/lib/contacto.ts (Formspree)
      const res = await fetch(`https://formspree.io/f/${CONTACTO.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, sitio: "disruptia.org" }),
      });
      setStatus(res.ok ? "ok" : "err");
    } catch {
      setStatus("err");
    }
  };

  if (status === "ok") {
    return (
      <div className={s.success} role="status">
        <p className={s.successTitle}>MENSAJE ENVIADO</p>
        <p className={s.successSub}>
          Lo leemos con calma y te respondemos pronto, con fecha y siguiente
          paso.
        </p>
      </div>
    );
  }

  return (
    // noValidate: la validación la hacemos nosotros para que los mensajes
    // salgan en español y con el estilo del sitio (los nativos cambian con
    // el idioma del navegador).
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      <div className={s.grid}>
        {FIELDS.map((f) => (
          <div
            key={f.id}
            className={`${s.field} ${f.type === "textarea" ? s.full : ""} ${
              errores[f.id] ? s.invalid : ""
            }`}
          >
            <label className={s.label} htmlFor={f.id}>
              {f.label}
            </label>

            {f.type === "textarea" ? (
              <textarea
                id={f.id}
                className={s.input}
                placeholder={f.placeholder}
                required={f.required}
                rows={4}
                aria-invalid={errores[f.id] ? true : undefined}
                aria-describedby={errores[f.id] ? `${f.id}-error` : undefined}
                value={values[f.id] ?? ""}
                onChange={(e) => set(f.id, e.target.value)}
              />
            ) : f.type === "select" ? (
              <select
                id={f.id}
                className={s.input}
                required={f.required}
                value={values[f.id] ?? ""}
                onChange={(e) => set(f.id, e.target.value)}
              >
                <option value="" disabled>
                  {f.placeholder}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.id}
                className={s.input}
                type={f.type}
                placeholder={f.placeholder}
                required={f.required}
                aria-invalid={errores[f.id] ? true : undefined}
                aria-describedby={errores[f.id] ? `${f.id}-error` : undefined}
                value={values[f.id] ?? ""}
                onChange={(e) => set(f.id, e.target.value)}
              />
            )}

            {errores[f.id] && (
              <p className={s.fieldError} id={`${f.id}-error`} role="alert">
                {errores[f.id]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className={s.actions}>
        <button
          className="btn btnPrimario"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje →"}
        </button>
        {status === "err" && (
          <span className={s.errMsg} role="alert">
            No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.
          </span>
        )}
      </div>
    </form>
  );
}
