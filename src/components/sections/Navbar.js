import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logoSticky from "../../image/logoNav.png";
import "./NavBarr.css";
const NabVar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  console.log(navRef);

  return (
    <>
      <div className="topBar">
        <div className="topBarContenedorCorreo">
          <EmailIcon fontSize="large" sx={{ color: "white" }} />
          <p>cristobal.foucaut@inmobiliariaelencanto.com</p>
        </div>
        <a href="">
          <InstagramIcon fontSize="large" sx={{ color: "white" }} />
        </a>
      </div>
      <header>
        <a href="/">
          <img className="imageLogo" src={logoSticky} alt="" />
        </a>
        <nav ref={navRef}>
          <a href="/">Home</a>
          <div className="dropdown">
            <button className="dropbtn">
              <a href="/Proyectos"> Proyectos</a>
            </button>
            <div className="dropdown-content">
              <a href="/ElEncantoDeCuracavi">El Encanto De Curacavi</a>
              <a href="/ElEncantoDeCuracaviII">El Encanto De Curacavi II</a>
              <a href="/ElEncantoDeLoreto">El Encanto De Loreto</a>
              <a href="/ValleDelToro">Valle Del Toro</a>
              <a href="/HaciendaSantaJulia">Hacienda Santa Julia</a>
            </div>
          </div>
          <a href="/QuinesSomos">quienes somos</a>
          <a href="/VendeTuCampo">vende tu campo</a>
          <a href="/Contacto">contacto</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default NabVar;
