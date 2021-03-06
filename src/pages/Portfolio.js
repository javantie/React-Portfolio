import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <>
      <div className="text-center text-xl mt-10">
        <h1 className="font-bold sm:text-3xl text-red-800 font-serif underline">FEATURED PROJECTS</h1>
        <p className="pt-2 pb-6 px-2 font-thin sm:text-2xl">
          See my works below. Unless explicitly stated otherwise, all their
          back-end and front-end parts were completely done by me.
        </p>
      </div>
      <div
        id="my-work"
        className="md:flex md:flex-row md:justify-evenly"
      >
          <Project/>

      </div>
    </>
  );
}

export default Portfolio;