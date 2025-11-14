import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section className='bg-black text-white py-20 px-6 md:px-20'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            {/*left side*/}
         <motion.div
         initial={{opacity:0,x:-40}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:1.0}}
         viewport={{once:true}}
         >
            <h2 className='text-4xl md:text-4xl mb-6 font-semibold text-center'>About <span className='text-blue-700 font-extrabold'>FashionTV</span></h2>
            <p className='text-lg md:text-xl leading-relaxed bg-white bg-clip-text text-transparent '>Since its inception in 1997, FashionTV has been setting the highest standards for excellence in fashion and lifestyle broadcasting. The only TV equivalent to fashion print media appealing to everyone interested in fashion, style, beauty and trends, FashionTV understands and caters to its audience by providing original, unbiased and informative programming not available on other networks. A strong image and exceptional awareness of FashionTV’s brand projects a unique, cosmopolitan and modern style allowing for influential partnerships with many global brands</p>
         </motion.div>

         <motion.div 
         initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg shadow-yellow-500/20"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
            
         </motion.div>
        </div>
    </section>

  )
}

export default About