import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'

export const Education = () => {
  return (
    <section className="py-8 " id='education'>
        <motion.h2 
        initial={{opacity:0 , y:-20}}
        whileInView={{opacity :1 , y:0}}
        transition={{duration :1 }}
        
        
        
        className="mb-4 text-center text-3xl">Education</motion.h2>

        {EDUCATION.map((edu,index)=>{

                   return(
                    <motion.div 
                    initial={{opacity : 0 , x:-20}}
                    whileInView={{opacity :1 , x :0}}
                    transition={{duration :1 , delay:index *1}}
                    
                    key={index} className="mb-6 p-10">
                        <h3 className="font-semibold text-xl">{edu?.degree}</h3>
                        <p className="text-lg">{edu?.institution}</p>
                        <p className="text-sm text-stone-3000">{edu?.duration}</p>
                        <p className='mt-2'>{edu?.description}</p>
                    </motion.div>
                   )

        })}
    </section>
  )
}
