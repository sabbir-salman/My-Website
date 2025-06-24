import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <HeroSection />

      </div>

    </>
  )
}

export default App
