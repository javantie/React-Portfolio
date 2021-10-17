import React from "react";

function Footer() {
  return (
    <footer >
      <ul className="pr-6 font-semibold pt-4 sm:w-2/5 text-2xl flex ">
        <li className="pl-4 pt-4">
          <a href="tel:+13473044422">📞 Call Me</a>
        </li>
        <li className="pt-4 pl-4">
          <a className="" href="mailto:javantieclarke@gmail.com">
            📧 Email
          </a>
        </li>
        <li className="pt-4 pl-4">
          <a href="https://github.com/javantie" target="blank">
            💻 Github
          </a>
        </li>
        <li className="pt-4 pl-4">
          <a
            href="https://www.linkedin.com/in/akeem-clarke-544b6aa2"
            target="blank"
          >
            👨🏽‍💼 LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer