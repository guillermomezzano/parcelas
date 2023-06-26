import ReactPlayer from "react-player";
import Slider from "react-slick";
//components
import Footer from "../components/sections/Footer";

//styles
import "./LandingPages.css";

//image
import logo from "../image/logoNav.png";
import logoWasap from "../image/logoWasap.png";
import HaciendaSantaJulia from "../image/haciendaSantaJulia/6.jpg";
import ElEncantoDeLoreto from "../image/elEncantoDeLoreto/17.jpg";
import carruselElEncantoDeCuracavi from "../image/elEncantoDeCuracavi/10.jpg";
import ValleDelToro from "../image/valleDelToro/12.jpg";
import carruselElEncantoDeCuracaviII from "../image/elEncantoDeCuracaviII/10.jpg";

const landingPage = () => {
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
      <div className="header">
        <img src={logo} alt="" />
      </div>

      <div className="divTitle">
        <h1>conoce nuestras parcelas</h1>
      </div>
      <div className="divVideo">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5xFIsa0sJ64&ab_channel=FooBarServerless"
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
      <div className="divTitle">
        <h1>nuestros proyectos</h1>
      </div>
      <div className="divImg">
        <img src={HaciendaSantaJulia} alt=""></img>
        <img src={ElEncantoDeLoreto} alt=""></img>
        <img src={carruselElEncantoDeCuracavi} alt=""></img>
        <img src={ValleDelToro} alt=""></img>
        <img src={carruselElEncantoDeCuracaviII} alt=""></img>
      </div>
      <div className="conteinerCarruselGaleryImage">
        <Slider {...settings}>
          <img src={HaciendaSantaJulia} alt="" />
          <img src={ElEncantoDeLoreto} alt="" />
          <img src={carruselElEncantoDeCuracavi} alt="" />
          <img src={ValleDelToro} alt="" />
          <img src={carruselElEncantoDeCuracaviII} alt="" />
        </Slider>
      </div>
      <div className="divTitle">
        <h1>contacta a nuestros ejecutivos</h1>
        <a href="https://wa.link/sy5gyq">
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            <img src={logoWasap} alt=""></img>
            <p>escribenos</p>
          </button>
        </a>
      </div>
      <div className="divTitle">
        <h1>formas de financiamiento</h1>
      </div>
      <div className="divVideo">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5xFIsa0sJ64&ab_channel=FooBarServerless"
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
      <div className="divDetalleFinanciamiento">
        <h3>contado</h3>
        <h3>credito directo</h3>
        <h3>credito bancario</h3>
      </div>
      <div className="divTitle">
        <h1>¿qué documentos necesito?</h1>
      </div>
      <div className="divVideo">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5xFIsa0sJ64&ab_channel=FooBarServerless"
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
      <div className="divTitle">
        <h1>¿estas listo para cambiar tu vida y la de tu familia?</h1>
        <a href="https://wa.link/sy5gyq">
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            <img src={logoWasap} alt=""></img>
            <p>escribenos</p>
          </button>
        </a>
      </div>

      <div className="divTitle">
        <h1>contactanos ahora y obten un bono de 2.000.000 de pesos</h1>
        <a href="https://wa.link/sy5gyq">
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            <img src={logoWasap} alt=""></img>
            <p>escribenos</p>
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default landingPage;
