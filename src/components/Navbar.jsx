import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex flex-bold shadow-md'>
        <p className='blue-gradient_text'>Ah</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({isActive }) => isActive ? 'text-blu-500' : 'text-black'}>
          <p className='blue-gradient_text'>About</p>
        </NavLink>
        <NavLink to='/projects' className={({isActive }) => isActive ? 'text-blu-500' : 'text-black'}>
          <p className='blue-gradient_text'>Projects</p>
        </NavLink>
      </nav>
    </header>
    

  )
}

export default Navbar