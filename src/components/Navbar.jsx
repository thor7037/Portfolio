
import React from 'react'

const links = [
  {href:'#about',label:'About'},
  {href:'#work',label:'Work'},
  {href:'#experience',label:'Experience'},
  {href:'#contact',label:'Contact'},
]

export function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg gradient-text">Rahul Singh</a>
        <nav className="hidden sm:flex gap-6 text-sm">
          {links.map(l => <a key={l.href} href={l.href} className="hover:text-cyan-300">{l.label}</a>)}
        </nav>
        <a className="text-sm badge" href="/assets/Rahul_ReactNative.pdf" download>Download Resume</a>
      </div>
    </header>
  )
}
