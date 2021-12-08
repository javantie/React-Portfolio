import React from "react";
import script from "../../assets/js/navbar.js";
import mypic from "../../assets/images/my-pic";

function Nav() {
  
  return (

    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* <!--Website Logo--> */}
            <a href="#" className="flex items-center py-4 px-2">
              <img
                src={mypic}
                alt="Logo"
                className="h-12 w-12 mr-2 rounded-full"
              />
              <span className="font-semibold text-gray-500 text-2xl">
                Akeem Clarke
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a
              href=""
              className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold"
            >
              Projects
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
            >
              About Me
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
            >
              Resume
            </a>
            <a
              href=""
              className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none menu-button">
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="! showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 00 24 24"
                stroke="currentColor"
              >
                <path d="m4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
          <div className="hidden mobile-menu">
            <ul className="">
              <li className="active">
                <a
                  href="nav.html"
                  className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#Contact Us"
                  className="block.text-sm.px-2.py-4 hover:bg-purple-500 transition duration-300"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
      </div>
      {/* <script src={script} /> */}
    </nav>
  );
}

export default Nav;
