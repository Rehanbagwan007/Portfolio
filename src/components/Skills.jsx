import React from 'react'
import { SKILLS } from '../constants'
import { motion } from 'framer-motion'

export const Skills = () => {


  const containerVariants = {
           hidden:{opacity : 0 , y:20},
           visible:{ opacity :1 , 
            y:0,
            transition:{
              duration:1,
              staggerChildren:0.5
            }
           },
  }

  const itemVariants = {
    hidden:{
      opacity:0, x: -20
    },
    visible:{
      opacity:1, x:0 , transition :{
        duration :1.5
      }
    }
  }



  return (
    <div className='container mx-auto ' id='skills'>
                <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>Skills</h2>

                <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once :true}}
                
                
                className='mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20  border border-stone-50/30'>
                 {SKILLS.map((skill,index)=>{
                    return(
                        <motion.div

                        variants={itemVariants}

                        
                        
                        className={`py-6 flex items-center justify-between ${index !== skill.lenght -1 ? "border-b border-stone-50/30" : ""}`}>
                            <div className='flex items-center'>{skill.icon}
                            <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}
                            </h3></div>
                            <div className="text-md font-semibold lg:text-xl">
                              <span className="">{skill.experience}</span>
                            </div>

                        </motion.div>
                    )
                 })}
                
                </motion.div>


    </div>
  )
}
