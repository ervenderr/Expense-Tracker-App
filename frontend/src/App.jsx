import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/sidebar'
import Transaction from './components/Transaction/Transaction'
import Expenses from './components/Expenses/Expenses'
import Income  from './components/Income/Income'
import Setting from './components/Settings/Setting'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useGlobalContext } from './context/global'
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {


  const [activeLink, setActiveLink] = React.useState(0)

  const global = useGlobalContext();

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    switch (path) {
      case 'transaction':
        setActiveLink(1);
        break;
      case 'expenses':
        setActiveLink(2);
        break;
      case 'income':
        setActiveLink(3);
        break;
      case 'setting':
        setActiveLink(4);
        break;
      default:
        setActiveLink(0);
        break;
    }
  }, [location]);

  return (
    <>
    <div className='flex'>
      {/* Navigation bar */}
        <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} signOut={signOut} user={user}/>
    
      {/* Main Content */}
      <main className='flex-1'>
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
      </main>
    </div>
    </>
  )
}

export default withAuthenticator (App);

