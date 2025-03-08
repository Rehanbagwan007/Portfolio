import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'


export const WorkExperiance = () => {
  return (
    <section className='pt-20' id='work'>
        <center><motion.h2

        initial={{opacity:0 , y:-20}}
        whileInView={{opacity : 1 , y:0}}
        transition={{duration :1}}
        
        className="text-centre text-4xl ">Work Experiance</motion.h2></center>
        
        <motion.div
        initial={{opacity:1}}
        whileInView={{opacity:1}}
        transition={{duration:1 , delay:1}}
        className='space-y-8 p-10'>
            {EXPERIENCES.map((exp,index)=>{

             return(

                <motion.div
                initial={{opacity : 0 , x:-20}}
                whileInView={{opacity:1 , x:0}}
                transition={{duration : 1 , delay : index * 0.2}}
                
                
                
                className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
                key={index}>
                    <h3 className='text-2xl font-semibold'>
                        {exp?.title}
                    </h3>
                    <p className="text-xl">
                        {exp?.company}
                    </p>
                    <p className="text-sm text-stone-300">{exp?.description}</p>


                </motion.div>
             )


            })}


        </motion.div>
    </section>
  )
}
