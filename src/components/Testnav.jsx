import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const testnav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
 <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm  ">
      <nav className="mt-4 relative max-w-6xl w-full border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-6 md:mx-auto">
        
        {/* Logo */}
        <div className="px-4 md:px-0 flex justify-between items-center w-full md:w-auto">
          <Link to ="/" className="text-xl font-semibold focus:outline-none">
            GadgetBoom 
            <img src="/images/Icons/hamburger-icon.svg" alt="Icon" className="w-10 h-10" />
          </Link>

          {/* Dropdown Toggle Button (Only Visible on Small Screens) */}
          <button
            type="button"
            className="md:hidden flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            aria-expanded={isOpen}
            aria-controls="hs-navbar-header-floating"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? "🔳" : "❌"} {/* Fake Icons */}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          id="hs-navbar-header-floating"
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center md:justify-end gap-4 md:gap-6 mt-3 md:mt-0 py-2 md:py-0`}
        >
          <Link to="/" className="text-gray-800 text-lg hover:text-gray-600">
            Home
          </Link>
          <Link to="/allproducts" className="text-gray-800 text-lg hover:text-gray-600 ">
            All Products
          </Link>
          <Link to="/phones" className="text-gray-800 text-lg hover:text-gray-600">
            Phones
          </Link>
          <Link to="/accesories" className="text-gray-800 text-lg hover:text-gray-600">
            Accesories
          </Link>
          <Link to="/laptops" className="text-gray-800 text-lg hover:text-gray-600">
            Laptops
          </Link>
          
         
        </div>
      </nav>
    </header>
    </div>
  )
}

export default testnav