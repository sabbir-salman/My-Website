import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import { AboutMe } from './components/AboutMe/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <AboutMe/>

      </div>

    </>
  )
}

export default App
