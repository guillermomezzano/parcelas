//react
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//components
import Navbar from "../components/sections/Navbar";
import FormContactParcelas from "../components/modules/FormContactParcelas";
import Footer from "../components/sections/Footer";

// imagenes de la galeria
import imageGaleria1 from "../image/elEncantoDeCuracaviII/1.jpg";
import imageGaleria2 from "../image/elEncantoDeCuracaviII/2.jpg";
import imageGaleria3 from "../image/elEncantoDeCuracaviII/3.jpg";
import imageGaleria4 from "../image/elEncantoDeCuracaviII/4.jpg";
import imageGaleria5 from "../image/elEncantoDeCuracaviII/5.jpg";
import imageGaleria6 from "../image/elEncantoDeCuracaviII/6.jpg";
import imageGaleria7 from "../image/elEncantoDeCuracaviII/7.jpg";
import imageGaleria8 from "../image/elEncantoDeCuracaviII/8.jpg";
import imageGaleria9 from "../image/elEncantoDeCuracaviII/9.jpg";

//iconos

import iconoHouse from "../image/iconos/iconoHouse.png";
import iconoAcceso from "../image/iconos/iconoAcceso.jpg";
import iconoAltaPlusbalia from "../image/iconos/iconoAltaPlusbalia.png";
import iconoEscritura from "../image/iconos/iconoEscritura.png";
import iconoAgua from "../image/iconos/iconoAgua.png";
import iconoLuz from "../image/iconos/iconoLuz.png";

//styles

import "./Parcela.css";

const ParcelaElEncantoDeCuracaviII = () => {
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
      <div className="conteinerParcelaElEncantoII">
        <div className="conteinerParcelaPrecio">
          <p>precios desde</p>
          <div>
            <p>2.200 uf</p>
          </div>
        </div>

        <div>
          <div className="conteinerParcelaTitle">
            <h1>el encanto de curacaví II</h1>
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
              <img src={iconoAltaPlusbalia} alt=""></img>
              <p>Posibilidad de </p>
              <p>crédito directo</p>
            </div>
            <div>
              <img src={iconoEscritura} alt=""></img>
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
          <img src={imageGaleria1} alt=""></img>
          <img src={imageGaleria2} alt=""></img>
          <img src={imageGaleria3} alt=""></img>
          <img src={imageGaleria4} alt=""></img>
          <img src={imageGaleria5} alt=""></img>
          <img src={imageGaleria6} alt=""></img>
          <img src={imageGaleria7} alt=""></img>
          <img src={imageGaleria8} alt=""></img>
          <img src={imageGaleria9} alt=""></img>
        </div>
        <div className="conteinerCarruselGaleryImage">
          <Slider {...settings}>
            <img src={imageGaleria1} alt="" />
            <img src={imageGaleria2} alt="" />
            <img src={imageGaleria3} alt="" />
            <img src={imageGaleria4} alt="" />
            <img src={imageGaleria6} alt="" />
            <img src={imageGaleria7} alt="" />
            <img src={imageGaleria8} alt="" />
            <img src={imageGaleria9} alt="" />
          </Slider>
        </div>
      </div>
      <FormContactParcelas />
      <Footer />
    </div>
  );
};

export default ParcelaElEncantoDeCuracaviII;
