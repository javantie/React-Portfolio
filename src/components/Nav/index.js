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
      <nav class="text-white text-xl font-semibold p-1 no-underline">
        <Link to="/project"> Project </Link>|<Link to="/about"> About </Link>|
        <Link to="/resume"> Resume </Link>|
        <Link to="/contact"> Contact Me </Link>|
      </nav>
    </div>
  );
}

export default Nav;
