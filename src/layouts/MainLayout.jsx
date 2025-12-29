import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Determina se siamo su una pagina policy (no footer)
  const policyPages = ['/privacy-policy', '/cookie-policy']
  const isOnPolicyPage = policyPages.includes(pathname)

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className={`flex-1 ${isOnPolicyPage ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      {!isOnPolicyPage && <Footer />}
      <CookieBanner />
    </div>
  )
}
