import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('IT')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Azienda', path: '/azienda' },
    { label: 'Prodotti', path: '/prodotti' },
    { label: 'Settori di applicazione', path: '/settori' },
    { label: 'Qualità', path: '/qualita' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Case history', path: '/case-history' },
    { label: 'Sostenibilità', path: '/sostenibilita' },
    { label: 'Contatti', path: '/contatti' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
              MONT.EL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-xs uppercase tracking-wider whitespace-nowrap ${
                  location.pathname === item.path ? 'opacity-100' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Lang + CTA */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Language selector */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLang('IT')}
                className={`px-2 py-1 ${lang === 'IT' ? 'text-white' : 'text-white/40'}`}
              >
                IT
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => setLang('EN')}
                className={`px-2 py-1 ${lang === 'EN' ? 'text-white' : 'text-white/40'}`}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <Link to="/contatti" className="btn-primary text-xs py-3 px-5">
              Richiedi informazioni
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[80vh] pb-6' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-4 pt-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white/80 hover:text-white text-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <button
                  onClick={() => setLang('IT')}
                  className={lang === 'IT' ? 'text-white' : 'text-white/40'}
                >
                  IT
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setLang('EN')}
                  className={lang === 'EN' ? 'text-white' : 'text-white/40'}
                >
                  EN
                </button>
              </div>
              <Link to="/contatti" className="btn-primary text-xs py-3 px-5">
                Richiedi informazioni
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
