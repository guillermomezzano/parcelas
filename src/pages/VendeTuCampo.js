import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import "./VendeTuCampo.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const VendeTuCampo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djuqe9l",
        "template_lnpvhi9",
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
      <div className="headerVendeTuCampo"></div>
      <div className="divTitleFormVendeTuCampo">
        <h1>¡ESCRÍBENOS PARA INICIAR UNA GRAN ALIANZA COMERCIAL!</h1>
        <hr></hr>
        <p>
          Contamos con el mejor equipo para vender tu campo. Déjanos tus datos
          en el formulario y un Asesor Comercial de Compra tu Parcela te
          contactará.
        </p>
      </div>
      <div className="divConteinerFormContactFooter">
        <form
          className="conteinerFormContactFooter"
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
              type="text"
              name="user_location"
              required
              placeholder="Lugar donde se encuetra el campo"
            ></input>
            <input
              type="text"
              name="user_amount"
              required
              placeholder="Cantidad de hectaréas"
            ></input>
          </div>

          <textarea rows="7" cols="50" required></textarea>
          <button className="btnFormContactFooter" type="submit" value="Send">
            agendar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default VendeTuCampo;
