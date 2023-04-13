import "./Navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";

const NabVar = () => {
  return (
    <div className="fixed">
      <div className="topBar">
        <div className="topBarContenedorCorreo">
          <EmailIcon fontSize="large" sx={{ color: "white" }} />
          <p>cristobal.foucaut@inmobiliariaelencanto.com</p>
        </div>
        <a href="">
          <InstagramIcon fontSize="large" sx={{ color: "white" }} />
        </a>
      </div>
      <nav>
        <Link to="/">
          <a className="logo">
            <img src={logo}></img>
          </a>
        </Link>

        <input type="checkbox" name="" id="toggle" />
        <label for="toggle">
          <i>
            <DehazeIcon />
          </i>
        </label>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/Proyectos">
                <a id="aServiciosNavbar">
                  proyectos
                  <div className="divSubmenu"></div>
                  <ul className="submenu">
                    <li>
                      <Link to="/HaciendaSantaJulia">
                        <a>Hacienda santa Julia</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ValleDelToro">
                        <a>Valle del Toro</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ElEncantoDeCuracavi">
                        <a>El Encanto de Curacaví</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ElEncantoDeCuracaviII">
                        <a>El Encanto de Curacaví II</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ElEncantoDeLoreto">
                        <a>El Encanto de Loreto</a>
                      </Link>
                    </li>
                  </ul>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/VendeTuCampo">
                <a>Vende tu campo</a>
              </Link>
            </li>
            <li>
              <Link to="/QuinesSomos">
                <a>quienes somos</a>
              </Link>
            </li>
            <li>
              <a href="/Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NabVar;
