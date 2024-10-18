import { useState } from 'react'

import egyLand from '../public/Logo/EgyLandScapeLogoH.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full flex justify-center items-center my-4'>       
          <img src={egyLand} className="w-80" alt="EGY LAND SCAPE LOGO" />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold' >مرحباً بكم في EGY LAND SCAPE</h1>
        <h3 className='font-bold'>سينطلق قريباً - جاري العمل عليه</h3>
      </div>
      
    </>
  )
}

export default App
