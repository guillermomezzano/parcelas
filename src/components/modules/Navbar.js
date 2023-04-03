// import "./App.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logo2 from "../../image/logo2.png";
import { Link } from "react-router-dom";

const NabVar = () => {
  return (
    <div className="fixed">
      <div className="topBar">
        <div className="topBarContenedorCorreo">
          <EmailIcon fontSize="large" sx={{ color: "white" }} />
          <p>correo@gmail.com</p>
        </div>
        <a href="#">
          <InstagramIcon fontSize="large" sx={{ color: "white" }} />
        </a>
      </div>
      <nav>
        <Link to="/">
          <a href="#" className="logo">
            <img src={logo2}></img>
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
                <a href="#">Home</a>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/Parcelas">
                <a href="#" id="aServiciosNavbar">
                  Servicios
                  <div className="divSubmenu"></div>
                  <ul className="submenu">
                    <li>
                      <Link to="/Parcela">
                        <a href="#">Servicio 1</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Parcela">
                        <a href="#">Servicio 2</a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Parcela">
                        <a href="#">Servicio 3</a>
                      </Link>
                    </li>
                  </ul>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/VendeTuCampo">
                <a href="#" id="vendetucampo">
                  Vende tu campo
                </a>
              </Link>
            </li>
            <li>
              <Link to="/QuinesSomos">
                <a href="#">quienes somos</a>
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
