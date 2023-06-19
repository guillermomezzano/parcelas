import ReactPlayer from "react-player";
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
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" />
      </div>

      <div className="divInfoQuinesSomos">
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
      <div className="divInfoQuinesSomos">
        <h1>nuestros proyectos</h1>
      </div>
      <div className="divImg">
        <img src={HaciendaSantaJulia} alt=""></img>
        <img src={ElEncantoDeLoreto} alt=""></img>
        <img src={carruselElEncantoDeCuracavi} alt=""></img>
        <img src={ValleDelToro} alt=""></img>
        <img src={carruselElEncantoDeCuracaviII} alt=""></img>
      </div>
      <div className="divInfoQuinesSomos">
        <h1>contacta a nuestros ejecutivos</h1>
        <a href="https://wa.link/sy5gyq">
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            <img src={logoWasap} alt=""></img>
            escribenos
          </button>
        </a>
      </div>
      <div className="divInfoQuinesSomos">
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
        <h1>contado</h1>
        <h1>credito directo</h1>
        <h1>credito bancario</h1>
      </div>
      <div className="divInfoQuinesSomos">
        <h1>¿ qué documentos necesito ?</h1>
      </div>
      <div className="divVideo">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=5xFIsa0sJ64&ab_channel=FooBarServerless"
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
      <div className="divInfoQuinesSomos">
        <h1>¿ estas listo para cambiar tu vida y la de tu familia ?</h1>
        <a href="https://wa.link/sy5gyq">
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            contactanos
          </button>
        </a>
      </div>

      <div className="divInfoQuinesSomos">
        <h1>contactanos ahora y obten un bono de 2.000.000 de pesos</h1>
        <a href="https://wa.link/sy5gyq">
          <button
            type="submit"
            value="Send"
            className="btnFonteinerFormContact"
          >
            contactanos
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default landingPage;
