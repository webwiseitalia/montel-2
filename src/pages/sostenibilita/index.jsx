import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function SostenibilitaIndex() {
  const items = [
    {
      title: 'Etichettatura ambientale',
      description: '[Descrizione etichettatura placeholder]',
      type: 'page',
      path: '/sostenibilita/etichettatura-ambientale'
    },
    {
      title: 'Politica aziendale integrata',
      description: '[Descrizione politica integrata placeholder]',
      type: 'download',
      path: '#'
    },
    {
      title: 'Politica ambiente e sicurezza',
      description: '[Descrizione politica ambiente placeholder]',
      type: 'download',
      path: '#'
    },
    {
      title: 'Codice etico e di condotta',
      description: '[Descrizione codice etico placeholder]',
      type: 'download',
      path: '#'
    },
    {
      title: 'Whistleblowing',
      description: '[Descrizione whistleblowing placeholder]',
      type: 'external',
      path: '#'
    },
  ]

  return (
    <>
      <PageHeader
        title="Sostenibilità"
        subtitle="[Intro sostenibilità placeholder. Lorem ipsum dolor sit amet.]"
        breadcrumbs={[{ label: 'Sostenibilità' }]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const isPage = item.type === 'page'
              const isDownload = item.type === 'download'
              const isExternal = item.type === 'external'

              const content = (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    {isDownload && (
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                    {isExternal && (
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    )}
                    {isPage && (
                      <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      {isDownload ? 'Download' : isExternal ? 'Link esterno' : 'Pagina'}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-white/80">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {item.description}
                  </p>
                </>
              )

              if (isPage) {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="group bg-white/[0.02] border border-white/10 p-6 hover:border-white/30 transition-all"
                  >
                    {content}
                  </Link>
                )
              }

              return (
                <a
                  key={index}
                  href={item.path}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group bg-white/[0.02] border border-white/10 p-6 hover:border-white/30 transition-all"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner title="[Hai domande sulla nostra politica di sostenibilità?]" />
    </>
  )
}
