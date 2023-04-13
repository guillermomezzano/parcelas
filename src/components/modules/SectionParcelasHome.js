import "./SectionParcelasHome.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import HaciendaSantaJulia from "../../image/haciendaSantaJulia/haciendaSantajulia6.jpg";
import ElEncantoDeLoreto from "../../image/elEncantoDeLoreto/elEncantoDeLoreto10.jpg";
import carruselElEncantoDeCuracavi from "../../image/elEncantoDeCuracavi/carruselElEncantoDeCuracavi.jpg";
import ValleDelToro from "../../image/valleDelToro/b.jpg";
import carruselElEncantoDeCuracaviII from "../../image/haciendaSantaJulia/haciendaSantajulia8.jpg";

const SectionParcelasHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <div className="conteinerTitleCarrouselParcelasHome">
        <h1 className="tittleServices">nuestras parcelas</h1>
        <hr></hr>
        <h3 className="DowntittleServices">
          Selecciona la parcela de tu preferencia para mayor información
        </h3>
      </div>
      <div className="divConteinerParcelas">
        <div className="divConteinerParcelasCarusel">
          <Slider {...settings}>
            <div className="conteinerUnaParcelaCarusel">
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
                  <Link to="/HaciendaSantaJulia">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
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
                  <Link to="/ValleDelToro">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
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
                  <Link to="/HaciendaSantaJulia">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
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
                  <Link to="/HaciendaSantaJulia">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
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
                  <Link to="/HaciendaSantaJulia">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
          </Slider>
        </div>
      </div>
      <div className="conteinerFormContactHomeParcelas">
        <h2>
          Si quieres obtener mayor información sobre nuestras parcelas, déjanos
          tu correo electrónico y nuestro staff se contactará contigo a la
          brevedad posible
        </h2>
        <form className="formContactHomeParcelas">
          <input
            type="email"
            required
            placeholder="Email"
            pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
          ></input>
          <button className="btnContactHome">deseo mayor información</button>
        </form>
      </div>
    </div>
  );
};
export default SectionParcelasHome;
