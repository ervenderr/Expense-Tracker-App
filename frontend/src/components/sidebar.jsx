import React from 'react'
import Logo from '../assets/elogo.png'
import Profile from '../assets/profile.jpg'
import {LayoutDashboard, BadgeDollarSign, LineChart, AreaChart, Settings, ChevronRight} from "lucide-react"
import { motion } from 'framer-motion'

const navLinks = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Transactions',
    icon: BadgeDollarSign,
  },
  {
    name: 'Expenses',
    icon: LineChart,
  },
  {
    name: 'Income',
    icon: AreaChart,
  },
  {
    name: 'Settings',
    icon: Settings,
  }
]

const variants = {
  open: { width: "20rem" },
  closed: { width: "5rem" },
}

const Sidebar = () => {

  const [activeLink, setActiveLik] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <motion.div
    animate = {isOpen ? "open": "closed"}
    variants = {variants}
    className={isOpen ? 'py-12 px-6 w-1/2 flex flex-col border relative h-screen' : 'py-12 px-2 flex flex-col border border-r- relative h-screen items-center'}>
        <div className='flex items-center logo-div justify-center'>
          <img src={Logo} className={'w-14'}/>
          <span className={isOpen ? 'text-xl font-bold text-primary block' : 'hidden'}>Expense<span className='text-yellow'>Tracker</span></span>
        </div>

        <div 
        onClick={() => setIsOpen(!isOpen)}
        className='w-5 h-5 bg-primary rounded-full absolute right-[-10px] top-[55px] flex items-center justify-center'>
          <ChevronRight className='text-secondary'/>
        </div>

        <div className='mt-8'>
          <div className='flex flex-col justify-center items-center'>
            <img src={Profile} className={'rounded-full border border-r-1 mb-3' + (isOpen ? ' w-20' : ' w-14')}/>
            <span className={isOpen ? 'text-center text-xl font-bold' : 'hidden'}>Ervender</span>
            <span className='text-center text-sm text-tertiary'>Software Developer</span>
          </div>
        </div>

        <div className='mt-12 flex flex-col space-y-8'>
          {navLinks.map((link, index) => (
            <div 
            key={index}
            className={'flex items-center gap-7 cursor-pointer p-2 rounded' + 
            (activeLink === index ? ' bg-primary text-yellow' : ' text-tertiary')} 
            onClick={() => setActiveLik(index)}
            >
              <link.icon/>
              <span className={isOpen ? 'block' : 'hidden'}>{link?.name}</span>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Sidebar