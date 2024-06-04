import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/sidebar'
import Transaction from './components/Transaction/Transaction'
import Expenses from './components/Expenses/Expenses'
import { Income } from './components/Income/Income'
import Setting from './components/Settings/Setting'
import { useGlobalContext } from './context/global'


function App() {

  const [activeLink, setActiveLink] = React.useState(0)

  const global = useGlobalContext();

  const displayMainContent = () => {

    switch (activeLink) {
      case 0:
        return <Dashboard/>
      case 1:
        return <Transaction/>
      case 2:
        return <Expenses/>
      case 3:
        return <Income/>
      case 4:
        return <Setting/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <>
    <div className='flex'>
      {/* Navigation bar */}
        <Sidebar activeLink={activeLink} setActiveLink={setActiveLink}/>
    
      {/* Main Content */}
      <main className='flex-1'>
        {displayMainContent()}
      </main>
    </div>
    </>
  )
}

export default App
