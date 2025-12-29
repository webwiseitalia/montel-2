import { Link } from 'react-router-dom'

export default function PageHeader({ title, breadcrumbs = [], subtitle = '' }) {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="container">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6">
            <ul className="flex items-center justify-center gap-2 text-sm text-white/50">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>/</span>
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-accent transition-colors">
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
        <h1 className="text-display text-white text-center">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-body-lg text-muted mt-6 max-w-3xl mx-auto text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
