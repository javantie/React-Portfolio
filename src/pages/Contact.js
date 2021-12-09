import React, { useState } from "react";
import emailjs from "emailjs-com";


function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tvsmfye",
        "template_2hrx594",
        e.target,
        "user_2DCiRQIylnJKjcFFvztNv"
      )
      .then((results) => {
        console.log(results);
        alert("Thank you for your message! We will get back to you soon");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again later");
      });
    console.log("Submit Form", formState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-black ml-2 rounded w-80 sm:w-full"
              type="text"
              name="email"
              defaultValue={email}
              onChange={handleChange}
            />
          </div>
          <div className="flex mt-4">
            <label htmlFor="phone">Email:</label>
            <input
              className="border border-black ml-2 rounded w-80 sm:w-full"
              type="number"
              name="phone"
              defaultValue={phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 mt-4 flex">
            <label htmlFor="message">Message:</label>
            <textarea
              className="border border-black ml-2 rounded w-72 sm:w-full"
              name="message"
              rows="3"
              defaultValue={message}
              onChange={handleChange}
            />
          </div>

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
