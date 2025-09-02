
import React from 'react'

const roles = [
  {
    company: 'OHi',
    title: 'React Native Developer',
    period: '07/2023 - Present',
    points: [
  'A social network that allows people to connect in the real world with others based on “What you are doing” at that moment.',
  'Developed a React Native app for meaningful connections in Cafes, Airports, and more.',
  'Implemented a special Waitlist feature for digital influencers’ real-life recognition.',
  'Designed and built UI/UX components for seamless user interaction using React Native.',
  'Integrated RESTful APIs for real-time data synchronization.',
  'Managed app state using Redux for predictable behavior and centralized data flow.',
  'Used Git for version control and actively collaborated through code reviews and pull requests.',
  'Performed cross-device testing and optimized app performance.',
  'Extended React Native functionality by incorporating custom native modules to access device-specific features.'
]

  },
  {
    company: 'Kiwitech India',
    title: 'Associate Software Engineer — Mobile Team',
    period: '01/2022 - 06/2023',
    points: [
  'Kiwitech India is a technology services company.',
  'Started as an Associate Software Engineer and worked on 4 React Native projects across iOS and Android.',
  'Developed cross-platform mobile applications using React Native, ensuring consistent performance on both platforms.',
  'Utilized React Native with Redux for scalable and maintainable state management across complex workflows.',
  'Built dynamic navigation flows using React Navigation, including stack, tab, and drawer navigators.',
  'Integrated REST APIs into React Native apps for seamless data exchange with backend services.',
  'Leveraged Firebase for real-time databases, user authentication, and cloud functions.',
  'Enhanced UI/UX performance using Reanimated for smooth, native-like animations.',
  'Improved performance through efficient list rendering, code optimization, and memory management.',
  'Integrated interactive maps and location services using Google Maps SDK and geolocation modules.'
]

  }
]

export function Experience(){
  return (
    <section id="experience" className="py-16">
      <h2 className="section-title">Experience</h2>
      <div className="mt-6 grid gap-6">
        {roles.map((r) => (
          <div key={r.company} className="card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold">{r.title} <span className="text-zinc-400">— {r.company}</span></h3>
              <span className="text-sm text-zinc-400">{r.period}</span>
            </div>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-300">
              {r.points.map((pt,i)=><li key={i}>{pt}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
