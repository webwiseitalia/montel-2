import { Link } from 'react-router-dom'

// Import images
import headerImg from '../assets/settori applicazione/imgi_2_2500x900-settori-di-applicazione.webp'
import agricoleImg from '../assets/settori applicazione/imgi_7_magricole2.webp'
import automotiveImg from '../assets/settori applicazione/imgi_8_automobilismo2.webp'
import nauticoImg from '../assets/settori applicazione/imgi_13_nautico2.webp'
import ferroviarioImg from '../assets/settori applicazione/imgi_6_last_settore2.webp'
import condizionatoriImg from '../assets/settori applicazione/imgi_4_condizionatori.webp'
import aeronauticaImg from '../assets/settori applicazione/imgi_9_aeronautica2.webp'
import elettrodomesticiImg from '../assets/settori applicazione/imgi_10_elettrodomestici2.webp'

export default function Settori() {
  const settori = [
    {
      name: 'Macchine movimento terra',
      description: 'Escavatori, pale gommate, bulldozer e attrezzature da costruzione.',
      image: condizionatoriImg
    },
    {
      name: 'Macchine agricole',
      description: 'Trattori, mietitrebbie, irroratrici e ogni tipo di macchina agricola.',
      image: agricoleImg
    },
    {
      name: 'Generatori',
      description: 'Gruppi elettrogeni e sistemi di generazione energia.',
      image: elettrodomesticiImg
    },
    {
      name: 'Veicoli industriali',
      description: 'Veicoli commerciali, camion, autobus e mezzi speciali.',
      image: aeronauticaImg
    },
    {
      name: 'Automotive',
      description: 'Componenti certificati IATF 16949 per l\'industria automobilistica.',
      image: automotiveImg
    },
    {
      name: 'Nautica',
      description: 'Imbarcazioni da diporto, yacht e applicazioni navali.',
      image: nauticoImg
    },
    {
      name: 'Ferroviario',
      description: 'Applicazioni ferroviarie ad alta affidabilità e sicurezza.',
      image: ferroviarioImg
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-media">
          <img src={headerImg} alt="Settori di applicazione" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content container text-center">
          <p className="text-caption text-accent mb-6">Settori</p>
          <h1 className="text-display">
            Dove operiamo
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-body-lg text-muted">
              Da oltre 45 anni, Mont.El fornisce componenti elettronici ed elettromeccanici ai settori industriali più esigenti. La nostra esperienza multisettoriale ci permette di comprendere le esigenze specifiche di ogni applicazione.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {settori.map((s, i) => (
              <span key={i} className="px-4 py-2 border border-white/20 text-sm text-white/70">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-black pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {settori.map((settore, index) => (
              <div key={index} className="card group relative">
                <div className="card-image aspect-[4/3]">
                  <img src={settore.image} alt={settore.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="text-title text-white mb-2">{settore.name}</h3>
                  <p className="text-sm text-muted">{settore.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white text-black">
        <div className="container">
          <div className="text-center mb-20">
            <p className="text-caption text-black/50 mb-6">Perché sceglierci</p>
            <h2 className="text-headline">Esperienza multisettoriale</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-blue mb-6">01</div>
              <h3 className="text-title mb-4">Know-how trasversale</h3>
              <p className="text-body text-black/60">
                L'esperienza maturata in diversi settori ci permette di proporre soluzioni innovative ispirate alle best practice di ogni industria.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-blue mb-6">02</div>
              <h3 className="text-title mb-4">Certificazioni complete</h3>
              <p className="text-body text-black/60">
                Le nostre certificazioni ISO 9001, IATF 16949 e ISO 14001 garantiscono standard qualitativi riconosciuti in tutti i settori.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-brand-blue mb-6">03</div>
              <h3 className="text-title mb-4">Supporto dedicato</h3>
              <p className="text-body text-black/60">
                Il nostro team tecnico conosce le specificità di ogni settore e può supportarti nella scelta della soluzione più adatta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-lg bg-black relative overflow-hidden">
        <div className="grid-lines" />
        <div className="container relative z-10 text-center">
          <h2 className="text-headline mb-8">
            Lavori in un settore specifico?
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
