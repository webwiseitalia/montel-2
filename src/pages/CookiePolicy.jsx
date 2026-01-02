import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookiePolicy() {
  const { company, contact, address, policyLastUpdate } = siteData

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">Cookie Policy</h1>
              <p className="text-white/60">Informativa sull'utilizzo dei cookie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
            <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: {policyLastUpdate}</p>

            {/* Privacy-Friendly Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Sito Privacy-Friendly</h3>
                  <p className="text-green-700">
                    Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie
                    di profilazione, tracciamento o analisi</strong>. La tua privacy è protetta e non serve il tuo consenso per
                    la navigazione.
                  </p>
                </div>
              </div>
            </div>

            {/* 1. Cosa sono i Cookie */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Cosa sono i Cookie</h2>
              <p className="text-gray-600">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
                quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
                informazioni sulle tue preferenze o azioni passate.
              </p>
            </div>

            {/* 2. Tipologie di Cookie */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Tipologie di Cookie</h2>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Cookie Tecnici</h3>
              <p className="text-gray-600 mb-4">
                Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza
                questi cookie, il sito potrebbe non funzionare correttamente.
              </p>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r mb-6">
                <p className="font-semibold text-gray-800 mb-2">Cookie tecnici utilizzati su questo sito:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Cookie di navigazione e di sessione</li>
                  <li>Cookie per memorizzare la preferenza dell'interfaccia</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Cookie Analitici</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="font-semibold text-red-800">NON UTILIZZATI</span>
                </div>
                <p className="text-red-700">
                  Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.3 Cookie di Profilazione</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="font-semibold text-red-800">NON UTILIZZATI</span>
                </div>
                <p className="text-red-700">
                  Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.4 Cookie di Terze Parti</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span className="font-semibold text-red-800">NON UTILIZZATI</span>
                </div>
                <p className="text-red-700">
                  Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                </p>
              </div>
            </div>

            {/* 3. Cookie Utilizzati */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Cookie Utilizzati su Questo Sito</h2>
              <p className="text-gray-600 mb-4">Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Nome Cookie</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Tipologia</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Finalità</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">montel-2-cookie-consent</td>
                      <td className="px-4 py-3 border-b">
                        <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          Tecnico
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">
                        Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">1 anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r mt-4">
                <p className="text-amber-800">
                  <strong>Nota importante:</strong> I cookie tecnici come "sidebar:state" sono essenziali per il funzionamento del sito e non richiedono il
                  consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
                </p>
              </div>
            </div>

            {/* 4. Come Gestire i Cookie */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Come Gestire i Cookie</h2>
              <p className="text-gray-600 mb-4">
                Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
                del tuo browser:
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">Disabilitare i cookie tramite il browser:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
                <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
                <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r">
                <p className="text-amber-800">
                  <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                  qualità dell'esperienza di navigazione.
                </p>
              </div>
            </div>

            {/* 5. Link a Siti Esterni */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Link a Siti Esterni</h2>
              <p className="text-gray-600">
                Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
                il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
              </p>
            </div>

            {/* 6. Aggiornamenti */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Aggiornamenti della Cookie Policy</h2>
              <p className="text-gray-600 mb-4">
                Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
                attraverso un avviso pubblicato su questa pagina.
              </p>
              <p className="text-gray-600">
                Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro
                sito.
              </p>
            </div>

            {/* 7. Base Normativa */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Base Normativa</h2>
              <p className="text-gray-600 mb-4">Questa Cookie Policy è redatta in conformità a:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
                <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
                <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
                <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
              </ul>
            </div>

            {/* 8. Contatti */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Contatti</h2>
              <p className="text-gray-600 mb-4">Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
              <div className="bg-gray-50 border-l-4 border-accent p-4 rounded-r">
                <p className="font-semibold text-gray-900">{company.name}</p>
                <p className="text-gray-600">{address.full}</p>
                <p className="text-gray-600 mt-2">Email: <a href={`mailto:${contact.email}`} className="text-accent hover:underline">{contact.email}</a></p>
                <p className="text-gray-600">Tel: <a href={`tel:${contact.phoneClean}`} className="text-accent hover:underline">{contact.phone}</a></p>
              </div>
            </div>

            {/* Zero Tracking Badge */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Zero Tracciamento</h3>
              <p className="text-green-700">
                Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/" className="btn btn-outline !border-gray-300 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900">
              Torna alla Home
            </Link>
            <Link to="/privacy-policy" className="btn btn-outline !border-gray-300 !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900">
              Leggi la Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
