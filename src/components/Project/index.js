import React from "react";
import stack from "../../assets/images/stack.png";
import coinNerd from "../../assets/images/Capture2.PNG";
import bookspic from "../../assets/images/screenshot.png";
import salonxp from "../../assets/images/salonxp.PNG";

const projects = [
  {
    title: "Stack_Underflo",
    image: stack,
    description:
      "The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter. The application provides references to websites, books, coding puzzles, and answer to questions submitted. This was a group project and I was mainly resposible for the front-end of the application.",
    applink: "https://stack-underflo.herokuapp.com/",
    repolink: "https://github.com/javantie/stack-underflow",
    languages: ["HTML5", "CSS", "JavaScript", "Node.js", "TailwindCSS"],
  },
  {
    title: "Coin Nerd",
    image: coinNerd,
    description:
      "This site provides vital information to those who would like to invest in cryptocurrency Updates in real-time, allowing users to find the latest rates for a variety of crypto currencies The site also provides a display of the bitcoin twitter feed Multiple APis were use to retreive the data from other third party website such as Crypto-Compare ",
    applink: "https://javantie.github.io/Coin-Nerds/",
    repolink: "https://github.com/javantie/Coin-Nerds",
    languages: ["TAILWINDCSS", "JavaScript", "Node.js", "Rest API", "HTML5"],
  },
  {
    title: "Book Search Engine",
    image: bookspic,
    description:
      "This is a book search engine application that allows users to search for their favorate books using a Google Books API. Users are also able to save their seached book for later use. This app is Full-Stack MERN application that uses MongoDB, Express, React, and Node.js. ",
    applink: "https://radiant-meadow-67856.herokuapp.com/",
    repolink: "https://github.com/javantie/Book-Search-Engine",
    languages: [
      "HTML5",
      "JavaScript",
      "Node.js",
      "TailwindCSS",
      "MongoDB",
      "Express",
      "React",
      "GraphQL",
    ],
  },
  {
    title: "Salon-Xperience",
    image: salonxp,
    description:
      "The Stack-Underflow app is a diversified resource center where fledgling coders go to expand their knowledge to the next level. It provides coders with resources to ignite their light about a subject matter. The application provides references to websites, books, coding puzzles, and answer to questions submitted. This was a group project and I was mainly resposible for the front-end of the application.",
    applink: "https://salon-xperience.herokuapp.com/login",
    repolink: "https://github.com/nylesor28/salon-xperience",
    languages: [
      "HTML5",
      "JavaScript",
      "Node.js",
      "TailwindCSS",
      "MongoDB",
      "Express",
      "React",
      "GraphQL",
    ],
  },
];

function Project() {
  return (
    <>
      <div id="my-work" className="md:flex md:flex-row md:justify-evenly flex-wrap">
        {projects.map((project) => (
          <div
            id="card"
            className="
          mx-4
          px-4
          md:w-5/12 md:auto
          w-auto
          rounded-md
          shadow-xl
          mb-4
        "
            key={project.title}
          >
            <h2 className="mb-2 font-bold text-center pt-2 text-lg">
              {project.title}
            </h2>
            <div id="card-img">
              <img className="rounded-lg" src={project.image} alt="Project-1" />
            </div>
            <div id="text-area" className="mb-2">
              <p className=" mt-2 font-thin text-lg p-3">{project.description}</p>
            </div>
            <a href={project.repolink} target="blank">
              <button className="bg-red-900 font-bold hover:bg-red-400 text-xl text-white p-1 mb-2 rounded">
                GitHub Repo
              </button>
            </a>
            <button className="bg-red-900 text-white p-1 mb-2 text-lg font-bold rounded ml-2">
              <a href={project.applink} target="_blank">
                View Live App
              </a>
            </button>
            <br />
            <span className="font-semibold">TECHNOLOGIES & LIBRARIES:</span>
            <div className="flex p-1 pb-4 flex-wrap">
              {project.languages.map((language) => (
                <p key={language} className="mr-2 bg-red-900 text-white p-1 rounded mt-1">
                  {language}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
