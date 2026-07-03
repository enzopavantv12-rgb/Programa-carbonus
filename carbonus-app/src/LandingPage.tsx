import { useState, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Purpose from './components/Purpose'
import SignupForm from './components/SignupForm'
import SuccessScreen from './components/SuccessScreen'

const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Benefits   = lazy(() => import('./components/Benefits'))
const Footer     = lazy(() => import('./components/Footer'))

function SectionSkeleton({ height = 480 }: { height?: number }) {
  return (
    <div
      style={{ height, background: 'var(--bg-dark)', width: '100%' }}
      aria-hidden="true"
    />
  )
}

export default function LandingPage() {
  const [globalId, setGlobalId] = useState<string | null>(null)

  return (
    <>
      <Hero />
      <Purpose />
      <Suspense fallback={<SectionSkeleton height={640} />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionSkeleton height={800} />}>
        <Benefits />
      </Suspense>
      {globalId
        ? <SuccessScreen globalId={globalId} />
        : <SignupForm onSuccess={setGlobalId} />
      }
      <Suspense fallback={<SectionSkeleton height={300} />}>
        <Footer />
      </Suspense>
    </>
  )
}
