import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import SidebarNav from '../../components/SidebarNav'
import CTABanner from '../../components/CTABanner'

export default function CaseHistoryCablaggi() {
  const sidebarNav = [
    { label: 'Sensori di livello carburante', path: '/case-history/sensori-livello-carburante' },
    { label: 'Cablaggi elettrici', path: '/case-history/cablaggi-elettrici' },
    { label: 'Quadri elettrici', path: '/case-history/quadri-elettrici' },
  ]

  const articles = [
    { title: 'Cablaggio per auto', path: '/case-history/cablaggi-elettrici/cablaggio-auto', description: '[Descrizione placeholder]' },
    { title: 'Cablaggio per moto', path: '/case-history/cablaggi-elettrici/cablaggio-moto', description: '[Descrizione placeholder]' },
    { title: 'Cablaggi per il condizionamento', path: '/case-history/cablaggi-elettrici/cablaggi-condizionamento', description: '[Descrizione placeholder]' },
    { title: 'Cablaggi per vending machines', path: '/case-history/cablaggi-elettrici/cablaggi-vending', description: '[Descrizione placeholder]' },
    { title: 'Cablaggi per apparecchi elettromedicali', path: '/case-history/cablaggi-elettrici/cablaggi-elettromedicali', description: '[Descrizione placeholder]' },
  ]

  return (
    <>
      <PageHeader
        title="Cablaggi elettrici"
        subtitle="[Intro case history cablaggi placeholder]"
        breadcrumbs={[
          { label: 'Case history', path: '/case-history' },
          { label: 'Cablaggi elettrici' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <SidebarNav items={sidebarNav} title="Categorie" />
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.path}
                    className="group flex flex-col sm:flex-row gap-6 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
                  >
                    <div className="sm:w-48 aspect-video bg-white/5 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white/20 text-sm">[Img]</span>
                    </div>
                    <div className="p-6 sm:py-6 sm:pr-6 sm:pl-0">
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-white/80">
                        {article.title}
                      </h3>
                      <p className="text-white/50 text-sm mb-4">{article.description}</p>
                      <div className="flex items-center gap-2 text-white/50 text-sm group-hover:text-white/70">
                        <span>Leggi</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
