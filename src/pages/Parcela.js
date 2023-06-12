//react
import { useEffect } from "react";

//components
import Navbar from "../components/sections/Navbar";
import FormContactParcelas from "../components/modules/FormContactParcelas";
import Footer from "../components/sections/Footer";
// import CarruselGaleria from "../components/modules/CarruselGaleria";

// imagenes de la galeria
import imageGaleria9 from "../image/elEncantoDeLoreto/9.jpg";

//iconos
import iconoHouse from "../image/iconos/iconoHouse.png";
import iconoAcceso from "../image/iconos/iconoAcceso.jpg";
import iconoAltaPlusbalia from "../image/iconos/iconoAltaPlusbalia.png";
import iconoEscritura from "../image/iconos/iconoEscritura.png";
import iconoAgua from "../image/iconos/iconoAgua.png";
import iconoLuz from "../image/iconos/iconoLuz.png";
//styles
import "./Parcela.css";

//data
import data from "../parcelas.json";

const Parcela = (props) => {
  const { idParcela } = props;
  const parcela = data.parcelas.find((unparcela) => unparcela.id === idParcela);
  // const parcelaObject = JSON.stringify(parcela);

  useEffect(() => {
    console.log("parcela", parcela);
  }, [parcela]);

  // useEffect(() => {
  //   setFondo(JSON.stringify(parcela.backgroundImage));
  // }, []);

  // setFondo(backgroundImage);
  // const parcelaParce = ;

  switch (parcela.id) {
    case "P1":
      var conteinerParcela = "conteinerParcelaElEncanto";
      break;
    case "P2":
      conteinerParcela = "conteinerParcelaElEncantoII";
      break;
    case "P3":
      conteinerParcela = "cconteinerParcelaElEncantoLoreto";
      break;
    case "P4":
      conteinerParcela = "conteinerParcelaDelToro";
      break;
    case "P5":
      conteinerParcela = "conteinerParcelaSantajulia";
      break;

    default:
      break;
  }

  return (
    <div>
      <Navbar />
      <div className={conteinerParcela}>
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
              <img src={iconoHouse} alt=""></img>
              <p>Rol propio</p>
            </div>
            <div>
              <img src={iconoAcceso} alt=""></img>
              <p>Entrada y Acceso</p>
              <p>controlado</p>
            </div>
            <div>
              <img src={iconoLuz} alt=""></img>
              <p>Luz</p>
            </div>
            <div>
              <img src={iconoAgua} alt=""></img>
              <p>Agua</p>
            </div>
            <div>
              <img src={iconoEscritura} alt=""></img>
              <p>Posibilidad de </p>
              <p>crédito directo</p>
            </div>
            <div>
              <img src={iconoAltaPlusbalia} alt=""></img>
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
          {parcela.galeria.map((imagen) => (
            <div key={imagen.idImg}>
              <p>{imagen.mensaje}</p>
              <img src={imageGaleria9} alt={imagen.mensaje} />
            </div>
          ))}
        </div>
        {/* <CarruselGaleria className="CarruselGaleria" parcela={parcela} /> */}
      </div>
      <FormContactParcelas />
      <Footer />
    </div>
  );
};

export default Parcela;
