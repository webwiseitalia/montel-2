import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import TextBlock from './components/TextBlock'
import Grid from './components/Grid'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        {/* Hero - fullscreen */}
        <Hero />

        {/* Section 1 - Testo grande su sfondo nero */}
        <Section dark={true}>
          <TextBlock
            eyebrow="Placeholder"
            title="Titolo sezione principale da personalizzare"
            description="Descrizione della sezione. Questo testo verrà sostituito con i tuoi contenuti."
          />
        </Section>

        {/* Section 2 - Sfondo chiaro beige */}
        <Section dark={false}>
          <TextBlock
            eyebrow="Placeholder"
            title="Sezione con sfondo chiaro"
            description="Layout alternativo con sfondo beige tipico di Anduril."
            align="center"
          />
          <Grid cols={3} className="mt-16">
            <Card
              title="Card 1"
              description="Placeholder per contenuto"
              image={true}
              dark={false}
            />
            <Card
              title="Card 2"
              description="Placeholder per contenuto"
              image={true}
              dark={false}
            />
            <Card
              title="Card 3"
              description="Placeholder per contenuto"
              image={true}
              dark={false}
            />
          </Grid>
        </Section>

        {/* Section 3 - Grid 2 colonne sfondo nero */}
        <Section dark={true}>
          <Grid cols={2} gap="gap-16">
            <TextBlock
              eyebrow="Placeholder"
              title="Layout a due colonne"
              description="Testo a sinistra, contenuto a destra. Modello flessibile per vari usi."
            />
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-white text-xl mb-2">Item 1</h4>
                  <p className="text-white/50">Descrizione placeholder</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-white text-xl mb-2">Item 2</h4>
                  <p className="text-white/50">Descrizione placeholder</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-white text-xl mb-2">Item 3</h4>
                  <p className="text-white/50">Descrizione placeholder</p>
                </div>
              </div>
            </div>
          </Grid>
        </Section>

        {/* Section 4 - Cards su sfondo nero */}
        <Section dark={true}>
          <TextBlock
            eyebrow="Placeholder"
            title="Griglia di cards"
            description="Sezione con cards per prodotti, servizi o features."
          />
          <Grid cols={3} className="mt-16">
            <Card title="Card A" description="Placeholder" image={true} dark={true} />
            <Card title="Card B" description="Placeholder" image={true} dark={true} />
            <Card title="Card C" description="Placeholder" image={true} dark={true} />
          </Grid>
        </Section>

        {/* Section 5 - CTA finale */}
        <Section dark={true} className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Call to Action
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Testo finale prima del footer. Invito all'azione per i visitatori.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Primary Action</button>
              <button className="btn-secondary">Secondary Action</button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  )
}

export default App
