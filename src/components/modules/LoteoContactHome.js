import TextField from "@mui/material/TextField";
import mapaLoteo from "../../image/mapaLoteo.jpg";

const LoteoContactHome = () => {
  return (
    <div>
      <div className="conteinerFormHomeVendeTuLoteoImg">
        <div className="conteinerFormHomeVendeTuLoteo">
          <div className="conteinerImageLoteo">
            <img src={mapaLoteo}></img>
            <div>
              <h2>¿Tienes un loteo que deseas vender?</h2>
              <p>¡En Compra Tu Parcela te brindamos la solución!</p>
              <p>
                Somos líderes en el rubro inmobiliario y te ofrecemos la mejor
                gestión para la venta de tu campo, contáctanos y forma parte de
                nuestra gran familia.
              </p>
            </div>
          </div>
          <button className="btmSailLoteoContact">contáctanos</button>
        </div>
      </div>
      <div className="divWitheHomeVendeTuLoteo"></div>
    </div>
  );
};
export default LoteoContactHome;
