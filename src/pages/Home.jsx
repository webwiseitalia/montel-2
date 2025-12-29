import { Link } from 'react-router-dom'

// Import images
import heroImg from '../assets/sviluppo ad hoc/imgi_2_2500x900-azienda.webp'
import sensoriImg from '../assets/produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiImg from '../assets/produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriImg from '../assets/produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeImg from '../assets/produzione/imgi_7_sonde_di_temperatura_thumb.webp'
import aziendaImg from '../assets/sviluppo ad hoc/imgi_8_1300x900-azienda.webp'
import settoriImg from '../assets/settori applicazione/imgi_7_magricole2.webp'
import qualitaImg from '../assets/apparechciature e cablaggi/imgi_22_qualita_1.webp'

export default function Home() {
  const products = [
    {
      title: 'Sensori di livello',
      subtitle: 'Tecnologia capacitiva',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriImg
    },
    {
      title: 'Cablaggi elettrici',
      subtitle: 'Soluzioni su misura',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiImg
    },
    {
      title: 'Quadri elettrici',
      subtitle: 'Controllo e potenza',
      path: '/prodotti/quadri-elettrici',
      image: quadriImg
    },
    {
      title: 'Sonde temperatura',
      subtitle: 'Precisione assoluta',
      path: '/prodotti/sonde-temperatura',
      image: sondeImg
    },
  ]

  const stats = [
    { value: '1979', label: 'Anno di fondazione' },
    { value: '45+', label: 'Anni di esperienza' },
    { value: '7', label: 'Settori industriali' },
    { value: '3', label: 'Certificazioni ISO' },
  ]

  return (
    <>
      {/* HERO - Centered */}
      <section className="hero">
        <div className="hero-media">
          <img src={heroImg} alt="Mont.El Team" />
        </div>
        <div className="hero-overlay" />
        <div className="grid-lines" />

        <div className="hero-content container text-center">
          <p className="text-caption text-accent mb-6">Electronic Wiring Equipment</p>
          <h1 className="text-display mb-8 mx-auto">
            Life in a wire
          </h1>
          <p className="text-body-lg text-muted max-w-2xl mx-auto mb-10">
            Dal 1979 progettiamo e produciamo componenti elettronici per i settori industriali più esigenti.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/prodotti" className="btn btn-primary">
              Esplora i prodotti
            </Link>
            <Link to="/azienda" className="btn btn-outline">
              Scopri l'azienda
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-caption text-muted">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-caption text-accent mb-4">Prodotti</p>
            <h2 className="text-headline mb-6">Soluzioni industriali</h2>
            <p className="text-body-lg text-muted max-w-2xl mx-auto">
              Quattro linee di prodotto progettate e realizzate interamente in Italia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {products.map((product, index) => (
              <Link key={index} to={product.path} className="card group">
                <div className="card-image aspect-[4/5]">
                  <img src={product.image} alt={product.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-caption text-accent mb-2">{product.subtitle}</p>
                  <h3 className="text-title text-white">{product.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/prodotti" className="btn btn-outline">
              Tutti i prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT - Split Layout Balanced */}
      <section className="section-lg bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={aziendaImg} alt="Stabilimento Mont.El" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caption text-accent mb-6">Chi siamo</p>
              <h2 className="text-headline mb-8">
                Eccellenza italiana dal 1979
              </h2>
              <p className="text-body-lg text-muted mb-8">
                Mont.El è specializzata nella progettazione e produzione di componenti elettronici ed elettromeccanici. Con sede a Sale Marasino (BS), serviamo clienti in tutto il mondo.
              </p>
              <Link to="/azienda" className="btn btn-primary">
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS - Centered */}
      <section className="section bg-brand-blue">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number text-white">{stat.value}</div>
                <div className="stat-label text-white/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS - Split Layout Balanced */}
      <section className="section-lg bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-caption text-accent mb-6">Settori</p>
              <h2 className="text-headline mb-8">
                Dove operiamo
              </h2>
              <p className="text-body-lg text-muted mb-8">
                I nostri prodotti trovano applicazione nei settori industriali più esigenti, dove affidabilità e precisione sono requisiti fondamentali.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {['Movimento terra', 'Agricoltura', 'Automotive', 'Nautica', 'Ferroviario'].map((sector, i) => (
                  <span key={i} className="px-4 py-2 border border-white/20 text-sm text-white/70">
                    {sector}
                  </span>
                ))}
              </div>
              <Link to="/settori" className="btn btn-primary">
                Esplora i settori
              </Link>
            </div>
            <div>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={settoriImg} alt="Settori di applicazione" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY - Split Section White */}
      <section className="section bg-white text-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square overflow-hidden">
                <img src={qualitaImg} alt="Qualità Mont.El" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caption text-brand-red mb-6">Qualità</p>
              <h2 className="text-headline mb-8">
                Certificazioni internazionali
              </h2>
              <p className="text-body-lg text-black/60 mb-8">
                Il nostro Sistema di Gestione Qualità è certificato secondo gli standard più rigorosi.
              </p>
              <div className="flex gap-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">ISO</div>
                  <div className="text-sm text-black/50">9001</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">IATF</div>
                  <div className="text-sm text-black/50">16949</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">ISO</div>
                  <div className="text-sm text-black/50">14001</div>
                </div>
              </div>
              <Link to="/qualita" className="btn btn-primary !bg-brand-blue !text-white hover:!bg-brand-red">
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Centered */}
      <section className="section-lg bg-black relative overflow-hidden">
        <div className="grid-lines" />
        <div className="container relative z-10 text-center">
          <h2 className="text-headline mb-8">
            Inizia il tuo progetto
          </h2>
          <p className="text-body-lg text-muted max-w-2xl mx-auto mb-10">
            Contattaci per scoprire come possiamo supportare le tue esigenze con soluzioni personalizzate e di alta qualità.
          </p>
          <Link to="/contatti" className="btn btn-primary">
            Contattaci ora
          </Link>
        </div>
      </section>
    </>
  )
}
