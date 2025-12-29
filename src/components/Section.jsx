export default function Section({
  children,
  className = '',
  dark = true,
  id = ''
}) {
  return (
    <section
      id={id}
      className={`section ${dark ? 'bg-black text-white' : 'bg-beige text-[#010101]'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  )
}
