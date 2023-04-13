//components
import Navbar from "../components/modules/Navbar";
import FormContactParcelas from "../components/modules/FormContactParcelas";
import Footer from "../components/sections/Footer";

// imagenes de la galeria
import imageGaleria1 from "../image/valleDelToro/a.jpg";
import imageGaleria2 from "../image/haciendaSantaJulia/haciendaSantajulia9.jpg";
import imageGaleria3 from "../image/haciendaSantaJulia/haciendaSantajulia3.jpg";
import imageGaleria4 from "../image/haciendaSantaJulia/haciendaSantajulia4.jpg";
import imageGaleria5 from "../image/haciendaSantaJulia/haciendaSantajulia5.jpg";
import imageGaleria6 from "../image/haciendaSantaJulia/haciendaSantajulia6.jpg";
import imageGaleria7 from "../image/haciendaSantaJulia/haciendaSantajulia7.jpg";
import imageGaleria8 from "../image/haciendaSantaJulia/haciendaSantajulia8.jpg";
import imageGaleria9 from "../image/haciendaSantaJulia/haciendaSantajulia9.jpg";

//iconos
import iconHouse from "../image/iconHouse.png";
import camino from "../image/iconoAcceso.jpg";
import altaPlusbalia from "../image/camino.jpg";
import iconEscritura from "../image/iconoEscritura.png";
import iconoAgua from "../image/iconoAgua.jpg";
import iconoLuz from "../image/iconoLuz.jpg";

//styles

import "./Parcela.css";

const ValleDelToro = () => {
  return (
    <div>
      <Navbar />
      <div className="conteinerParcelaDelToro">
        <div className="conteinerParcelaPrecio">
          <p>precios desde</p>
          <div>
            <p>$ 14.990.000</p>
          </div>
          <p>reserva: $ 400.000</p>
        </div>

        <div>
          <div className="conteinerParcelaTitle">
            <h1>valle del toro</h1>
            <hr></hr>
            <h4>CURACAVÍ</h4>
            <p>
              Parcelas agro-residenciales de 5000 mts cuadrados en planicie,
              cuentan con entrada y acceso controlado, Rol propio, luz con su
              propio medidor, factibilidad de agua, a solo 40 minutos del centro
              de santiago. No te pierdas esta oportunidad de cambiar tu estilo
              de vida y realizar una buena inversión
            </p>
          </div>
          <div className="conteinerParcelaInfo">
            <div>
              <img src={iconHouse}></img>
              <p>Rol propio</p>
            </div>
            <div>
              <img src={camino}></img>
              <p>Entrada y Acceso</p>
              <p>controlado</p>
            </div>
            <div>
              <img src={iconoLuz}></img>
              <p>Luz</p>
            </div>
            <div>
              <img src={iconoAgua}></img>
              <p>Agua</p>
            </div>
            <div>
              <img src={iconEscritura}></img>
              <p>Posibilidad de </p>
              <p>crédito directo</p>
            </div>
            <div>
              <img src={altaPlusbalia}></img>
              <p>Alta plus valia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conteinerParcelaImageGalery">
        <div className="conteinerParcelaImageGaleryTitle">
          <h1>galeria</h1>
          <div>
            <p>
              Parcelas agro-residenciales de 5000 mts cuadrados en planicie,
              cuentan con entrada y acceso controlado, Rol propio, luz con su
              propio medidor, factibilidad de agua, a solo 40 minutos del centro
              de santiago. No te pierdas esta oportunidad de cambiar tu estilo
              de vida y realizar una buena inversión
            </p>
          </div>
        </div>
        <div className="GaleryImageParcel">
          <img src={imageGaleria1}></img>
          <img src={imageGaleria2}></img>
          <img src={imageGaleria3}></img>
          <img src={imageGaleria4}></img>
          <img src={imageGaleria5}></img>
          <img src={imageGaleria6}></img>
          <img src={imageGaleria7}></img>
          <img src={imageGaleria8}></img>
          <img src={imageGaleria9}></img>
        </div>
      </div>
      <FormContactParcelas />
      <Footer />
    </div>
  );
};

export default ValleDelToro;
