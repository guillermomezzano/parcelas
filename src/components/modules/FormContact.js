import image2 from "../../image/image2.jpg";

const FormContact = () => {
  return (
    <div className="divConteinerContact">
      <div className="divImgContact"></div>
      <form className="conteinerFormContact">
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
    </div>
  );
};

export default FormContact;
