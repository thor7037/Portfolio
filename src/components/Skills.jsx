
import React from 'react'
import { skills } from '../data/skills'

export function Skills(){
  return (
    <section className="py-16">
      <h2 className="section-title">Skills</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map(s => (
          <span key={s} className="badge">{s}</span>
        ))}
      </div>
    </section>
  )
}
