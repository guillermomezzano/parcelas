import { Link } from "react-router-dom";
import "./FormContactVendeTuCampo.css";

const FormContactVendeTuCampo = () => {
  return (
    <div className="divConteinerFormContactFooter">
      <form className="conteinerFormContactFooter">
        <h1>Contacta con nuestros asesores</h1>
        <div>
          <input type="text" required placeholder="Nombre"></input>
          <input type="text" required placeholder="Apellido"></input>
          <input
            type="email"
            required
            placeholder="Email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          ></input>
          <input type="tel" required placeholder="Telefono"></input>
          <input
            type="text"
            required
            placeholder="Lugar donde se encuetra el campo"
          ></input>
          <input
            type="text"
            required
            placeholder="Cantidad de hectaréas"
          ></input>
        </div>

        <textarea rows="7" cols="50" required></textarea>
        <button className="btnFonteinerFormContactFooter">agendar</button>
      </form>
    </div>
  );
};
export default FormContactVendeTuCampo;
