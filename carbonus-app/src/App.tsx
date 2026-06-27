import { useState } from 'react'
import Hero from './components/Hero'
import Purpose from './components/Purpose'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import SignupForm from './components/SignupForm'
import SuccessScreen from './components/SuccessScreen'
import Footer from './components/Footer'

export default function App() {
  const [globalId, setGlobalId] = useState<string | null>(null)

  return (
    <>
      <Hero />
      <Purpose />
      <HowItWorks />
      <Benefits />
      {globalId
        ? <SuccessScreen globalId={globalId} />
        : <SignupForm onSuccess={setGlobalId} />
      }
      <Footer />
    </>
  )
}
