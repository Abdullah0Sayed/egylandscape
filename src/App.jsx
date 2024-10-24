import { useState , useEffect, Suspense } from 'react'
import i18n from './i18n';


import egyLand from '../public/Logo/EgyLandScapeLogoH.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { setWebLanguage } from './rtk/slicers/languageSlicer';
import { useTranslation } from 'react-i18next';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Create Router For Browser


function App() {
  const {t} = useTranslation('global');
  const language = useSelector(state=>state.webLanguage);

  const dispatch = useDispatch();

  const changeWebLanguage = (lang)=>{
    dispatch(setWebLanguage(lang));
  }


  useEffect(() => {
    // Set the initial direction
    window.document.dir = i18n.dir();
      console.log('Direction Now : ' , window.document.dir)
    // Listen for language changes and update the direction dynamically

    const handleLanguageChange = (lng) => {
      window.document.dir = i18n.dir(lng);
      console.log('Direction Now : ' , window.document.dir)
    };

    // // Attach the language change listener
    i18n.on('languageChanged', handleLanguageChange);

    // // Cleanup function to remove the listener when the component unmounts
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);



  console.log(language)
  return (
   <div className=''>
      {/* <RouterProvider router={router}/> */}

      <h1 className='font-dm'>{t('landing.welcome')}</h1>
   </div>
  )
}

export default App
