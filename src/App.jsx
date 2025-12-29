import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Pages
import Home from './pages/Home'
import Settori from './pages/Settori'
import Contatti from './pages/Contatti'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'

// Azienda
import AziendaIndex from './pages/azienda/index'
import PuntiDiForza from './pages/azienda/PuntiDiForza'
import Network from './pages/azienda/Network'

// Prodotti
import ProdottiIndex from './pages/prodotti/index'
import SensoriLivelloCarburante from './pages/prodotti/SensoriLivelloCarburante'
import CablaggiElettrici from './pages/prodotti/CablaggiElettrici'
import QuadriElettrici from './pages/prodotti/QuadriElettrici'
import SondeTemperatura from './pages/prodotti/SondeTemperatura'

// Qualità
import QualitaIndex from './pages/qualita/index'
import Codesign from './pages/qualita/Codesign'
import Tecnologia from './pages/qualita/Tecnologia'
import Certificazioni from './pages/qualita/Certificazioni'
import Brevetti from './pages/qualita/Brevetti'
import Riconoscimenti from './pages/qualita/Riconoscimenti'

// Servizi
import ServiziIndex from './pages/servizi/index'
import Progettazione from './pages/servizi/Progettazione'
import Produzione from './pages/servizi/Produzione'

// Case History
import CaseHistoryIndex from './pages/case-history/index'
import CaseHistorySensori from './pages/case-history/SensoriLivelloCarburante'
import CaseHistoryCablaggi from './pages/case-history/CablaggiElettrici'
import CaseHistoryQuadri from './pages/case-history/QuadriElettrici'
import ArticleDetail from './pages/case-history/ArticleDetail'

// Sostenibilità
import SostenibilitaIndex from './pages/sostenibilita/index'
import EtichettaturaAmbientale from './pages/sostenibilita/EtichettaturaAmbientale'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/azienda" element={<AziendaIndex />} />
        <Route path="/azienda/punti-di-forza" element={<PuntiDiForza />} />
        <Route path="/azienda/network" element={<Network />} />
        <Route path="/prodotti" element={<ProdottiIndex />} />
        <Route path="/prodotti/sensori-livello-carburante" element={<SensoriLivelloCarburante />} />
        <Route path="/prodotti/cablaggi-elettrici" element={<CablaggiElettrici />} />
        <Route path="/prodotti/quadri-elettrici" element={<QuadriElettrici />} />
        <Route path="/prodotti/sonde-temperatura" element={<SondeTemperatura />} />
        <Route path="/settori" element={<Settori />} />
        <Route path="/qualita" element={<QualitaIndex />} />
        <Route path="/qualita/codesign" element={<Codesign />} />
        <Route path="/qualita/tecnologia" element={<Tecnologia />} />
        <Route path="/qualita/certificazioni" element={<Certificazioni />} />
        <Route path="/qualita/brevetti" element={<Brevetti />} />
        <Route path="/qualita/riconoscimenti" element={<Riconoscimenti />} />
        <Route path="/servizi" element={<ServiziIndex />} />
        <Route path="/servizi/progettazione" element={<Progettazione />} />
        <Route path="/servizi/produzione" element={<Produzione />} />
        <Route path="/case-history" element={<CaseHistoryIndex />} />
        <Route path="/case-history/sensori-livello-carburante" element={<CaseHistorySensori />} />
        <Route path="/case-history/cablaggi-elettrici" element={<CaseHistoryCablaggi />} />
        <Route path="/case-history/quadri-elettrici" element={<CaseHistoryQuadri />} />
        <Route path="/case-history/:category/:slug" element={<ArticleDetail />} />
        <Route path="/sostenibilita" element={<SostenibilitaIndex />} />
        <Route path="/sostenibilita/etichettatura-ambientale" element={<EtichettaturaAmbientale />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Route>
    </Routes>
  )
}

export default App
