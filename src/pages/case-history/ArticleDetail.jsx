import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import SidebarNav from '../../components/SidebarNav'
import CTABanner from '../../components/CTABanner'

export default function ArticleDetail() {
  const { category, slug } = useParams()

  // Navigation based on category
  const categoryNav = {
    'sensori-livello-carburante': [
      { label: 'Sensori di livello carburante resistivi', path: '/case-history/sensori-livello-carburante/sensori-resistivi' },
    ],
    'cablaggi-elettrici': [
      { label: 'Cablaggio per auto', path: '/case-history/cablaggi-elettrici/cablaggio-auto' },
      { label: 'Cablaggio per moto', path: '/case-history/cablaggi-elettrici/cablaggio-moto' },
      { label: 'Cablaggi per il condizionamento', path: '/case-history/cablaggi-elettrici/cablaggi-condizionamento' },
      { label: 'Cablaggi per vending machines', path: '/case-history/cablaggi-elettrici/cablaggi-vending' },
      { label: 'Cablaggi per apparecchi elettromedicali', path: '/case-history/cablaggi-elettrici/cablaggi-elettromedicali' },
    ],
    'quadri-elettrici': [
      { label: 'Quadri elettrici', path: '/case-history/quadri-elettrici/quadri-elettrici' },
    ],
  }

  const categoryLabels = {
    'sensori-livello-carburante': 'Sensori di livello carburante',
    'cablaggi-elettrici': 'Cablaggi elettrici',
    'quadri-elettrici': 'Quadri elettrici',
  }

  const sidebarItems = categoryNav[category] || []
  const categoryLabel = categoryLabels[category] || category

  // Generate title from slug
  const title = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '[Titolo articolo]'

  return (
    <>
      <PageHeader
        title={`[${title}]`}
        breadcrumbs={[
          { label: 'Case history', path: '/case-history' },
          { label: categoryLabel, path: `/case-history/${category}` },
          { label: title }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Menu laterale gerarchico */}
            <div className="lg:col-span-1">
              <SidebarNav items={sidebarItems} title={categoryLabel} />
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center mb-12">
                <span className="text-white/30">[Immagine principale articolo]</span>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-white/60 text-lg mb-6">
                  [Testo descrittivo articolo placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
                </p>

                <p className="text-white/60 mb-6">
                  [Secondo paragrafo placeholder. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.]
                </p>

                <h2 className="text-2xl font-light text-white mt-12 mb-6">[Sottotitolo sezione]</h2>

                <p className="text-white/60 mb-6">
                  [Contenuto sezione placeholder. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.]
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-12">
                  <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-white/20 text-sm">[Immagine 1]</span>
                  </div>
                  <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-white/20 text-sm">[Immagine 2]</span>
                  </div>
                </div>

                <p className="text-white/60">
                  [Conclusione articolo placeholder. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
