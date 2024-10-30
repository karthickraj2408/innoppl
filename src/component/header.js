import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../appSlice/authSlice'
import {  FaTimes } from 'react-icons/fa';
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [isOpen, setIsOpen] = useState(false);

 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () =>{
    dispatch(logout())
    localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div>
     <nav className="bg-blue-950 border py-3 flex flex-col md:flex-row justify-between">
     
      <div className="flex justify-between items-center px-4">
        <div className="text-white font-bold text-xl">User Management App</div>
       
        <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

    
      <ul className={`flex-col md:flex md:flex-row md:space-x-4 justify-center items-center md:justify-start px-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
      
        <li className="bg-white rounded p-3 font-sans font-bold">
          <Link to="/toToManagement" className="text-blue-950 text-[13px]">To Do Management</Link>
        </li>
        <li className="bg-white rounded p-3 font-sans font-bold">
          <Link to="/" className="text-blue-950 text-[13px]">Profile</Link>
        </li>
        <li className="bg-white rounded p-3 font-sans font-bold flex ">
          <button onClick={handleLogout} className="text-blue-950 text-[13px]">Log Out</button>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Header