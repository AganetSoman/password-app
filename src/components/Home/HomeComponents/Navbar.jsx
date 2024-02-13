import React from "react";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-4 px-4 absolute top-7 left-7 right-7">
      <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-lg ring-1 ring-white ring-opacity-5">
        <h1 className="text-3xl font-bold">Password Manager</h1>

        <div className="flex items-center justify-center ">
          <input type="search" 
                className="w-[350px] h-10 rounded-full p-4 outline-none bg-slate-200" 
                placeholder="Search for passwords"/>
           <IoMdSearch className="w-14 h-6 absolute ml-72 text-orange-700" />     
        </div>

        <div>
          <ul className="flex items-center justify-center ">
            <li className="list-none px-2 py-8 relative">
              <a
                href="profile"
                className="no-underline text-xl font-medium text-black transition-all duration-300 ease-out hover:text-blue-700 hover:after:w-6 hover:after:h-1 hover:after:bg-blue-700 hover:after:absolute hover:after:bottom-6 hover:after:left-2"
              >
                Profile
              </a>
            </li>
            <li className="list-none px-2 py-8 relative">
              <a
                href="profile"
                className="no-underline text-xl font-medium text-black transition-all duration-300 ease-out hover:text-blue-700 hover:after:w-6 hover:after:h-1 hover:after:bg-blue-700 hover:after:absolute hover:after:bottom-6 hover:after:left-2"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
