import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'



const Home = () => {
  return (
    <div name = 'home' className = 'w-full h-screen bg-[#0a192f]'>
      {/* Container*/}
      <div className = 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className = 'text-red-400'>Hi, my name is</p>
        <h1 className = 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jacob Ma</h1>
        <h2 className = 'text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm an aspiring software engineer</h2>
        <p className = 'text-[#8892b0] py-4 max-w-[700px]'>
          Currently, I am a student attending the University of California, San Diego studying 
          Mathematics and Computer Science. 
        </p>
        <div>
            <Link to="contact" smooth={true} offset = {-50} duration={500}>
            <button className = 'text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400'>Get in Touch
            <span className = 'group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className = 'ml-3'/>
            </span>
            </button>
            </Link>
        </div>
      </div>
    
    </div>
  )
}

export default Home;