
import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen text-zinc-200 font-display bg-hero">
      <Navbar/>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}