import React from 'react'
import Hero from './hero'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Resume from './Resume'

function Theone() {
  return (
    <div className="flex h-screen">
  {/* Left (Sticky) Box */}
  <div className="centerbox w-[500px] h-screen bg-white border-r-2 border-black fixed top-0 left-0 flex justify-center items-center">
    <Hero/>

  </div>

  {/* Right Box */}
  <div className="rightbox ml-[500px] flex-1 h-screen overflow-y-scroll bg-black text-white border-l-2 border-black p-4 ">
    <div className='inner_rightbox '>
      <About/>
    </div>
    <div>
      <Projects/>
    </div>
    <div>
      <Resume/>
    </div>
    <div>
      <Experience/>
    </div>
  </div>
</div>
  )
}

export default Theone