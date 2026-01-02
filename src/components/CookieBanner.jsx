import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const location = useLocation()
  const { cookieConsentKey } = siteData

  // Pagine dove NON applicare il blur (le policy)
  const policyPages = ['/privacy-policy', '/cookie-policy']
  const isOnPolicyPage = policyPages.includes(location.pathname)

  useEffect(() => {
    // Controlla se l'utente ha già dato il consenso
    const consent = localStorage.getItem(cookieConsentKey)
    if (!consent) {
      setShowBanner(true)
    }
  }, [cookieConsentKey])

  const handleAccept = () => {
    localStorage.setItem(cookieConsentKey, 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(cookieConsentKey, 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay blur - solo se NON siamo su pagine policy */}
      {!isOnPolicyPage && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
          aria-hidden="true"
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Utilizziamo i Cookie</h2>
                <p className="text-gray-500 text-sm">Informativa sull'utilizzo dei cookie tecnici</p>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                Questo sito utilizza esclusivamente <strong>cookie tecnici</strong> necessari al funzionamento.
                Non utilizziamo cookie di profilazione, tracciamento o analisi.
              </p>
              <p className="text-gray-600">
                Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/cookie-policy" className="text-accent hover:underline font-medium">
                  Cookie Policy
                </Link>{' '}
                e la{' '}
                <Link to="/privacy-policy" className="text-accent hover:underline font-medium">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            {/* Buttons - stessa dimensione e stile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-brand-blue text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-brand-red transition-colors duration-300"
              >
                Accetta
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 bg-brand-blue text-white font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-brand-red transition-colors duration-300"
              >
                Rifiuta
              </button>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              Cliccando "Rifiuta" i cookie tecnici essenziali rimarranno comunque attivi per garantire il funzionamento del sito.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
