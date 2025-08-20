import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from './components/NavBar/NavBar'
import { AboutMe } from './components/AboutMe/AboutMe'
import MyProjects from './components/MyProjects/MyProjects'
import Skills from './components/Skills/Skills'
import Events from './components/Events/Events'
import WrittingSpace from './components/WritingSpace/WritingSpace'
import Moments from './components/Moments/Moments'

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
        <Events />
        <WrittingSpace />
        <Moments />

      </div>

    </>
  )
}

export default App
