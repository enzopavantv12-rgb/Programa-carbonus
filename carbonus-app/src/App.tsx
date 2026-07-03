import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

// Legal pages are lazy-loaded: visitors to the landing don't download doc content
const LazyTermos = lazy(async () => {
  const [{ default: LegalPage }, { termosDeUso }] = await Promise.all([
    import('./pages/LegalPage'),
    import('./data/legal'),
  ])
  return { default: () => <LegalPage doc={termosDeUso} /> }
})

const LazyPrivacidade = lazy(async () => {
  const [{ default: LegalPage }, { politicaPrivacidade }] = await Promise.all([
    import('./pages/LegalPage'),
    import('./data/legal'),
  ])
  return { default: () => <LegalPage doc={politicaPrivacidade} /> }
})

const LazySeguranca = lazy(async () => {
  const [{ default: LegalPage }, { politicaSeguranca }] = await Promise.all([
    import('./pages/LegalPage'),
    import('./data/legal'),
  ])
  return { default: () => <LegalPage doc={politicaSeguranca} /> }
})

function PageLoader() {
  return (
    <div
      style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-label="Carregando..."
    />
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/termos-de-uso"
          element={<Suspense fallback={<PageLoader />}><LazyTermos /></Suspense>}
        />
        <Route
          path="/politica-de-privacidade"
          element={<Suspense fallback={<PageLoader />}><LazyPrivacidade /></Suspense>}
        />
        <Route
          path="/politica-de-seguranca"
          element={<Suspense fallback={<PageLoader />}><LazySeguranca /></Suspense>}
        />
      </Routes>
    </BrowserRouter>
  )
}
