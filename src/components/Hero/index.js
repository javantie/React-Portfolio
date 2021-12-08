import React from "react";

function Hero() {
  return (
    <div className="hero text-center sm:h-60 h-48 shadow-md">
      <h2 className="text-2xl font-bold text-red-800 pt-4 font-serif">
        Welcome To My Portfolio
      </h2>
      <div className="font-thin text-xl pt-8 animate-bounce">
        "First Solve the Problem, then Design the Solution"
      </div>
      <div className="mt-2 sm:mt-10">
        <a href="#">
          <button className="font-bold text-white text-xl p-2 bg-red-800 rounded-md">
            {" "}
            View Projects
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
