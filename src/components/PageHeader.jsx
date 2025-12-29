import { Link } from 'react-router-dom'

export default function PageHeader({ title, breadcrumbs = [], subtitle = '' }) {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6">
            <ul className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>/</span>
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-white/60 mt-6 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
