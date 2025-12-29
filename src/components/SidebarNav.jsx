import { Link, useLocation } from 'react-router-dom'

export default function SidebarNav({ items = [], title = '' }) {
  const location = useLocation()

  return (
    <aside className="lg:sticky lg:top-28">
      {title && (
        <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
          {title}
        </h3>
      )}
      <nav className="space-y-2">
        {items.map((item, index) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={index}
              to={item.path}
              className={`block py-2 px-4 text-sm border-l-2 transition-all ${
                isActive
                  ? 'border-white text-white bg-white/5'
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
