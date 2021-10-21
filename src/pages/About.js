import React from 'react'
import profilepic from "../assets/images/my-pic"


function About (){

    return(
        <section id="about-me" class="mx-2">
        <span class="font-extrabold text-xl">About Me</span>
        <div
          class="
            px-6
            py-2
            my-4
            mx-4
            rounded-md
            border-2
            shadow-xl
            hover:shadow-inner
            items-center
            w-auto
            sm:flex sm:justify-between
            w-auto
          "
        >
          <div class="h-auto w-56 py-4 sm:ml-0">
            <img
              class="rounded-2xl w-56 h-56"
              src={profilepic}
              alt="Akeem-picture"
            />
          </div>
          <div class="sm:w-5/6 sm:pl-4">
            <p class="leading-6 mt-2 font-thin text-lg">
              My Name is Akeem Clarke and I from West Palm Beach, Florida th
              sunshine state that everyone loves. I have a BA in Accounting and a
              AS in Business Managment. In additon, I am also an IRS Enrolled
              Agent. My goal is to complete this couse and gain the knowledge to
              start a new career. 
              </p>
          </div>
        </div>
      </section>
    )
}
export default About;