import React from "react";
import Nav from "../Nav";

function Header() {
  return (
    <>
      <header className="h-22 pt-2">
          
        <h2 className="w-auto animate-bounce bg-gray-400 p-3 font-bold">
          “First, solve the problem. Then, write the code.” – John Johnson
        </h2>
        <Nav/>
    </header>
      
    </>
  );
}

export default Header;
