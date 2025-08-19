import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import { AboutMe } from './components/AboutMe/AboutMe'
import MyProjects from './components/MyProjects/MyProjects'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <HeroSection />
        <AboutMe />
        <MyProjects />
        <Skills/>

      </div>

    </>
  )
}

export default App
