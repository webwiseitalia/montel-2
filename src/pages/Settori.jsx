import PageHeader from '../components/PageHeader'
import CTABanner from '../components/CTABanner'

// Import images
import agricoleImg from '../assets/settori applicazione/imgi_7_magricole2.webp'
import condizionatoriImg from '../assets/settori applicazione/imgi_4_condizionatori.webp'
import automotiveImg from '../assets/settori applicazione/imgi_8_automobilismo2.webp'
import nauticoImg from '../assets/settori applicazione/imgi_13_nautico2.webp'
import ferroviarioImg from '../assets/settori applicazione/imgi_6_last_settore2.webp'
import aeronauticaImg from '../assets/settori applicazione/imgi_9_aeronautica2.webp'
import elettrodomesticiImg from '../assets/settori applicazione/imgi_10_elettrodomestici2.webp'

export default function Settori() {
  const settori = [
    {
      name: 'Macchine movimento terra',
      description: 'Sensori di livello carburante, cablaggi e sonde di temperatura per escavatori, pale gommate, bulldozer e attrezzature da costruzione.',
      products: ['Sensori livello', 'Cablaggi', 'Sonde temperatura'],
      image: condizionatoriImg
    },
    {
      name: 'Macchine agricole',
      description: 'Componenti elettronici per trattori, mietitrebbie, irroratrici e ogni tipo di macchina agricola. Resistenti a polvere, umidità e vibrazioni.',
      products: ['Sensori livello', 'Cablaggi', 'Quadri elettrici'],
      image: agricoleImg
    },
    {
      name: 'Generatori',
      description: 'Sistemi di monitoraggio e controllo per gruppi elettrogeni: sensori di livello carburante, sonde temperatura e cablaggi dedicati.',
      products: ['Sensori livello', 'Sonde temperatura', 'Cablaggi'],
      image: elettrodomesticiImg
    },
    {
      name: 'Veicoli industriali',
      description: 'Cablaggi e sensori per veicoli commerciali, camion, autobus e mezzi speciali. Conformi agli standard automotive più severi.',
      products: ['Cablaggi', 'Sensori', 'Centraline'],
      image: aeronauticaImg
    },
    {
      name: 'Automotive',
      description: 'Componenti certificati IATF 16949 per l\'industria automobilistica. Sensori, cablaggi e sistemi di controllo per OEM e tier supplier.',
      products: ['Sensori', 'Cablaggi', 'Quadri'],
      image: automotiveImg
    },
    {
      name: 'Nautica',
      description: 'Sensori e cablaggi resistenti all\'ambiente marino per imbarcazioni da diporto, yacht e applicazioni navali professionali.',
      products: ['Sensori livello', 'Cablaggi marini', 'Sonde'],
      image: nauticoImg
    },
    {
      name: 'Ferroviario',
      description: 'Componenti per applicazioni ferroviarie con requisiti di affidabilità e sicurezza elevati. Conformi alle normative di settore.',
      products: ['Cablaggi', 'Sensori', 'Quadri elettrici'],
      image: ferroviarioImg
    },
  ]

  return (
    <>
      <PageHeader
        title="Settori di applicazione"
        subtitle="I nostri prodotti trovano applicazione nei settori industriali più esigenti, dove affidabilità e precisione sono requisiti fondamentali."
        breadcrumbs={[{ label: 'Settori di applicazione' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-white/60 text-lg">
            Da oltre 45 anni, Mont.El fornisce componenti elettronici ed elettromeccanici a clienti in tutto il mondo. La nostra esperienza multisettoriale ci permette di comprendere le esigenze specifiche di ogni applicazione e di offrire soluzioni ottimizzate.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {settori.map((settore, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img
                    src={settore.image}
                    alt={settore.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white/80">
                    {settore.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {settore.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {settore.products.map((product, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-white/40 text-xs">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Perché sceglierci</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Vantaggi della nostra esperienza multisettoriale
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Know-how trasversale</h3>
              <p className="text-white/50 text-sm">
                L'esperienza maturata in diversi settori ci permette di proporre soluzioni innovative ispirate alle best practice di ogni industria.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Certificazioni complete</h3>
              <p className="text-white/50 text-sm">
                Le nostre certificazioni ISO 9001, IATF 16949 e ISO 14001 garantiscono standard qualitativi riconosciuti in tutti i settori.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Supporto dedicato</h3>
              <p className="text-white/50 text-sm">
                Il nostro team tecnico conosce le specificità di ogni settore e può supportarti nella scelta della soluzione più adatta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Lavori in un settore specifico? Contattaci per una soluzione su misura" />
    </>
  )
}
