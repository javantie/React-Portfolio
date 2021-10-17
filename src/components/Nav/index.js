import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      class="
      flex
      items-center
      justify-center
      sticky
      top-0
      border-t-2 border-b-2
      bg-gray-700
    "
    >
      <nav class="text-white text-2xl font-semibold p-1 no-underline">
        <Link className = 'mr-4 hover:bg-blue-300 rounded-md px-1'to="/project"> Project </Link>|
        <Link className = 'mx-4 hover:bg-blue-300 rounded-md px-1' to="/about"> About </Link>|
        <Link className = 'mx-4 hover:bg-blue-300 rounded-md px-1' to="/resume"> Resume </Link>|
        <Link className = 'ml-4 hover:bg-blue-300 rounded-md px-1' to="/contact"> Contact Me </Link>
      </nav>
    </div>
  );
}

export default Nav;
