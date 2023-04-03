import logoSticky from "../../image/logoSticky.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logoWasap from "../../image/logoWasap.png";

const FooterHome = () => {
  return (
    <div>
      <div className="conteinerFooterHome">
        <img src={logoSticky}></img>
        <div>
          <a href="#">
            <InstagramIcon fontSize="large" sx={{ color: "white" }} />
          </a>
          <div className="conteinerEnlacesFooterWasapInstagram">
            <EmailIcon fontSize="large" sx={{ color: "white" }} />
            <p>correo@gmail.com</p>
          </div>
          <div className="conteinerEnlacesFooterWasapInstagram">
            <img src={logoWasap}></img>
            <p>+569 70460159</p>
          </div>
        </div>
        <h4> 2023 Compra Tu Parcela | All Right Reserved</h4>
      </div>
    </div>
  );
};
export default FooterHome;
