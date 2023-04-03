import Navbar from "../components/modules/Navbar";
import imageGaleria from "../image/imageGaleria.jpg";
import FormContactParcelas from "../components/modules/FormContactParcelas";
import Footer from "../components/sections/Footer";
import iconHouse from "../image/iconHouse.png";
import { Link } from "react-router-dom";

const Parcela = () => {
  return (
    <div>
      <Navbar />
      <div className="conteinerParcela">
        <div className="conteinerParcelaPrecio">
          <p>precios desde</p>
          <div>
            <p>$ 14.990.000</p>
          </div>
          <p>reserva: $ 400.000</p>
        </div>

        <div>
          <div className="conteinerParcelaTitle">
            <h1>VIVE SANTO DOMINGO</h1>
            <hr></hr>
            <h4>REGIÓN DE VALPARAÍSO</h4>
            <p>
              En el sector más exclusivo de la V Región, la “comuna parque” te
              espera ofreciéndote la mayor tranquilidad que siempre soñaste, con
              esta maravillosa parcela agrícola, a solo 30 min de las mejores
              playas de la zona y el puerto de San Antonio.
            </p>
          </div>
          <div className="conteinerParcelaInfo">
            <div>
              <img src={iconHouse}></img>
              <p>Desde 5.000 m2</p>
            </div>
            <div>
              <img src={iconHouse}></img>
              <p>Rol propio individual</p>
            </div>
            <div>
              <img src={iconHouse}></img>
              <p>Accesos estabilizados</p>
            </div>
            <div>
              <img src={iconHouse}></img>
              <p>Entrada Principal</p>
            </div>
            <div>
              <img src={iconHouse}></img>
              <p>Listo para escriturar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conteinerParcelaImageGalery">
        <div className="conteinerParcelaImageGaleryTitle">
          <h1>galeria</h1>
          <div>
            <p>
              Disfruta de los paisajes que acompañan a nuestra parcela agrícola
              y dale un vistazo a este hermoso lugar con esta galería de
              imágenes que tenemos para ti. ¿Deseas más información? revisa
              nuestro folleto informativo o contacta con cualquiera de nuestros
              asesores y vive la experiencia Compra Tu Parcela.
            </p>
          </div>
        </div>
        <div className="GaleryImageParcel">
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
          <img src={imageGaleria}></img>
        </div>
      </div>

      <FormContactParcelas />
      <Footer />
    </div>
  );
};

export default Parcela;
