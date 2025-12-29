export default function TextBlock({
  eyebrow = '',
  title = '',
  description = '',
  align = 'left',
  size = 'large'
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const titleSize = size === 'large' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-widest opacity-50 mb-4">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className={`${titleSize} font-light leading-tight mb-6`}>
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg opacity-60 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
