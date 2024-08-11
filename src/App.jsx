import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/projects/Project'
import Contact from './components/Contact'
import CircularFollower from './components/CircularFollower'

const App = () => {
  return (
    <div>
      <CircularFollower/>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
   
    </div>
  )
}

export default App
