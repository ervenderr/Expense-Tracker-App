import React from 'react'
import Logo from '../assets/elogo.png'
import Profile from '../assets/profile.jpg'
import {LayoutDashboard, BadgeDollarSign, LineChart, AreaChart, Settings} from "lucide-react"

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

const Sidebar = () => {

  const [activeLink, setActiveLik] = React.useState(0)
  
  return (
    <div className='py-12 px-10 flex flex-col border border-r-1 w-1/6 h-screen'>
        <div className='flex items-center'>
          <img src={Logo} className='w-14'/>
          <span className='text-xl font-bold text-primary'>ExpenseTracker</span>
        </div>

        <div className='mt-8'>
          <div className='flex flex-col justify-center items-center'>
            <img src={Profile} className='w-20 rounded-full border border-r-1 mb-3'/>
            <span className='text-center text-xl font-bold'>Ervender</span>
            <span className='text-center text-sm text-tertiary'>Software Developer</span>
          </div>
        </div>

        <div className='mt-12 flex flex-col space-y-8'>
          {navLinks.map((link, index) => (
            <div 
            key={index}
            className={'flex items-center gap-7 cursor-pointer p-2 rounded' + 
            (activeLink === index ? ' bg-primary text-secondary' : ' text-tertiary')} 
            onClick={() => setActiveLik(index)}
            >
              <link.icon/>
              <span className=''>{link?.name}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sidebar