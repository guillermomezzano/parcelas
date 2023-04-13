import Navbar from "../components/modules/Navbar";
import Footer from "../components/sections/Footer";
import imageGaleria from "../image/imageVendeLoteo.jpg";

import "./QuienesSomos.css";

const QuinesSomos = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="divInfoQuinesSomos">
          <h1>¿QUIÉNES SOMOS?</h1>
          <hr></hr>
          <p>
            Compra Tu Parcela nace dentro del rubro inmobiliario gracias a la
            necesidad de posicionar una empresa seria y responsable, que además
            de brindar la seguridad de adquirir una propiedad y garantice a cada
            uno de nuestros clientes la satisfacción de realizar su proyecto de
            vida.
          </p>
        </div>
        <div className="divImgQuinesSomos">
          <img src={imageGaleria}></img>
        </div>
        <div className="divInfoQuinesSomos">
          <h1>¡LO SOÑASTE, LO LOGRASTE!</h1>
          <hr></hr>
          <p>
            Desde mediados de 2019, en Compra Tu Parcela nos especializamos en
            la venta de bienes raíces y parcelas de agrado de manera
            profesional, contando con la debida documentación y normativas de
            regulación como:
          </p>
          <ul>
            <li>Certificado de litigio</li>
            <li>Dominio vigente</li>
            <li>Certificado de asignación de roles</li>
            <li>Certificado de avalúo fiscal</li>
            <li>Certificado de deudas</li>
            <li>
              Planos catastrales con los 3 timbres que indica la subdivisión
              aprobada por el SAG, SII y Conservador de bienes raíces.
            </li>
          </ul>
        </div>
        <div className="divImgParallaxQuinesSomos"></div>
        <div className="divInfoQuinesSomos">
          <h1>NUESTRA MISIÓN</h1>
          <hr></hr>
          <p>
            Nuestro objetivo en Compra tu Parcela, responde a la necesidad de
            garantizar la realización del sueño de nuestros clientes, para
            iniciar un nuevo proyecto de vida. No es solo ofrecer un servicio de
            calidad, sino también ser respaldado por una empresa seria,
            comprometida con sus clientes, que brinde la seguridad y
            tranquilidad de realizar una inversión inteligente, rentable y
            duradera. Si lo sueñas, con Compra Tu Parcela ¡LO LOGRAS!
          </p>
        </div>
        <div className="divImgQuinesSomos">
          <img src={imageGaleria}></img>
        </div>
        <div className="divInfoQuinesSomos">
          <h1>NUESTRA VISIÓN</h1>
          <hr></hr>
          <p>
            Posicionarnos como una empresa sostenible en el tiempo, que siga
            brindando a sus clientes la tranquilidad y compromiso de cumplir su
            sueño, “Llevar a cabo su nuevo proyecto de vida”, siempre velando
            por los más altos estándares de calidad de servicio, con presencia
            en las zonas donde nuestro negocio sea valorado por nuestros
            clientes, creciendo día a día en nuestro país.
          </p>
        </div>
      </div>
      <form className="formContactQuienesSomos">
        <h1>Contáctanos</h1>
        <div className="conteinerInputFormContactQuienesSomos">
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
        <textarea rows="7" cols="50" required placeholder="Mensaje"></textarea>
        <button className="btnFormContactQuienesSomos">agendar</button>
      </form>
      <Footer />
    </div>
  );
};
export default QuinesSomos;
