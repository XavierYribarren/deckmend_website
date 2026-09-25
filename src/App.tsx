import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { StepsSection } from './components/steps/StepsSection'
import { DownloadProvider } from './download/DownloadProvider'
import { useScrollReveal } from './hooks/useScrollReveal'
import { I18nProvider } from './i18n/I18nProvider'

// `?hero=B` affiche la variante alternative du hero
const heroVariant = new URLSearchParams(window.location.search).get('hero')?.toUpperCase() === 'B' ? 'B' : 'A'

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}

function Page() {
  useScrollReveal()

  return (
    <DownloadProvider>
      <Header />
      <main className="container">
        <Hero variant={heroVariant} />
        <ProblemSection />
        <StepsSection />
        <CtaSection />
      </main>
      <div className="container">
        <Footer />
      </div>
    </DownloadProvider>
  )
}
