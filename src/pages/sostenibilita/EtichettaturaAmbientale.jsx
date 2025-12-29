import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function EtichettaturaAmbientale() {
  const materials = [
    { materiale: '[Materiale 1]', codice: '[Codice]', destinazione: '[Destinazione rifiuto]' },
    { materiale: '[Materiale 2]', codice: '[Codice]', destinazione: '[Destinazione rifiuto]' },
    { materiale: '[Materiale 3]', codice: '[Codice]', destinazione: '[Destinazione rifiuto]' },
    { materiale: '[Materiale 4]', codice: '[Codice]', destinazione: '[Destinazione rifiuto]' },
    { materiale: '[Materiale 5]', codice: '[Codice]', destinazione: '[Destinazione rifiuto]' },
  ]

  return (
    <>
      <PageHeader
        title="Etichettatura ambientale"
        breadcrumbs={[
          { label: 'Sostenibilità', path: '/sostenibilita' },
          { label: 'Etichettatura ambientale' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Intro */}
          <p className="text-white/60 text-lg mb-12">
            [Intro etichettatura ambientale placeholder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.]
          </p>

          {/* Tabella materiali imballo */}
          <h2 className="text-2xl font-light text-white mb-6">[Materiali imballo]</h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white/60 text-sm uppercase tracking-wider py-4 pr-6">Materiale</th>
                  <th className="text-left text-white/60 text-sm uppercase tracking-wider py-4 pr-6">Codice</th>
                  <th className="text-left text-white/60 text-sm uppercase tracking-wider py-4">Destinazione</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((row, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="text-white py-4 pr-6">{row.materiale}</td>
                    <td className="text-white/60 py-4 pr-6">{row.codice}</td>
                    <td className="text-white/60 py-4">{row.destinazione}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download */}
          <div className="bg-white/5 border border-white/10 p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-medium mb-1">[Download documentazione]</h3>
              <p className="text-white/50 text-sm">[Descrizione documento placeholder]</p>
            </div>
            <button className="btn-secondary whitespace-nowrap">
              Scarica PDF
            </button>
          </div>

          {/* Note normative */}
          <div className="bg-white/5 border-l-2 border-white/30 p-6">
            <h3 className="text-white font-medium mb-3">[Note normative]</h3>
            <p className="text-white/50 text-sm">
              [Note normative etichettatura ambientale placeholder. Riferimenti a normative vigenti, obblighi di legge, etc.]
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
