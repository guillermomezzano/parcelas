import logoSticky from "../../image/logoFoter.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logoWasap from "../../image/logoWasap.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="conteinerFooter">
        <img id="logoFooter" src={logoSticky} alt="" />
        <div>
          <a href="#">
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <div className="conteinerEnlacesFooterWasapInstagram">
            <EmailIcon fontSize="large" sx={{ color: "white" }} />
            <p>cristobal.foucaut@inmobiliariaelencanto.com</p>
          </div>
          <div className="conteinerEnlacesFooterWasapInstagram">
            <a href="https://walink.co/152e16">
              <img src={logoWasap} alt=""></img>
            </a>
          </div>
        </div>
        <h4> 2023 Inmobiliaria El Encanto | All Right Reserved</h4>
      </div>
    </div>
  );
};

export default Footer;
