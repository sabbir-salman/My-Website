import React, { PureComponent } from 'react'
import style from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav className={`${style.navBar} container`}>
      <div className='logo'>
        <img src="vite.svg" alt="logo" />
      </div>

      <ul>
        <li herf="#home">Home</li>
        <li herf="#about">About</li>
        <li herf="#skills">Skills</li>
        <li herf="#projects">Projects</li>
        <li herf="#contact">Contact</li>
        <li herf="#blog">Blog</li>
        <li herf="#resume">Resume</li>
      </ul>

    </nav>
  )
}

export default NavBar
