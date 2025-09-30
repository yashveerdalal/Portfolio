import React, { useRef } from "react";
import "./ContactFormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import cartoon from "../images/cartoon-compressed.png";

export default function ContactForm({ id }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qpy7q9l", 
        "template_6f03z1w", 
        form.current,
        "aboloKBknJa-J0GqP" 
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
         
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Kindly refresh the page.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="contact-window" id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <img
          src={cartoon}
          alt="Yashveer Dalal"
          className="contact-wrapper-left"
        />
        <form ref={form} onSubmit={sendEmail} className="contact-wrapper-right">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            columns="15"
            placeholder="Share your thoughts and insights here; your feedback means a lot."
            required
          />
          <button className="btn" id="submitBtn" type="submit">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
