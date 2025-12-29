import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 lg:px-12 py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span className="text-black font-bold text-lg">A</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-widest uppercase hidden sm:block">
            Anduril
          </span>
        </a>

        {/* Nav Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="nav-link text-sm uppercase tracking-wider">Mission</a>
          <a href="#" className="nav-link text-sm uppercase tracking-wider">Products</a>
          <a href="#" className="nav-link text-sm uppercase tracking-wider">Technology</a>
          <a href="#" className="nav-link text-sm uppercase tracking-wider">Careers</a>
          <a href="#" className="nav-link text-sm uppercase tracking-wider">News</a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="btn-secondary">
            Contact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
          <span className={`w-6 h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 px-6 py-8">
          <nav className="flex flex-col gap-6">
            <a href="#" className="text-white text-lg">Mission</a>
            <a href="#" className="text-white text-lg">Products</a>
            <a href="#" className="text-white text-lg">Technology</a>
            <a href="#" className="text-white text-lg">Careers</a>
            <a href="#" className="text-white text-lg">News</a>
          </nav>
        </div>
      )}
    </header>
  )
}
