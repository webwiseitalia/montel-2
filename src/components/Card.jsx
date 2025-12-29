export default function Card({
  title = '',
  description = '',
  image = null,
  link = '#',
  dark = true
}) {
  const bgClass = dark ? 'bg-white/[0.02] border-white/10 hover:border-white/30' : 'bg-black/[0.02] border-black/10 hover:border-black/30'
  const textClass = dark ? 'text-white' : 'text-[#010101]'

  return (
    <a href={link} className={`block border ${bgClass} p-8 transition-all duration-300 group`}>
      {image && (
        <div className="aspect-video mb-6 overflow-hidden bg-white/5">
          <div className="w-full h-full flex items-center justify-center opacity-30">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      )}

      {title && (
        <h3 className={`text-xl font-medium mb-3 ${textClass} group-hover:opacity-70 transition-opacity`}>
          {title}
        </h3>
      )}

      {description && (
        <p className={`${textClass} opacity-50 text-sm leading-relaxed`}>
          {description}
        </p>
      )}

      <div className={`flex items-center gap-2 mt-6 text-sm ${textClass} opacity-50 group-hover:opacity-100 transition-opacity`}>
        <span>Learn more</span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  )
}
