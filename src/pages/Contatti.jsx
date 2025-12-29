import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    azienda: '',
    citta: '',
    provincia: '',
    cap: '',
    nazione: '',
    telefono: '',
    email: '',
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

  const productLinks = [
    { label: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { label: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { label: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { label: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  return (
    <>
      <PageHeader
        title="Contatti"
        breadcrumbs={[{ label: 'Contatti' }]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              {/* Dati aziendali */}
              <div className="mb-12">
                <h2 className="text-2xl font-light text-white mb-6">Dati aziendali</h2>
                <div className="space-y-2 text-white/60">
                  <p className="text-white font-medium text-lg">Mont.El Apparecchiature Elettroelettroniche S.r.l.</p>
                  <p>Via Mazzini, 31/B</p>
                  <p>25057 Sale Marasino (BS) – Italia</p>
                  <div className="pt-4 space-y-1">
                    <p>Tel: <a href="tel:+39030986300" className="text-white hover:underline">+39 030 986300</a></p>
                    <p>Fax: +39 030 9867069</p>
                    <p>Email: <a href="mailto:info@montel.it" className="text-white hover:underline">info@montel.it</a></p>
                  </div>
                  <div className="pt-4 space-y-1 text-sm">
                    <p>P.IVA / C.F.: 10695790153</p>
                    <p>REA: BS 351131</p>
                    <p>Capitale sociale: € 720.000,00</p>
                  </div>
                </div>
              </div>

              {/* Mappa placeholder */}
              <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center mb-12">
                <span className="text-white/30">[Mappa / Google Maps]</span>
              </div>

              {/* Link rapidi categorie prodotto */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">I nostri prodotti</h3>
                <div className="flex flex-wrap gap-3">
                  {productLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="px-4 py-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <h2 className="text-2xl font-light text-white mb-6">Richiedi informazioni</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nome / Azienda *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Il tuo nome o azienda"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Città</label>
                    <input
                      type="text"
                      name="citta"
                      value={formData.citta}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="La tua città"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Provincia</label>
                    <input
                      type="text"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Prov."
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">CAP</label>
                    <input
                      type="text"
                      name="cap"
                      value={formData.cap}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="CAP"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nazione</label>
                    <input
                      type="text"
                      name="nazione"
                      value={formData.nazione}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Nazione"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Telefono</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Il tuo telefono"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="La tua email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-sm mb-2">Messaggio *</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/50 transition-colors resize-none"
                    placeholder="Il tuo messaggio"
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 bg-white/5 border border-white/20"
                  />
                  <label htmlFor="privacy" className="text-white/50 text-sm">
                    Ho letto e accetto la <a href="#" className="text-white hover:underline">Privacy Policy</a> e autorizzo il trattamento dei miei dati personali ai sensi del GDPR *
                  </label>
                </div>

                {/* Captcha placeholder */}
                <div className="bg-white/5 border border-white/20 p-4 flex items-center justify-center h-20">
                  <span className="text-white/30 text-sm">[Codice di verifica]</span>
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Invia richiesta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
