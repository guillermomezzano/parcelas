// import React, { useState } from "react";

import "./ControlledCarousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import imageCarouselOne from "../../image/haciendaSantaJulia/2.jpg";
import imageCarouselTwo from "../../image/elEncantoDeLoreto/1.jpg";

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
          <img src={imageCarouselOne} alt="" />
          <div className="divDetailsCarruselHeader">
            <h1>Hacienda santa Julia</h1>
            <h4>Curacaví</h4>
            <Link to={"/HaciendaSantaJulia"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselTwo} alt="" />
          <div className="divDetailsCarruselHeader">
            <h1>Valle del Toro</h1>
            <h4>Curacaví</h4>
            <Link to={"/ValleDelToro"}>
              <br />
              <br />
              <br />
              <br />
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselOne} alt="" />
          <div className="divDetailsCarruselHeader">
            <h1>El Encanto de Curacaví</h1>
            <h4>Curacaví</h4>
            <Link to={"/ElEncantoDeCuracavi"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselTwo} alt="" />
          <div className="divDetailsCarruselHeader">
            <h1>El Encanto de Curacaví II</h1>
            <h4>Curacaví</h4>
            <Link to={"/ElEncantoDeCuracaviII"}>
              <button className="btmCarruselHeader">detalle</button>
            </Link>
          </div>
        </div>
        <div className="divImgCarruselHeader">
          <img src={imageCarouselTwo} alt="" />
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

// import React, { useState } from "react";

// const ControlledCarousel = (images) => {
//   debugger;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const previousSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <button onClick={previousSlide}>&lt;</button>
//       <img src={images[currentIndex]} alt="Slide" />
//       <button onClick={nextSlide}>&gt;</button>
//     </div>
//   );
// };

// export default ControlledCarousel;
