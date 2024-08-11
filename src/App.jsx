import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/projects/Project'
import Contact from './components/Contact'
import Experience from './components/Experience'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Skills/>
      <Contact/>
   
    </div>
  )
}

export default App
