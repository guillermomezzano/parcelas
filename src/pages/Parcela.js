//react
// import { useParams, Link, useNavigate } from "react-router-dom";

//components
import Navbar from "../components/modules/Navbar";
import FormContactParcelas from "../components/modules/FormContactParcelas";
import Footer from "../components/sections/Footer";
import CarruselGaleria from "../components/modules/CarruselGaleria";

// imagenes de la galeria
import imageGaleria1 from "../image/elEncantoDeLoreto/elEncantoDeLoreto1.jpg";
import imageGaleria2 from "../image/elEncantoDeLoreto/elEncantoDeLoreto2.jpg";
import imageGaleria3 from "../image/elEncantoDeLoreto/elEncantoDeLoreto3.JPG";
import imageGaleria4 from "../image/elEncantoDeLoreto/elEncantoDeLoreto4.JPG";
import imageGaleria5 from "../image/elEncantoDeLoreto/elEncantoDeLoreto5.JPG";
import imageGaleria6 from "../image/elEncantoDeLoreto/elEncantoDeLoreto6.JPG";
import imageGaleria7 from "../image/elEncantoDeLoreto/elEncantoDeLoreto7.JPG";
import imageGaleria8 from "../image/elEncantoDeLoreto/elEncantoDeLoreto8.JPG";
import imageGaleria9 from "../image/elEncantoDeLoreto/elEncantoDeLoreto9.jpg";

//iconos
import iconHouse from "../image/iconHouse.png";
import camino from "../image/iconoAcceso.jpg";
import altaPlusbalia from "../image/image003.png";
import iconEscritura from "../image/iconoEscritura.png";
import iconoAgua from "../image/image002.png";
import iconoLuz from "../image/image001.png";

//styles
import "./Parcela.css";

//data
import data from "../parcelas.json";

const Parcela = (props) => {
  const { idParcela } = props;
  const parcela = data.parcelas.find((unparcela) => unparcela.id === idParcela);
  // const parcelaParce = JSON.parse(parcela);
  // console.log(parcelaParce);

  switch (parcela.id) {
    case "P1":
      var conteinerParcela = "conteinerParcelaElEncanto";
      break;
    case "P2":
      var conteinerParcela = "conteinerParcelaElEncantoII";
      break;
    case "P3":
      var conteinerParcela = "cconteinerParcelaElEncantoLoreto";
      break;
    case "P4":
      var conteinerParcela = "conteinerParcelaDelToro";
      break;
    case "P5":
      var conteinerParcela = "conteinerParcelaSantajulia";
      break;

    default:
      break;
  }

  console.log("este es el parcela", parcela);
  return (
    <div>
      <Navbar />
      <div
        className={conteinerParcela}
        // style={{ backgroundImage: parcela.backgroundImage }}
      >
        <div className="conteinerParcelaPrecio">
          <p>precios desde</p>
          <div>
            <p>$ {parcela.precio}</p>
          </div>
          <p>reserva: $ {parcela.reserva}</p>
        </div>

        <div>
          <div className="conteinerParcelaTitle">
            <h1>{parcela.nombre}</h1>
            <hr></hr>
            <h4>{parcela.region}</h4>
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
        <CarruselGaleria className="CarruselGaleria" parcela={parcela} />
      </div>
      <FormContactParcelas />
      <Footer />
    </div>
  );
};

export default Parcela;
