import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djuqe9l",
        "template_8rz9uwx",
        form.current,
        "wk5uuQuewgYYXvZRi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="divConteinerContact">
        <div className="divImgContact"></div>
        <form className="conteinerFormContact" ref={form} onSubmit={sendEmail}>
          <h1>Contáctanos</h1>
          <div className="divInputNombreApellidoFormContact">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Nombre"
            ></input>
            <input
              type="text"
              name="user_last_name"
              required
              placeholder="Apellido"
            ></input>
          </div>
          <input
            type="email"
            name="user_email"
            required
            placeholder="Email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          ></input>
          <input
            type="tel"
            name="user_phone"
            required
            placeholder="Telefono"
          ></input>
          <input
            style={{ display: "none" }}
            value="no aplica"
            type="text"
            name="user_proyect"
            required
          ></input>
          <textarea rows="10" cols="50" name="message"></textarea>
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            agendar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
