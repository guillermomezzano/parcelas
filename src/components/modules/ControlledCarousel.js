// import React, { useState } from "react";
import "./ControlledCarousel.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import imageCarouselOne from "../../image/haciendaSantaJulia/haciendaSantajulia12.jpg";
import imageCarouselTwo from "../../image/elEncantoDeLoreto/elEncantoDeLoreto1.jpg";

const ControlledCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,

    responsive: [
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
    <div className="conteinerCarruselHeader">
      <Slider {...settings}>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselOne} />
          <div className="divDetailsCarruselHeader">
            <h1>Hacienda santa Julia</h1>
            <h4>Curacaví</h4>
            <Link to={"/HaciendaSantaJulia"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselTwo} />
          <div className="divDetailsCarruselHeader">
            <h1>Valle del Toro</h1>
            <h4>Curacaví</h4>
            <Link to={"/ValleDelToro"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselOne} />
          <div className="divDetailsCarruselHeader">
            <h1>El Encanto de Curacaví</h1>
            <h4>Curacaví</h4>
            <Link to={"/ElEncantoDeCuracavi"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselTwo} />
          <div className="divDetailsCarruselHeader">
            <h1>El Encanto de Curacaví II</h1>
            <h4>Curacaví</h4>
            <Link to={"/ElEncantoDeCuracaviII"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselTwo} />
          <div className="divDetailsCarruselHeader">
            <h1>El Encanto de Loreto</h1>
            <h4>Talagante</h4>
            <Link to={"/Proyectos"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default ControlledCarousel;
