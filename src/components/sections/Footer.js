import logoSticky from "../../image/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logoWasap from "../../image/logoWasap.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="conteinerFooter">
        <img id="logoFooter" src={logoSticky}></img>
        <div>
          <a href="#">
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <div className="conteinerEnlacesFooterWasapInstagram">
            <EmailIcon fontSize="large" sx={{ color: "white" }} />
            <p>cristobal.foucaut@inmobiliariaelencanto.com</p>
          </div>
          <div className="conteinerEnlacesFooterWasapInstagram">
            <img src={logoWasap}></img>
            <p>+569 85451260</p>
          </div>
        </div>
        <h4> 2023 Inmobiliaria El Encanto | All Right Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
