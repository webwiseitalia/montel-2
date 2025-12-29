export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-widest uppercase">
                Anduril
              </span>
            </a>
            <p className="text-white/40 text-sm max-w-xs">
              Building the software-defined defense systems of the future.
            </p>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Lattice</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Ghost</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Anvil</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Dive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">News</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Anduril Industries, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
