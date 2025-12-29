import { Link } from 'react-router-dom'

// Import images
import heroImg from '../../assets/sviluppo ad hoc/imgi_2_2500x900-azienda.webp'
import aziendaImg from '../../assets/sviluppo ad hoc/imgi_8_1300x900-azienda.webp'

export default function AziendaIndex() {
  const stats = [
    { value: '1979', label: 'Anno di fondazione' },
    { value: '45+', label: 'Anni di esperienza' },
    { value: '7', label: 'Settori industriali' },
    { value: '6', label: 'Aziende nel network' },
  ]

  const values = [
    {
      title: 'Innovazione',
      description: 'Ricerca continua di nuove soluzioni tecnologiche per rispondere alle esigenze del mercato.'
    },
    {
      title: 'Qualità',
      description: 'Processi certificati e controlli rigorosi per garantire prodotti di eccellenza.'
    },
    {
      title: 'Affidabilità',
      description: 'Partner di fiducia per clienti in tutto il mondo, con consegne puntuali e supporto costante.'
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '80vh' }}>
        <div className="hero-media">
          <img src={heroImg} alt="Team Mont.El" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content container text-center">
          <p className="text-caption text-accent mb-6">Azienda</p>
          <h1 className="text-display">
            Eccellenza italiana
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-headline mb-8">Dal 1979, Life in a wire</h2>
            </div>
            <div>
              <p className="text-body-lg text-muted mb-8">
                Mont.El Apparecchiature Elettroelettroniche S.r.l. è specializzata nella progettazione e produzione di sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura.
              </p>
              <p className="text-body text-muted">
                Con sede a Sale Marasino (BS), serviamo clienti in tutto il mondo nei settori delle macchine movimento terra, macchine agricole, generatori, veicoli industriali, automotive, nautica e ferroviario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-lg bg-black">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number text-white">{stat.value}</div>
                <div className="stat-label mt-4">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <div className="image-section-bg">
          <img src={aziendaImg} alt="Stabilimento Mont.El" />
        </div>
        <div className="image-section-overlay" />

        <div className="container">
          <div className="image-section-content">
            <p className="text-caption text-accent mb-6">Espansione</p>
            <h2 className="text-headline mb-8">
              Presenza in Romania
            </h2>
            <p className="text-body-lg text-muted mb-8">
              Per rispondere alle crescenti esigenze del mercato, abbiamo ampliato la nostra capacità produttiva con stabilimenti in Romania, mantenendo gli stessi standard qualitativi della sede italiana.
            </p>
            <Link to="/azienda/network" className="btn btn-primary">
              Il nostro network
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white text-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-caption text-black/50 mb-6">I nostri valori</p>
              <h2 className="text-headline">Cosa ci guida</h2>
            </div>
            <div className="space-y-12">
              {values.map((value, index) => (
                <div key={index} className="flex gap-8">
                  <div className="text-4xl font-bold text-brand-blue">0{index + 1}</div>
                  <div>
                    <h3 className="text-title mb-4">{value.title}</h3>
                    <p className="text-body text-black/60">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-black">
        <div className="container">
          <div className="text-center mb-20">
            <p className="text-caption text-accent mb-6">Certificazioni</p>
            <h2 className="text-headline">Standard internazionali</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 border border-white/10">
              <div className="text-6xl font-bold text-accent mb-4">ISO</div>
              <div className="text-2xl font-light text-white">9001</div>
              <p className="text-sm text-muted mt-4">Sistema di Gestione Qualità</p>
            </div>
            <div className="text-center p-8 border border-white/10">
              <div className="text-6xl font-bold text-accent mb-4">IATF</div>
              <div className="text-2xl font-light text-white">16949</div>
              <p className="text-sm text-muted mt-4">Standard Automotive</p>
            </div>
            <div className="text-center p-8 border border-white/10">
              <div className="text-6xl font-bold text-accent mb-4">ISO</div>
              <div className="text-2xl font-light text-white">14001</div>
              <p className="text-sm text-muted mt-4">Gestione Ambientale</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link to="/qualita/certificazioni" className="btn btn-outline">
              Scopri le certificazioni
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg bg-black relative overflow-hidden">
        <div className="grid-lines" />
        <div className="container relative z-10 text-center">
          <h2 className="text-headline mb-8">
            Vuoi saperne di più?
          </h2>
          <p className="text-body-lg text-muted max-w-2xl mx-auto mb-10">
            Contattaci per scoprire come possiamo supportare le tue esigenze con soluzioni personalizzate.
          </p>
          <Link to="/contatti" className="btn btn-primary">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  )
}
