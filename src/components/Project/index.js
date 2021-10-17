import React from "react";

function Project() {
  return (
    <>
     <section id="my-work" class="md:flex md:flex-row md:justify-evenly">
      <div
        id="card"
        class="
          mx-4
          px-4
          md:w-6/12 md:h-5/6
          w-auto
          rounded-3xl
          border-gray-300
          shadow-xl
          hover:shadow-2xl
          border-2
          mb-4
        "
      >
        <h2 class="mb-2 font-bold text-center pt-2">Stack_Underflo</h2>
        <div id="card-img">
  <img class="rounded-lg" src="../assets/images/Capture3.PNG" alt="Project Image"/>
        </div>
        <div id="text-area" class="mb-2">
          <p class=" mt-2 font-thin text-lg p-3">
            The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. 
              It provides coders with resources to ignite their light about a subject matter. The application provides references to websites, 
              books, coding puzzles, and answer to questions submitted. This was a group project and I was mainly resposible for the front-end of the application.
          </p>
        </div>
        <a href="https://github.com/Patrena94/stack-underflow" target="blank">
          <button class="bg-red-900 font-bold hover:bg-red-400 text-xl text-white p-1 mb-2 rounded">
            GitHub Repo
          </button>
        </a>
        <br />
        <span class="font-semibold">TECHNOLOGIES & LIBRARIES:</span>
        <span class="flex p-1 pb-4">
          <p class="mr-2 bg-red-900 text-white p-1 rounded">TAILWINDCSS</p>
          <p class="mr-2 bg-red-900 text-white p-1 rounded">HTML5</p>
          <p class="mr-2 bg-red-900 text-white p-1 rounded">JAVA SCRIPT</p>
          <p class="mr-2 bg-red-900 text-white p-1 rounded">NODE.JS</p>
          <p class="mr-2 bg-red-900 text-white p-1 rounded">HANDLEBARS</p>
        
        </span>
      </div>
      <div
        id="card"
        class="
          mx-4
          px-4
          md:w-6/12 md:h-5/6
          w-auto
          rounded-3xl
          border-gray-300
          shadow-xl
          hover:shadow-2xl
          border-2
          mb-4
        "
      >
        <h2 class="mb-2 font-bold text-center pt-2">Stack_Underflo</h2>
        <div id="card-img">
          <img class="rounded-lg" src="../assets/images/Capture2.PNG" alt="Project Image" />
        </div>
        <div id="text-area" class="mb-1">
          <p class=" mt-2 font-thin text-lg p-3">
            This site provides vital information to those who would like to invest in cryptocurrency. Updates in real-time, 
            allowing users to find the latest rates for a variety of vrypto currencies. The site also provides a display of the bitcoin twitter feed.
            Multiple APi's were use to retreive the data from other third party website such as Crypto-Compare.
          </p>
        </div>
        <a href="https://github.com/Patrena94/stack-underflow" target="blank">
          <button class="bg-red-900 font-bold hover:bg-red-400 text-xl text-white p-1 mb-2 rounded">
            GitHub Repo
          </button>
        </a>
        <br />
        <span class="font-semibold">TECHNOLOGIES & LIBRARIES:</span>
        <span class="flex p-1 pb-4">
          <p class="mr-2 bg-red-900 text-white p-1 rounded">TAILWINDCSS</p>
          <p class="mr-2 bg-red-900 text-white p-1 rounded">HTML5</p>
          <p class="mr-2 bg-red-900 text-white p-1 rounded">JAVA SCRIPT</p>
        
        </span>
      </div>
      
    </section>
      


    </>
  );
}
 
export default Project;