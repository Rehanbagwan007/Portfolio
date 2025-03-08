import React from 'react'
import logo from "../assets/logo1.png"

import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'


export const Footer = () => {
  return (
    <div className='mb-8 mt-20 '>
        <div className="flex items-center justify-center">
            <motion.img 
            initial={{opacity:0}}
            whileInView={{opacity:5}}
            transition={{duration:0.5}}
            
            
            src={logo} alt="" className="my-20" />
        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((links,i)=>{
                return(
                    <motion.a
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.5}}
                    
                    
                    key={i} href={links.href} target='_blank' rel='noopener noreferrer'>{links.icon}</motion.a>
                )
            })}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;compileTab. All rights reserved
        </p>
    </div>
  )
}
