import { useState , useEffect, Suspense } from 'react'
import i18n from './i18n';



import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { setWebLanguage } from './rtk/slicers/languageSlicer';
import { useTranslation } from 'react-i18next';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cookies from 'js-cookie';
// Componnets
import RootLayout from './pages/RootLayout';


// Create Router For Browser
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense>
        <RootLayout/>
      </Suspense>
    ),
    errorElement: `ERROR 404`,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            {/* Home */}
          </Suspense>
        ),
       
      },
      {
        path: '/AboutUs',
        element: (
          <Suspense>
            {/* About Page */}
          </Suspense>
        ),
      }
    ]
  }
])



function App() {

  const language = useSelector(state=>state.webLanguage);





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

useEffect(()=>{
  const storedLang = Cookies.get("lang");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
} , [])


  return (
   <div className={`${language} == 'en' ? 'font-dm' : 'font-cairo'`}>
      {/* <RouterProvider router={router}/> */}
      <RouterProvider router={router}/>
   </div>
  )
}

export default App
