import React from "react";
import profilepic from "../assets/images/my-pic";

function About() {
  return (
    <div id="about-me" className="md:px-20 shadow">
      <div
        className="
            px-6
            py-2
            my-4
            mx-4
            rounded-md
            items-center
            w-auto
            sm:flex sm:justify-between
            w-auto
          "
      >
        <div className="w-auto sm:w-96 py-4 sm:ml-0 flex justify-center">
          <img
            className="rounded w-full sm:w-96 sm:h-96"
            src={profilepic}
            alt="Akeem-picture"
          />
        </div>
        <div className="sm:w-3/6 sm:pl-2">
          <span className="font-extrabold font-serif text-xl text-red-800 border-b-2 border-red-800">
            ABOUT ME
          </span>

          <p className="leading-6 mt-2 font-thin text-xl mt-4">
            Hello there,{" "}
            <p>
              {" "}
              My name is Akeem Clarke and I am a full stack developer with a
              passion for creating beautiful and intuitive user experiences. I
              have a background in Digital Marketing and Accounting. I am
              currently working as Freelance web developer, and while working on
              my own personal projects. I am intersted in a front-end or
              full-stack developer as a junior developer.
            </p>
          </p>
          <div className="mt-4">
            <a href="#" className="text-red-800 text-lg">
              Visit My Blog <i class="fas fa-share"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
