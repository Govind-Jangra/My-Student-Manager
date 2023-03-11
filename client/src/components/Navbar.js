import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
     <nav className="bg-gray-900 py-4 ">
      <div className="container mx-auto">
        <Link to="/" className="text-white text-2xl font-bold mx-4">HOME</Link>
        <Link to="/list" className="text-white text-2xl font-bold mx-4">LIST</Link>
        <Link to="/add" className="text-white text-2xl font-bold mx-4">ADD DETAILS</Link>
       
      
      </div>
    </nav>
 
    </>
  )
}

export default Navbar
