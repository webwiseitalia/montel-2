import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    azienda: '',
    messaggio: '',
    privacy: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="absolute inset-0 bg-black" />
        <div className="grid-lines" />

        <div className="hero-content container text-center">
          <p className="text-caption text-accent mb-6">Contatti</p>
          <h1 className="text-display">
            Parliamo del tuo progetto
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left - Contact Info */}
            <div>
              <div className="mb-16">
                <p className="text-caption text-accent mb-6">Sede</p>
                <h2 className="text-title mb-8">Mont.El S.r.l.</h2>
                <div className="space-y-2 text-body text-muted">
                  <p>Via Mazzini, 31/B</p>
                  <p>25057 Sale Marasino (BS)</p>
                  <p>Italia</p>
                </div>
              </div>

              <div className="mb-16">
                <p className="text-caption text-accent mb-6">Contatti diretti</p>
                <div className="space-y-4">
                  <a href="tel:+39030986300" className="block text-title text-white hover:text-accent transition-colors">
                    +39 030 986300
                  </a>
                  <a href="mailto:info@montel.it" className="block text-title text-white hover:text-accent transition-colors">
                    info@montel.it
                  </a>
                </div>
              </div>

              <div className="mb-16">
                <p className="text-caption text-accent mb-6">Dati fiscali</p>
                <div className="space-y-1 text-sm text-muted">
                  <p>P.IVA / C.F.: 10695790153</p>
                  <p>REA: BS 351131</p>
                  <p>Capitale sociale: € 720.000,00</p>
                </div>
              </div>

              <div>
                <p className="text-caption text-muted mb-6">Esplora i prodotti</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/prodotti/sensori-livello-carburante" className="text-sm text-muted hover:text-white transition-colors">
                    Sensori
                  </Link>
                  <span className="text-muted">/</span>
                  <Link to="/prodotti/cablaggi-elettrici" className="text-sm text-muted hover:text-white transition-colors">
                    Cablaggi
                  </Link>
                  <span className="text-muted">/</span>
                  <Link to="/prodotti/quadri-elettrici" className="text-sm text-muted hover:text-white transition-colors">
                    Quadri
                  </Link>
                  <span className="text-muted">/</span>
                  <Link to="/prodotti/sonde-temperatura" className="text-sm text-muted hover:text-white transition-colors">
                    Sonde
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <p className="text-caption text-accent mb-6">Richiedi informazioni</p>
              <p className="text-body text-muted mb-10">
                Compila il form per ricevere informazioni sui nostri prodotti e servizi. Ti risponderemo entro 24 ore.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Nome e cognome *"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email *"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Telefono"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="text"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    placeholder="Azienda"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Come possiamo aiutarti? *"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-4 pt-4">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 bg-transparent border border-white/30 appearance-none checked:bg-accent checked:border-accent cursor-pointer"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted cursor-pointer">
                    Accetto la <a href="#" className="text-white hover:text-accent transition-colors">Privacy Policy</a> e il trattamento dei dati personali *
                  </label>
                </div>

                <div className="pt-6">
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Invia richiesta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[50vh] bg-white/5 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted">Mappa interattiva</p>
        </div>
      </section>
    </>
  )
}
