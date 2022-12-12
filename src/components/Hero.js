import React from 'react'
import '../index.css';
import Navbar from './Navbar';
import logosvg from '../imagenes/logo.svg'
import profile from '../imagenes/profile.JPG'
const Hero = () => {
  return (

    <div  className='navbar d-flex flex-row align-items-center'>
        <Navbar />
        <img src={logosvg} alt='logo' className='logo'/>
        <div className='pair d-flex align-items-center mx-2'>
          <button className='button-menu mx-2'>Menu</button>
          <img src={profile} alt='profile icon' width={30}/>
        </div>  
    </div>
  )
}

export default Hero