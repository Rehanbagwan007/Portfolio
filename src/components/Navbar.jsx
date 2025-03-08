import React, { useState } from 'react'
import logo from "../assets/logo1.png"
import { NAVIGATION_LINKS } from '../constants'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

export const Navbar = () => {



    const [isMobileMenuOpen , setisMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () =>{
        setisMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e,href)=>{
        e.preventDefault()
        const targetElement = document.querySelector(href)

        if(targetElement){
            const offset = -85
         
        const elementPosition = targetElement.getBoundClientRect().top
        const offsetPosition = elementPosition + window.scrollY + offset
        }   


        setisMobileMenuOpen(false)
    }
  return (
    <div>
    <nav className='fixed left-0 right-0 md:top-3 top-1 md:p-0 p-1 z-50'>
           <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'>

           <div className='flex flex-row items-center justify-between gap-2'>
            <div className=''>
                <a href="#">
                    <img src={logo} alt="logo" srcset="" width={250} />
                </a>
            </div>
           

           <div>

             <ul className='flex items-center gap-4'>
                {NAVIGATION_LINKS?.map((item,index)=>{

                    return(<li key={index} >

                        <a href={item?.href} onClick={(e)=>handleLinkClick(e,item?.href)} className='text-sm hover:text-yellow-400'>{item?.label}</a>
                    </li>)
                    
                })}


             </ul>

           </div>



           </div>
           </div>

           {/* Mobile Menu */}
           <div className='rounded-lg backdrop-blur-md lg:hidden'>
            <div className='flex items-center justify-between '>

                <div>
                    <a href="">
                        <img src={logo} alt="" srcset="" width={140} />
                    </a>
                </div>

                <div className='flex items-center'>

                    <button className='focus:outline-none lg:hidden 
                    ' onClick={toggleMobileMenu}>

                        {
                            isMobileMenuOpen ? (
                                <FaTimes className='m-2 h-6 w-5' />
                            ) : 
                                   (
                                    <FaBars className='h-6 w-5' />
                                   )
                        }


                    </button>
                </div>

            </div>
            {
                isMobileMenuOpen && (
                    <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                        {
                            NAVIGATION_LINKS.map((items,index)=>{
                                return(
                      <li key={index} className=''>
                        <a href={items?.href} className='block w-full text-lg' onClick={(e)=>handleLinkClick(items.href)}>{items?.label}</a>
                      </li>

                                )
                            })
                        }
                    </ul>
                )
            }
           </div>
    </nav></div>
  )
}
