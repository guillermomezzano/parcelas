//react
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

//styles
import "./FormContactParcelas.css";

const FormContactParcelas = () => {
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
    <div className="divConteinerFormContactParcelas">
      <form
        className="conteinerFormContactParcelas"
        ref={form}
        onSubmit={sendEmail}
      >
        <h1>Contacta con nuestros asesores</h1>
        <div>
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
          <input
            type="email"
            required
            name="user_email"
            placeholder="Email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          ></input>
          <input
            type="tel"
            name="user_phone"
            required
            placeholder="Telefono"
          ></input>
        </div>

        <select required name="user_proyect">
          <option value="">Elija las parcelas de su interes</option>
          <option value="proyecto1">El Encanto De Curacavi</option>
          <option value="proyecto2">El Encanto De Curacavi II</option>
          <option value="proyecto3">El Encanto De Loreto</option>
          <option value="proyecto4">Hacienda Santa Julia</option>
          <option value="proyecto5">Valle Del Toro</option>
        </select>
        <textarea rows="7" cols="50" name="message" required></textarea>
        <button className="btnFormContactParcelas" type="submit" value="Send">
          agendar
        </button>
      </form>
    </div>
  );
};
export default FormContactParcelas;
