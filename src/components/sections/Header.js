import NabVar from "../modules/Navbar";
import ControlledCarousel from "../modules/ControlledCarousel";

const Header = () => {
  return (
    <div>
      <NabVar />

      {/* <div className="divConteinerHader"> */}
      <ControlledCarousel />
      {/* <form className="conteinerFormContact">
          <h1>Contáctanos</h1>
          <div className="divInputNombreApellidoFormContact">
            <input type="text" required placeholder="Nombre"></input>
            <input type="text" required placeholder="Apellido"></input>
          </div>
          <input
            type="email"
            required
            placeholder="Email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          ></input>
          <input type="tel" required placeholder="Telefono"></input>

          <textarea rows="10" cols="50"></textarea>
          <button className="btnFonteinerFormContact">agendar</button>
        </form>
      </div> */}
    </div>
  );
};
export default Header;
