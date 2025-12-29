import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function CaseHistoryIndex() {
  const categories = [
    {
      title: 'Sensori di livello carburante',
      path: '/case-history/sensori-livello-carburante',
      count: '1'
    },
    {
      title: 'Cablaggi elettrici',
      path: '/case-history/cablaggi-elettrici',
      count: '5'
    },
    {
      title: 'Quadri elettrici',
      path: '/case-history/quadri-elettrici',
      count: '1'
    },
  ]

  return (
    <>
      <PageHeader
        title="Case history"
        subtitle="[Intro case history placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit.]"
        breadcrumbs={[{ label: 'Case history' }]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={cat.path}
                className="group bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video bg-white/5 flex items-center justify-center">
                  <span className="text-white/20">[Immagine categoria]</span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-medium text-white mb-2 group-hover:text-white/80">
                    {cat.title}
                  </h2>
                  <p className="text-white/40 text-sm mb-4">{cat.count} case history</p>
                  <div className="flex items-center gap-2 text-white/50 text-sm group-hover:text-white/70">
                    <span>Esplora</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="[Vuoi diventare una nostra case history?]" />
    </>
  )
}
