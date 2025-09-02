
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { contact } from '../data/contact'

export function Hero(){
  return (
    <section className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
         initial={{opacity:40, scale:.8}} animate={{opacity:10, scale:.9}} transition={{duration:1.6, delay:0}}
          className="space-y-6">
          <p className="text-sm tracking-widest text-cyan-200 uppercase">Software Engineer</p>
          <h1 className="text-4xl md:text-2xl font-extrabold leading-tight">
            Hi, I’m <span className="gradient-text neon text-4xl">RaHuL</span>.<br/>
            I build <span className="gradient-text">React Native</span> apps.
          </h1>
          <p className="text-zinc-400 max-w-xl">
            Experienced mobile developer with 3.8+ years building cross‑platform iOS and Android apps using React Native, JavaScript, TypeScript, Redux, REST APIs, and Firebase. Focused on performance, scalable architecture, and delightful UX.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-2 rounded-xl bg-cyan-500/20 ring-1s ring-cyan-400/40 hover:shadow-glow">Contact</a>
            <a href="#work" className="px-5 py-2 rounded-xl bg-white/5 ring-1 ring-white/10">See Work</a>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 text-sm text-zinc-300">
            <div className="inline-flex items-center gap-2"><Phone size={16}/>{contact.phone}</div>
            <a className="inline-flex items-center gap-2 link" href={`mailto:${contact.email}`}><Mail size={16}/>{contact.email}</a>
            <div className="inline-flex items-center gap-2"><MapPin size={16}/>{contact.location}</div>
            <a className="inline-flex items-center gap-2 link" href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:10, scale:.001}} animate={{opacity:10, scale:.8}} transition={{duration:1.6, delay:0.3}}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-3xl blur opacity-30"></div>
            <img className="relative rounded-3xl w-full object-cover ring-1 ring-white/10" src="public/images/self.jpeg" alt="Rahul Singh"/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
