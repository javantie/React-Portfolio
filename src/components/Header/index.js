import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-400">
        <div className="flex justify-between">
        <h2 className="w-4/6 mr-4 font-bold text-2xl text-blue-900 animate-bounce  pt-4 ">
          “First, solve the problem. Then, write the code.” – John Johnson
        </h2>
        <div className=" my-2 flex items-center justify-center animate-pulse w-1/6">
          <Link to='/project'>
            <button
              class="
          bg-blue-700
          p-2
          rounded-lg
          text-white
          font-extrabold
          hover:bg-blue-800
        "
            >
              View Projects
            </button>
          </Link>
        </div>
        </div>
        <Nav />
      </header>
    </>
  );
}

export default Header;
