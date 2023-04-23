//react
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//components
import Navbar from "../components/modules/Navbar";
import FormContactParcelas from "../components/modules/FormContactParcelas";
import Footer from "../components/sections/Footer";

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

import { Link } from "react-router-dom";

const ElEncantoDeLoreto = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          background: "black",
          height: "200px",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
      <Navbar />
      <div className="conteinerParcelaElEncantoLoreto">
        <div className="conteinerParcelaPrecio">
          <p>precios desde</p>
          <div>
            <p>$ 14.990.000</p>
          </div>
          <p>reserva: $ 400.000</p>
        </div>

        <div>
          <div className="conteinerParcelaTitle">
            <h1>el encanto de loreto</h1>
            <hr></hr>
            <h4>TALAGANTE</h4>
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
        <div className="conteinerCarruselHeader">
          <Slider {...settings}>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria1} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria2} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria3} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria4} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria6} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria7} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria8} />
            </div>
            <div className="divImgCarruselHeader">
              <img src={imageGaleria9} />
            </div>
          </Slider>
        </div>
      </div>
      <FormContactParcelas />
      <Footer />
    </div>
  );
};

export default ElEncantoDeLoreto;
