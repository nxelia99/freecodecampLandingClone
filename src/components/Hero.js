import React from 'react'
import '../index.css';
import logo from '../imagenes/logo.png'
const Hero = () => {
  return (
    <>
    <div  className='navbar d-flex flex-row'>
        <nav className='navbar'>
        <div className='inputsearch mx-4'><i class="bi bi-search icon mx-2"></i><input type="text" placeholder='Search 9,000+ tutorials' className='input-field' /></div>
            
        <img src={logo} alt='logo'  width={180} className='logo'/>
        </nav>
    </div>
    </>
  )
}

export default Hero