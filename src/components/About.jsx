import React from 'react'

export function About(){
  return (
 <section className="section">
      <h2 className="text-3xl md:text-4xl font-extrabold gradient-text mb-8">About</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="card p-6">
          <p className="opacity-85">
           I am a React Native developer specializing in cross‑platform app development for iOS and Android.
           I enjoy building scalable, performant apps with clean architecture and a great user experience.
           I have hands‑on experience with Redux, REST APIs, Firebase, native modules, and modern tooling.
          </p>
        </div>
        <div className="card p-8 flex flex-col items-center">
          <div className="orbit">
            <div className="ring">
              <div className="icon" style={{top:'-10px', left:'calc(50% - 19px)'}}>🔧</div>
              <div className="icon" style={{top:'calc(50% - 19px)', left:'-10px'}}>⚛️</div>
              <div className="icon" style={{bottom:'-10px', left:'calc(50% - 19px)'}}>💎</div>
              <div className="icon" style={{top:'calc(50% - 19px)', right:'-10px'}}>📱</div>
            </div>
            <div className="ring reverse">
              <div className="icon" style={{top:'30px', left:'30px'}}>🧪</div>
              <div className="icon" style={{top:'30px', right:'30px'}}>🧰</div>
              <div className="icon" style={{bottom:'30px', left:'30px'}}>⚙️</div>
              <div className="icon" style={{bottom:'30px', right:'30px'}}>🛰️</div>
            </div>
          </div>
          <div className="mt-6 text-sm opacity-70">Orbiting skills & tools</div>
        </div>
      </div>
    </section>
  )
}
