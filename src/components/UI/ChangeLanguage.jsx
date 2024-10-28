import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setWebLanguage } from '../../rtk/slicers/languageSlicer';
const ChangeLanguage = () => {

   
    const language = useSelector(state=>state.webLanguage);

    const dispatch = useDispatch();

    const swipeLanguage = (lang)=>{
        dispatch(setWebLanguage(lang))
    }

  return (

    
    <div className={`absolute w-10 h-10 rounded-full bg-green-700 z-[100000] flex justify-center items-center ${language == 'en' ? 'left-2' : 'right-2' }`}>
        {
            language == 'ar' ? <button className='text-gray-100 font-bold text-sm hover:text-gray-700 cursor-pointer' onClick={()=>swipeLanguage('en')}>En</button> :  <button className='text-gray-100 font-bold text-sm' onClick={()=>swipeLanguage('ar')}>Ar</button>
        }
    </div>
  )
}

export default ChangeLanguage