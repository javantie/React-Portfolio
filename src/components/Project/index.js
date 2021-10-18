import React from "react";

function Project() {
  return (
    <>
      <section
        id="my-work"
        class="md:flex md:flex-row md:justify-evenly flex-wrap"
      >
        <div
          id="card"
          class="
          mx-4
          px-4
          md:w-5/12 md:auto
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
            <img
              class="rounded-lg"
              src="../assets/images/stack.PNG"
              alt="Project Image"
            />
          </div>
          <div id="text-area" class="mb-2">
            <p class=" mt-2 font-thin text-lg p-3">
              The Stack-Underflow app is a diversified resource center where
              fledgling coders go to expand their knowledge to the next level.
              It provides coders with resources to ignite their light about a
              subject matter. The application provides references to websites,
              books, coding puzzles, and answer to questions submitted. This was
              a group project and I was mainly resposible for the front-end of
              the application.
            </p>
          </div>
          <a href="https://github.com/Patrena94/stack-underflow" target="blank">
            <button class="bg-red-900 font-bold hover:bg-red-400 text-xl text-white p-1 mb-2 rounded">
              GitHub Repo
            </button>
          </a>
          <button class="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded ml-2">
            <a href=" https://stack-underflo.herokuapp.com/" target="_blank">
              View Live App
            </a>
          </button>
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
          md:w-5/12 md:auto
          w-auto
          rounded-3xl
          border-gray-300
          shadow-xl
          hover:shadow-2xl
          border-2
          mb-4
        "
        >
          <h2 class="mb-2 font-bold text-center pt-2">Coin Nerd</h2>
          <div id="card-img">
            <img class="rounded-lg" src="./assets/images/Capture2.PNG" alt="" />
          </div>
          <div id="text-area" class="mb-1">
            <p class=" mt-2 font-thin text-lg p-3">
              This site provides vital information to those who would like to
              invest in cryptocurrency. Updates in real-time, allowing users to
              find the latest rates for a variety of vrypto currencies. The site
              also provides a display of the bitcoin twitter feed. Multiple
              APi's were use to retreive the data from other third party website
              such as Crypto-Compare.
            </p>
          </div>
          <button class="bg-red-900 font-bold hover:bg-red-400 text-xl text-white p-1 mb-2 rounded">
            <a href="https://github.com/javantie/Coin-Nerds" target="blank">
              GitHub Repo
            </a>
          </button>

          <button class="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded ml-2">
            <a href="https://javantie.github.io/Coin-Nerds//" target="_blank">
              View Live App
            </a>
          </button>

          <br />
          <span class="font-semibold">TECHNOLOGIES & LIBRARIES:</span>
          <span class="flex p-1 pb-4">
            <p class="mr-2 bg-red-900 text-white p-1 rounded">TAILWINDCSS</p>
            <p class="mr-2 bg-red-900 text-white p-1 rounded">HTML5</p>
            <p class="mr-2 bg-red-900 text-white p-1 rounded">JAVA SCRIPT</p>
          </span>
        </div>
        <div
          id="card"
          class="
        mx-4
        px-4
        md:w-5/12 md:auto
        w-auto
        rounded-3xl
        border-gray-300
        shadow-xl
        hover:shadow-2xl
        border-2
        mb-4
        "
        >
          <h2 class="mb-2 font-bold text-center pt-2">Book Search Engine</h2>
          <div id="card-img">
            <img
              class="rounded-lg"
              src="./assets/images/screenshot.PNG"
              alt=""
            />
          </div>
          <div id="text-area" class="mb-2">
            <p class="mt-2 p-3 font-thin text-lg">
              This is a book search engine application that allows users to
              search for their favorate books using a Google Books API. This app
              is Full-Stack MERN application that allows users to keep track of
              all books saved.
            </p>
          </div>
          <button class="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded">
            <a
              href="https://github.com/javantie/Book-Search-Engine"
              target="_blank"
            >
              GitHub Repo
            </a>
          </button>
          <button class="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded ml-2">
            <a
              href="https://radiant-meadow-67856.herokuapp.com/"
              target="_blank"
            >
              View Live App
            </a>
          </button>
          <br />
          <span class="font-semibold">TECHNOLOGIES & LIBRARIES:</span>
          <span class="flex p-1 pb-4">
            <p class="mr-2 bg-red-900 text-white p-1 rounded">CSS</p>
            <p class="mr-2 bg-red-900 text-white p-1 rounded">HTML5</p>
            <p class="mr-2 bg-red-900 text-white p-1 rounded">JAVA SCRIPT</p>
          </span>
        </div>
        <div
          id="card"
          class="
        mx-4
        px-4
        md:w-5/12 md:auto
        w-auto
        rounded-3xl
        border-gray-300
        shadow-xl
        hover:shadow-2xl
        border-2
        mb-4
        "
        >
          <h2 class="mb-2 font-bold text-center pt-2">Note Taker App</h2>
          <div id="card-img">
            <img class="rounded-lg" src="./assets/images/Capture4.PNG" alt="" />
          </div>
          <div id="text-area" class="mb-2">
            <p class="mt-2 p-3 font-thin text-lg">
              This is an express application which uses heroku as a deploying
              platform. It will take user's input and save it on the server side
              as json format. User can create and delete the notes.
            </p>
          </div>
          <button class="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded">
            <a
              href="https://github.com/javantie/Note-Taker-App"
              target="_blank"
            >
              GitHub Repo
            </a>
          </button>
          <button class="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded ml-2">
            <a href="https://javantienotetaker.herokuapp.com/" target="_blank">
              View Live App
            </a>
          </button>
          <br />
          <span class="font-semibold">TECHNOLOGIES & LIBRARIES:</span>
          <span class="flex p-1 pb-4">
            <p class="mr-2 bg-red-900 text-white p-1 rounded">CSS</p>
            <p class="mr-2 bg-red-900 text-white p-1 rounded">HTML5</p>
            <p class="mr-2 bg-red-900 text-white p-1 rounded">JAVA SCRIPT</p>
          </span>
        </div>
      </section>
    </>
  );
}

export default Project;
