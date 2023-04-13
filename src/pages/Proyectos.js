import HaciendaSantaJulia from "../image/haciendaSantaJulia/haciendaSantajulia6.jpg";
import ElEncantoDeLoreto from "../image/elEncantoDeLoreto/elEncantoDeLoreto10.jpg";
import carruselElEncantoDeCuracavi from "../image/elEncantoDeCuracavi/carruselElEncantoDeCuracavi.jpg";
import ValleDelToro from "../image/valleDelToro/b.jpg";
import carruselElEncantoDeCuracaviII from "../image/haciendaSantaJulia/haciendaSantajulia8.jpg";
import Footer from "../components/sections/Footer";
import Navbar from "../components/modules/Navbar";
import { Link } from "react-router-dom";
import "./Proyectos.css";

const Proyectos = () => {
  return (
    <div>
      <Navbar />
      <div className="conteinerTitleProyectos">
        <h1 className="tittleProyectos">nuestras parcelas</h1>
        <hr></hr>
        <h3 className="DowntittleProyectos">
          Selecciona la parcela de tu preferencia para mayor información
        </h3>
      </div>
      <div className="conteinerProyectos">
        <div className="conteinerUnProyecto">
          <figure>
            <img src={HaciendaSantaJulia} alt="" />

            <div className="capa">
              <h2>Hacienda santa Julia</h2>
              <h3>Curacaví</h3>
              <lu className="details">
                <li> Alta plus valia </li>
                <li> Luz </li>
                <li> Rol Propio </li>
                <li> Agua </li>
                <li> Posibilidad de crédito directo </li>
                <li> Entrada y Acceso controlado </li>
              </lu>
              <Link to="/Parcela">
                <button className="btmDetailUnaParcela">detalle</button>
              </Link>
            </div>
          </figure>
        </div>
        <div className="conteinerUnProyecto">
          <figure>
            <img src={ValleDelToro} alt="" />

            <div className="capa">
              <h2>Valle del Toro</h2>
              <h3>Curacaví</h3>
              <lu className="details">
                <li> Alta plus valia </li>
                <li> Luz </li>
                <li> Rol Propio </li>
                <li> Agua </li>
                <li> Posibilidad de crédito directo </li>
                <li> Entrada y Acceso controlado </li>
              </lu>
              <Link to="/Parcela">
                <button className="btmDetailUnaParcela">detalle</button>
              </Link>
            </div>
          </figure>
        </div>
        <div className="conteinerUnProyecto">
          <figure>
            <img src={carruselElEncantoDeCuracavi} alt="" />

            <div className="capa">
              <h2>El Encanto de Curacaví</h2>
              <h3>Curacaví</h3>
              <lu className="details">
                <li> Alta plus valia </li>
                <li> Luz </li>
                <li> Rol Propio </li>
                <li> Agua </li>
                <li> Posibilidad de crédito directo </li>
                <li> Entrada y Acceso controlado </li>
              </lu>
              <Link to="/Parcela">
                <button className="btmDetailUnaParcela">detalle</button>
              </Link>
            </div>
          </figure>
        </div>
        <div className="conteinerUnProyecto">
          <figure>
            <img src={carruselElEncantoDeCuracaviII} alt="" />

            <div className="capa">
              <h2>El Encanto de Curacaví II</h2>
              <h3>Curacaví</h3>
              <lu className="details">
                <li> Alta plus valia </li>
                <li> Luz </li>
                <li> Rol Propio </li>
                <li> Agua </li>
                <li> Posibilidad de crédito directo </li>
                <li> Entrada y Acceso controlado </li>
              </lu>
              <Link to="/Parcela">
                <button className="btmDetailUnaParcela">detalle</button>
              </Link>
            </div>
          </figure>
        </div>
        <div className="conteinerUnProyecto">
          <figure>
            <img src={ElEncantoDeLoreto} alt="" />

            <div className="capa">
              <h2>El Encanto de Loreto</h2>
              <h3>Talagante</h3>
              <lu className="details">
                <li> Alta plus valia </li>
                <li> Luz </li>
                <li> Rol Propio </li>
                <li> Agua </li>
                <li> Posibilidad de crédito directo </li>
                <li> Entrada y Acceso controlado </li>
              </lu>
              <Link to="/Parcela">
                <button className="btmDetailUnaParcela">detalle</button>
              </Link>
            </div>
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Proyectos;
