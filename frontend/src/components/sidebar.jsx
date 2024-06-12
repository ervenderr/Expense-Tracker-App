import React from 'react'
import Logo from '../assets/elogo.png'
import Profile from '../assets/profile.jpg'
import { motion } from 'framer-motion'
import { navLinks } from './Utils/NavLinks'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'


const variants = {
  open: { width: "20rem" },
  closed: { width: "5rem" },
}

function Sidebar ({activeLink, setActiveLink, signOut, user}) {
  const [isOpen, setIsOpen] = React.useState(true)
  
  return (
    <motion.div
    animate = {isOpen ? "open": "closed"}
    variants = {variants}
    className={isOpen ? 'py-12 px-6 flex flex-col border relative h-screen' : 'py-12 px-2 flex flex-col border border-r- relative h-screen items-center'}>
        <div className='flex items-center logo-div justify-center'>
          <img src={Logo} className={'w-14'}/>
          <span className={isOpen ? 'text-xl font-bold text-primary block' : 'hidden'}>Expense<span className='text-yellow'>Tracker</span></span>
        </div>

        <div 
        onClick={() => setIsOpen(!isOpen)}
        className='w-5 h-5 bg-primary rounded-full absolute right-[-10px] top-[55px] flex items-center justify-center'>
          <ChevronRight className={'text-yellow' + (isOpen ? ' rotate-180' : '')}/>
        </div>

        <div className='mt-8'>
          <div className='flex flex-col justify-center items-center'>
            <img src={Profile} className={'rounded-full border border-r-1 mb-3' + (isOpen ? ' w-20' : ' w-14')}/>
            <span className={isOpen ? 'text-center text-xl font-bold' : 'hidden'}>{user.email}</span>
            <span className='text-center text-sm text-tertiary'>Software Developer</span>
          </div>
        </div>

        <div className='mt-12 flex flex-col space-y-8'>
          {navLinks.map((link, index) => (
            <Link 
            key={index}
            to={link.link}
            className={'flex items-center gap-7 cursor-pointer p-2 rounded' + 
            (activeLink === index ? ' bg-primary text-yellow' : ' text-tertiary') + 
            ' hover:bg-primary hover:text-yellow'} 
            onClick={() => setActiveLink(index)}
            >
              <link.icon/>
              <span className={isOpen ? 'block' : 'hidden'}>{link?.name}</span>
            </Link>
          ))}

        </div>
        <button className='bg-primary text-yellow mt-52 py-2' onClick={signOut}>Sign out</button>
    </motion.div>
  )
}

export default Sidebar