import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function PrivacyPolicy() {
  const { company, contact, address, fiscal, policyLastUpdate } = siteData

  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a1a] py-6">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla Home
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#1a1a1a] py-12 pb-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">Privacy Policy</h1>
              <p className="text-white/60">Informativa sul trattamento dei dati personali</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
            <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: {policyLastUpdate}</p>

            {/* 1. Titolare del Trattamento */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Titolare del Trattamento</h2>
              <p className="text-gray-600 mb-4">Il Titolare del trattamento dei dati personali è:</p>
              <div className="bg-gray-50 border-l-4 border-accent p-4 rounded-r">
                <p className="font-semibold text-gray-900">{company.name}</p>
                <p className="text-gray-600 flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {address.full}
                </p>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contact.phone}
                </p>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contact.email}
                </p>
                <p className="text-gray-600 mt-1">P.IVA: {fiscal.vatNumber}</p>
              </div>
            </div>

            {/* 2. Dati Raccolti */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Dati forniti volontariamente dall'utente</h3>
              <p className="text-gray-600 mb-4">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
                <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
                <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
                <li><strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r mb-6">
                <p className="font-semibold text-amber-800 mb-2">Finalità:</p>
                <p className="text-amber-700">I dati vengono raccolti esclusivamente per:</p>
                <ul className="list-disc list-inside text-amber-700 mt-2 space-y-1">
                  <li>Rispondere alle richieste di preventivo</li>
                  <li>Fornire informazioni sui nostri servizi</li>
                  <li>Organizzare sopralluoghi e consultazioni</li>
                  <li>Gestire la relazione commerciale</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Base giuridica del trattamento</h3>
              <p className="text-gray-600">
                Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso
                l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
              </p>
            </div>

            {/* 3. Modalità di Trattamento */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Modalità di Trattamento</h2>
              <p className="text-gray-600 mb-4">
                I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle
                finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
              </p>
              <p className="text-gray-600">
                Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non
                autorizzati, perdita, distruzione o divulgazione.
              </p>
            </div>

            {/* 4. Conservazione dei Dati */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Conservazione dei Dati</h2>
              <p className="text-gray-600 mb-4">
                I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le
                relazioni commerciali conseguenti:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
                <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
                <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
              </ul>
            </div>

            {/* 5. Comunicazione e Diffusione dei Dati */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Comunicazione e Diffusione dei Dati</h2>
              <p className="text-gray-600 mb-4">
                I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
                <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
                <li>Autorità competenti in caso di richieste legittime previste per legge</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                <p className="font-semibold text-red-800 mb-2">I tuoi dati NON verranno MAI:</p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Venduti a terze parti</li>
                  <li>Condivisi con scopi di marketing</li>
                  <li>Utilizzati per invio di newsletter non richieste</li>
                  <li>Trasferiti fuori dall'Unione Europea</li>
                </ul>
              </div>
            </div>

            {/* 6. Diritti dell'Interessato */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Diritti dell'Interessato</h2>
              <p className="text-gray-600 mb-4">In qualità di interessato, hai il diritto di:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
                <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
                <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
                <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
                <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
                <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
                <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                <p className="font-semibold text-blue-800 mb-2">Come esercitare i tuoi diritti:</p>
                <p className="text-blue-700">
                  Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${contact.email}`} className="underline hover:text-blue-900">{contact.email}</a> o tramite raccomandata A/R
                  all'indirizzo: {address.full}.
                </p>
                <p className="text-blue-700 mt-2">Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.</p>
              </div>
            </div>

            {/* 7. Diritto di Reclamo */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Diritto di Reclamo</h2>
              <p className="text-gray-600 mb-4">
                Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il
                trattamento dei tuoi dati violi il GDPR.
              </p>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r">
                <p className="font-semibold text-gray-800 mb-2">Garante per la protezione dei dati personali:</p>
                <p className="text-gray-600">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.garanteprivacy.it</a></p>
                <p className="text-gray-600">Email: garante@gpdp.it</p>
                <p className="text-gray-600">PEC: protocollo@pec.gpdp.it</p>
              </div>
            </div>

            {/* 8. Cookie e Tecnologie di Tracciamento */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
              <p className="text-gray-600">
                Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni,
                consulta la nostra <Link to="/cookie-policy" className="text-accent hover:underline">Cookie Policy</Link>.
              </p>
            </div>

            {/* 9. Modifiche alla Privacy Policy */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Modifiche alla Privacy Policy</h2>
              <p className="text-gray-600">
                Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche
                saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a
                consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
              </p>
            </div>

            {/* 10. Contatti */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contatti</h2>
              <p className="text-gray-600 mb-4">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
              <div className="bg-gray-50 border-l-4 border-accent p-4 rounded-r">
                <p className="text-gray-600 flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {contact.email}
                </p>
                <p className="text-gray-600 flex items-center gap-2 mt-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contact.phone}
                </p>
              </div>
            </div>

            {/* Footer note */}
            <div className="border-t border-gray-200 pt-6 mt-10">
              <p className="text-sm text-gray-500 text-center">
                Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs.
                101/2018
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/" className="btn btn-outline !border-gray-300 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900">
              Torna alla Home
            </Link>
            <Link to="/cookie-policy" className="btn btn-outline !border-gray-300 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900">
              Leggi la Cookie Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
