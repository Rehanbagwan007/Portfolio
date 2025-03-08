import { useState } from 'react'


import './index.css'

import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Project } from './components/Project'
import { Bio } from './components/Bio'
import { Skills } from './components/Skills'
import { WorkExperiance } from './components/WorkExperiance'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {
 

  return (

     <div className='relative h-full overflow-y-auto antialiased w-full
     
     
     '>
           <div className='fixed inset-0 bg-fixed bg-color bg-img'>
            
           </div>
           <div className='relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto '>
            <Hero/>
            <Navbar/>
            <Project/>
            <Bio/>
            <Skills/>
           
            <Education/>
            <Contact/>
            <Footer/>

           </div>



     </div>
  
  )
}

export default App
