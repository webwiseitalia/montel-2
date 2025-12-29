import { Link } from 'react-router-dom'

export default function CTABanner({ title = '[Titolo CTA placeholder]', buttonText = 'Richiedi informazioni', buttonLink = '/contatti' }) {
  return (
    <section className="section bg-brand-blue relative overflow-hidden">
      <div className="grid-lines" />
      <div className="container relative z-10 text-center">
        <h3 className="text-headline text-white mb-8">
          {title}
        </h3>
        <Link to={buttonLink} className="btn btn-primary !bg-white !text-brand-blue hover:!bg-accent hover:!text-white">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
