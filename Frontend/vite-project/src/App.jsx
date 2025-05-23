import Header from './Components/Header'
import Routing from './Components/Routing'
import Sidebar from './Components/SideBar/Sidebar'
import './index.css'
import React from 'react'
function App() {


  return (
    <div className='flex'>
   <Sidebar ></Sidebar>
   <>

   <Routing className="w-full" ></Routing>
   
   </>
    </div>
  )
}

export default App
