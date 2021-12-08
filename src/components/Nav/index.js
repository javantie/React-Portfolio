import React from "react";
import mypic from "../../assets/images/my-pic";
import { Link } from "react-router-dom";

function Nav() {
  const handleClick = () => {
    const btn = document.querySelector("button.menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  };

  return (
    <nav className="bg-white shadow-lg font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* <!--Website Logo--> */}
            <Link to="/" className="flex items-center py-4 px-2">
              <img
                src={mypic}
                alt="Logo"
                className="h-12 w-12 mr-2 rounded-full"
              />
              <span className="font-semibold text-gray-500 text-2xl">
                Akeem Clarke
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-xl">
            <Link
              to="project"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-red-800 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-red-800 transition duration-300"
            >
              About Me
            </Link>
            <Link
              to="resume"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-red-800 transition duration-300"
            >
              Resume
            </Link>
            <Link
              to="contact"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-red-800 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
          <div className="md:hidden flex items-center pr-4">
            <button onClick={handleClick} className="outline-none menu-button">
              <svg
                className="w-10 h-10 text-red-800"
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
        <div className=" mobile-menu bg-red-700 pl-5 py-2 ">
          <ul className="font-bold text-white">
            <li>
              <Link
                to="/"
                className="hover:bg-blue-400 transition duration-300  p-1 rounded"
              >
                PROJECTS
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="/"
                className="hover:bg-blue-400 transition duration-300 p-1 rounded"
              >
                ABOUT ME
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="resume"
                className="hover:bg-blue-400 transition duration-300 p-1 rounded"
              >
                RESUME
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to="contact"
                className="hover:bg-blue-400 transition duration-300 p-1 rounded"
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
