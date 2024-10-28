import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Assets And Iamegs
import egyLandScapeLogo from '/public/Logo/EgyLandScapeLogoH.svg'
import locationMap from '/public/location.png'
import { contactMethods } from '../../lib/ContactInfo';
// End
const Footer = () => {

    const {t} = useTranslation('global');
    const language = useSelector(state=>state.webLanguage);


    const socialLinks = [
        { icon: "/public/facebookIcon.png", url: "https://www.facebook.com/Lixirinteriors" },
        { icon: "/public/instagramIcon.png", url: "" },
        { icon: "/public/tiktok.png", url: "" },
        { icon: "/public/youtubeIcon.png", url: "https://www.youtube.com/@LixirInteriors" },
      ];

      

  return (
    <div className='w-full min-w-full footer-container bg-footerBgColor py-14 absolute bottom-0'>
       
    </div>
  )
}

export default Footer