import React from 'react'
import bgVideo from "../assets/fashion_bg.mp4"
import { motion } from 'framer-motion'

const Bg = () => {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
         <video
         className='absolute top-0 left-0 w-full h-full object-cover'
         src={bgVideo}
         autoPlay
         loop
         muted
         playsInline
         >
         </video>

         {/*Dark overlay to improve text visiblity*/}
         <motion.div 
         initial={{y:50,opacity:0}}
         animate={{y:0,opacity:1}}
         transition={{delay:0.5,duration:1}}
         className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'
         >
         <h1 className='text-4xl md:text-6xl font-extralight mb-4 sm:text-7xl'>FashionTv</h1>
         <p className='text-lg md:text-2xl mb-6 font-light sm:text-5xl'>Style Every Moment✨</p>
         </motion.div>
    </section>
  )
}

export default Bg