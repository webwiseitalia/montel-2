// Dati centralizzati del sito Mont.El
// Questo file contiene tutte le informazioni aziendali utilizzate nel sito

export const siteData = {
  // Informazioni aziendali
  company: {
    name: 'Mont.El S.r.l.',
    shortName: 'Mont.El',
    tagline: 'Electronic Wiring Equipment',
    slogan: 'Life in a wire',
    foundedYear: 1979,
    description: 'Dal 1979 progettiamo e produciamo componenti elettronici per i settori industriali più esigenti. Specializzati in sensori di livello, cablaggi elettrici, quadri elettrici e sonde di temperatura.',
  },

  // Contatti
  contact: {
    phone: '+39 030 986300',
    phoneClean: '+39030986300',
    email: 'info@montel.it',
    pec: '', // Aggiungere se disponibile
  },

  // Indirizzo
  address: {
    street: 'Via Mazzini, 31/B',
    city: 'Sale Marasino',
    province: 'BS',
    postalCode: '25057',
    country: 'Italia',
    full: 'Via Mazzini, 31/B, 25057 Sale Marasino (BS), Italia',
  },

  // Dati fiscali
  fiscal: {
    vatNumber: '10695790153',
    fiscalCode: '10695790153',
    rea: 'BS 351131',
    shareCapital: '€ 720.000,00',
  },

  // Social media
  social: {
    linkedin: 'https://linkedin.com/company/montel-srl',
  },

  // SEO e meta
  seo: {
    title: 'Mont.El S.r.l. | Componenti Elettronici Industriali dal 1979',
    description: 'Mont.El progetta e produce componenti elettronici industriali dal 1979: sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura. Certificazioni ISO 9001, IATF 16949, ISO 14001.',
    keywords: 'componenti elettronici, sensori livello carburante, cablaggi elettrici, quadri elettrici, sonde temperatura, elettronica industriale, Mont.El, Sale Marasino',
    ogImage: '/og-image.jpg', // Immagine per social sharing
    siteUrl: 'https://www.montel.it',
  },

  // Prodotti
  products: [
    {
      name: 'Sensori di livello carburante',
      slug: 'sensori-livello-carburante',
      description: 'Tecnologia capacitiva per la misurazione precisa del livello carburante',
    },
    {
      name: 'Cablaggi elettrici',
      slug: 'cablaggi-elettrici',
      description: 'Soluzioni su misura per cablaggi elettrici industriali',
    },
    {
      name: 'Quadri elettrici',
      slug: 'quadri-elettrici',
      description: 'Quadri elettrici per controllo e potenza',
    },
    {
      name: 'Sonde di temperatura',
      slug: 'sonde-temperatura',
      description: 'Sonde di temperatura ad alta precisione',
    },
  ],

  // Settori di applicazione
  sectors: [
    'Movimento terra',
    'Macchine agricole',
    'Automotive',
    'Nautica',
    'Ferroviario',
    'Industriale',
    'Energie rinnovabili',
  ],

  // Certificazioni
  certifications: [
    { name: 'ISO 9001', description: 'Sistema di Gestione Qualità' },
    { name: 'IATF 16949', description: 'Gestione Qualità Automotive' },
    { name: 'ISO 14001', description: 'Sistema di Gestione Ambientale' },
  ],

  // Cookie consent key
  cookieConsentKey: 'montel-2-cookie-consent',

  // Data ultimo aggiornamento policy
  policyLastUpdate: '27/10/2025',
}

export default siteData
