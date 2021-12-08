import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div className="m-1 p-2 font-serif">
      <h1 className="font-bold text-3xl text-center text-red-800">
        CONTACT ME
      </h1>
      <p className="text-xl my-4 text-center">
        Please fill out the form below to send us an email and we will get back
        to you as soon as possible.
      </p>

      <div className="flex">
        <form
          id="contact-form"
          className="shadow p-3 rounded font-semibold w-5/6 mx-auto bg-gray-100 border border-red-800"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <label htmlFor="name">Name:</label>
            <input
              className="border border-black ml-2 rounded w-80 sm:w-full"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="flex mt-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-black ml-2 rounded w-80 sm:w-full"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="mb-4 mt-4 flex">
            <label htmlFor="message">Message:</label>
            <textarea
              className="border border-black ml-2 rounded w-72 sm:w-full"
              name="message"
              rows="3"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className=" flex justify-center">
            {" "}
            <button
              className="text-xl font-bold text-white px-2 rounded-lg pb-1 w-4/6 bg-blue-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
