import { Link } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import './LegalPage.css'

const Footer = lazy(() => import('../components/Footer'))

type Section = { id?: string; heading?: string; body: (string | string[])[] }
export type LegalDoc = {
  title: string
  updated: string
  intro?: string[]
  sections: Section[]
  footerNote?: string
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  useEffect(() => { window.scrollTo(0, 0) }, [doc.title])

  return (
    <div className="legal">
      <div className="legal__accent" aria-hidden />
      <header className="legal__topbar">
        <Link to="/" className="legal__brand">
          CAR<b>₿</b>ONUS
        </Link>
        <Link to="/" className="legal__back">← Voltar ao site</Link>
      </header>

      <main className="legal__doc">
        <p className="legal__eyebrow">Programa Carbonus® · Ecobit™</p>
        <h1 className="legal__title">{doc.title}</h1>
        <p className="legal__updated">{doc.updated}</p>

        {doc.intro?.map((p, i) => (
          <p key={i} className="legal__lead">{p}</p>
        ))}

        {doc.sections.map((s, i) => (
          <section key={i} className="legal__section" id={s.id}>
            {s.heading && <h2>{s.heading}</h2>}
            {s.body.map((block, j) =>
              Array.isArray(block)
                ? <ul key={j}>{block.map((li, k) => <li key={k}>{li}</li>)}</ul>
                : <p key={j}>{block}</p>
            )}
          </section>
        ))}

        {doc.footerNote && <p className="legal__note">{doc.footerNote}</p>}
      </main>

      <Suspense fallback={<div style={{ height: 300, background: 'var(--bg-dark)' }} />}>
        <Footer />
      </Suspense>
    </div>
  )
}
