import { Link } from "react-router-dom";

const FormContactParcelas = () => {
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
        </div>

        <select required>
          <option value="">Elija las parcelas de su interes</option>
          <option value="proyecto1">proyecto 1</option>
          <option value="proyecto2">proyecto 2</option>
          <option value="proyecto3">proyecto 3</option>
          <option value="proyecto4">proyecto 4</option>
        </select>
        <textarea rows="10" cols="50"></textarea>
        <button className="btnFonteinerFormContactFooter">agendar</button>
      </form>
    </div>
  );
};
export default FormContactParcelas;
