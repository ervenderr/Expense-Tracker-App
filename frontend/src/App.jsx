
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Sidebar from './components/sidebar'

function App() {

  return (
    <>
    <div className='flex'>
      {/* Navigation bar */}
        <Sidebar />

      {/* Main Content */}
      <Dashboard />
    </div>
    </>
  )
}

export default App
