import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className=" pt-2 bg-gray-400">
        <h2 className="w-auto  p-3 font-bold text-2xl text-blue-900">
          “First, solve the problem. Then, write the code.” – John Johnson
        </h2>
        <div className=" mt-3 flex items-center justify-center animate-bounce">
          <Link to='/project'>
            <button
              class="
          bg-blue-400
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
        <Nav />
      </header>
    </>
  );
}

export default Header;
