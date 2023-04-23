import Slider from "react-slick";
import { Link, json } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ControlledCarousel.css";
import imagenes from "../../image/elEncantoDeCuracavi/carruselElEncantoDeCuracavi.jpg";
//data
import data from "../../parcelas.json";

const CarruselGaleria = (props) => {
  const { galeria } = props.parcela;
  const jsonGaleria = JSON.stringify(galeria);

  // const parcela = data.parcelas.find((unparcela) => unparcela.id === idParcela);
  // console.log("este es el props", props);
  // console.log("este es el galeria", galeria);

  const objetctGaleria = JSON.parse(jsonGaleria);
  console.log("objetctGaleria", objetctGaleria);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

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
    <div className="divConteinerParcelas">
      <div className="divConteinerParcelasCarusel">
        hola
        <Slider {...settings}>
          {objetctGaleria.map((objetctGaleria, index) => {
            // let imagenGaleria = objetctGaleria.url;
            // console.log("objetctGaleria.url", objetctGaleria.url);
            // console.log("imagenGaleria", imagenGaleria);
            return (
              <div key={index}>
                <img src={objetctGaleria.url}></img>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CarruselGaleria;
