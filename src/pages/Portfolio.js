import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <>
      <div class="text-center text-xl mt-10">
        <h1 class="font-bold text-3xl text-red-800 font-serif underline">FEATURED PROJECTS</h1>
        <p class="pt-2 pb-6 px-2 font-thin text-2xl">
          See my works below. Unless explicitly stated otherwise, all their
          back-end and front-end parts were completely done by me.
        </p>
      </div>
      <sesction
        id="my-work"
        class="md:flex md:flex-row md:justify-evenly"
      >
          <Project/>

      </sesction>
    </>
  );
}

export default Portfolio;