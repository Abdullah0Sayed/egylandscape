import {
    IoCallOutline,
    IoMailOutline,
    IoLocationOutline,
  } from "react-icons/io5";
  import axios from "axios";
  
  export async function getData() {
    try {
      const res = await axios.get('https://backend.lixir-interiors.com/api/contactinfos/lixir-interiors')
      const response = await res.data
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  const data = await getData()
  
  export const contactMethods = data ? [
  
    
    
    {
      icon: <IoCallOutline />,
      value: {
        en: data.phone,
        ar: data.phone,
      },
    },
    {
      icon: <IoMailOutline />,
      value: {
        en: data.email,
        ar: data.email,
      },
    },
    {
      icon: <IoLocationOutline />,
      value: {
        en: data.address.en,
        ar: data.address.ar,
      },
    },
  ] : ''