import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Import logo
import logoImg from '../assets/cab-3/cab-3-1.webp'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  const navItems = [
    { label: 'Azienda', path: '/azienda' },
    { label: 'Prodotti', path: '/prodotti' },
    { label: 'Settori', path: '/settori' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Qualità', path: '/qualita' },
    { label: 'Contatti', path: '/contatti' },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 lg:h-24 bg-black/95 backdrop-blur-sm">
        <div className="container h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="relative z-50 flex items-center gap-3">
              <img src={logoImg} alt="Mont.El" title="Mont.El - Electronic Wiring Equipment" width="120" height="40" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link to="/contatti" className="btn btn-primary">
                Contattaci
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative z-50 lg:hidden w-12 h-12 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="relative w-6 h-4">
                <span
                  className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                    menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                    menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container h-full flex flex-col justify-center">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-display text-4xl sm:text-5xl md:text-6xl font-bold text-white hover:text-accent transition-colors duration-300 ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-16 transition-all duration-500 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Link to="/contatti" className="btn btn-primary">
              Richiedi Informazioni
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
