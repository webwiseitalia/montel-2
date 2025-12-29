import { Link } from 'react-router-dom'

export default function CTABanner({ title = '[Titolo CTA placeholder]', buttonText = 'Richiedi informazioni', buttonLink = '/contatti' }) {
  return (
    <section className="bg-white/5 border-y border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-2xl md:text-3xl font-light text-white text-center md:text-left">
          {title}
        </h3>
        <Link to={buttonLink} className="btn-primary whitespace-nowrap">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
