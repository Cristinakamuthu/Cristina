import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <li><NavLink to="/" className="home">Home</NavLink></li>
        <li><NavLink to="/about" className="about">About</NavLink></li>
        <li><NavLink to="/projects" className="projects">Projects</NavLink></li>
        <li><NavLink to="/contacts" className="contacts">Contacts</NavLink></li>
        
    </div>
  )
}

export default Navbar