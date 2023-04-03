import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import image1 from "../../image/image1.jpg";
import React from "react";
import Slider from "react-slick";

import image2 from "../../image/image2.jpg";

const SectionParcelasHome = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SampleNextArrow />,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <p className="tittleServices">nuestras parcelas</p>
        <hr></hr>
        <p className="DowntittleServices">bajada del tirulo</p>
      </div>
      <div className="divConteinerParcelas">
        <div className="divConteinerParcelasCarusel">
          <Slider {...settings}>
            <div className="conteinerUnaParcelaCarusel">
              <figure>
                <img src={image1} alt="" />

                <div className="capa">
                  <h3>slee dw</h3>
                  <p>loren de dedsesedesdesdesdesdesde</p>
                  <lu className="details">
                    <li> 100 kilimetros </li>
                    <li> 100 porecio </li>
                    <li> 100 kilimetros </li>
                    <li> 100 kilimetros </li>
                  </lu>
                  <Link to="/Parcela">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
              <figure>
                <img src={image2} alt="" />

                <div className="capa">
                  <h3>slee dw</h3>
                  <p>loren de dedsesedesdesdesdesdesde</p>
                  <lu className="details">
                    <li> 100 kilimetros </li>
                    <li> 100 porecio </li>
                    <li> 100 kilimetros </li>
                    <li> 100 kilimetros </li>
                  </lu>
                  <Link to="/Parcela">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
              <figure>
                <img src={image1} alt="" />

                <div className="capa">
                  <h3>slee dw</h3>
                  <p>loren de dedsesedesdesdesdesdesde</p>
                  <lu className="details">
                    <li> 100 kilimetros </li>
                    <li> 100 porecio </li>
                    <li> 100 kilimetros </li>
                    <li> 100 kilimetros </li>
                  </lu>
                  <Link to="/Parcela">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
              <figure>
                <img src={image2} alt="" />

                <div className="capa">
                  <h3>slee dw</h3>
                  <p>loren de dedsesedesdesdesdesdesde</p>
                  <lu className="details">
                    <li> 100 kilimetros </li>
                    <li> 100 porecio </li>
                    <li> 100 kilimetros </li>
                    <li> 100 kilimetros </li>
                  </lu>
                  <Link to="/Parcela">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
              <figure>
                <img src={image1} alt="" />

                <div className="capa">
                  <h3>slee dw</h3>
                  <p>loren de dedsesedesdesdesdesdesde</p>
                  <lu className="details">
                    <li> 100 kilimetros </li>
                    <li> 100 porecio </li>
                    <li> 100 kilimetros </li>
                    <li> 100 kilimetros </li>
                  </lu>
                  <Link to="/Parcela">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
            <div className="conteinerUnaParcelaCarusel">
              <figure>
                <img src={image2} alt="" />

                <div className="capa">
                  <h3>slee dw</h3>
                  <p>loren de dedsesedesdesdesdesdesde</p>
                  <lu className="details">
                    <li> 100 kilimetros </li>
                    <li> 100 porecio </li>
                    <li> 100 kilimetros </li>
                    <li> 100 kilimetros </li>
                  </lu>
                  <Link to="/Parcela">
                    <button className="btmDetailUnaParcela">detalle</button>
                  </Link>
                </div>
              </figure>
            </div>
          </Slider>
        </div>
      </div>
      <div className="conteinerFormContactHomeParcelas">
        <h3>
          Si quieres obtener mayor información sobre nuestras parcelas, déjanos
          tu correo electrónico y nuestro staff se contactará contigo a la
          brevedad posible
        </h3>
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
