/** Datos de contacto centralizados — un solo lugar para actualizarlos. */
export const CONTACTO = {
  email: "hola@disruptia.org",
  /** Número de WhatsApp con lada internacional, solo dígitos. */
  whatsapp: "525578621537",
  whatsappMensaje:
    "Hola, vengo de disruptia.org y quiero crear la academia de capacitación de mi organización.",
  /** ID del formulario en Formspree (https://formspree.io). */
  formspreeId: "xrenodlk",
};

/** Link de WhatsApp con mensaje contextual (cada pantalla manda el suyo). */
export const waLink = (mensaje: string = CONTACTO.whatsappMensaje) =>
  `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
