export const SITE_CONFIG = {
  // Mode: 'LIVE' | 'PRE_LAUNCH'
  mode: 'PRE_LAUNCH' as const,
  launchDate: 'Primavera 2026',
  amazonUrl: "https://www.amazon.es/dp/B0DJVDMH7V", // URL real o placeholder
  preLaunchUrl: "#newsletter", // A dónde lleva el botón en pre-launch (puede ser un anchor o mailto)
  contactEmail: "jvelez@diatomusa.com"
};

export const CTA_TEXT = {
  LIVE: "Comprar en Amazon",
  PRE_LAUNCH: "Notificarme del Lanzamiento",
};
