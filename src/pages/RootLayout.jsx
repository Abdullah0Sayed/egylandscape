import React from 'react'
// Placeholder for childrens of router 
import { Outlet } from 'react-router-dom'

// Import Componnets [Header + Footer + Any Static Componnet]
import Footer from '../components/Footer/Footer'
import { useSelector } from 'react-redux'
import ChangeLanguage from '../components/UI/ChangeLanguage'

const RootLayout = () => {

    const lang = useSelector(state=>state.webLanguage);
  return (
    <div className={`min-w-full w-full min-h-screen relative`} >
        <h1>Header</h1>
        <h1>Content</h1>
        <ChangeLanguage/>
        <Footer/>
    </div>
  )
}

export default RootLayout