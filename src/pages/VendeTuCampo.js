import Navbar from "../components/modules/Navbar";
import Footer from "../components/sections/Footer";
import FormContactVendeTuCampo from "../components/modules/FormContactVendeTuCampo";

const VendeTuCampo = () => {
  return (
    <div>
      <Navbar />
      <div className="headerVendeTuCampo"></div>
      <div className="divTitleFormVendeTuCampo">
        <h1>¡ESCRÍBENOS PARA INICIAR UNA GRAN ALIANZA COMERCIAL!</h1>
        <hr></hr>
        <p>
          Contamos con el mejor equipo para vender tu campo. Déjanos tus datos
          en el formulario y un Asesor Comercial de Compra tu Parcela te
          contactará.
        </p>
      </div>

      <FormContactVendeTuCampo />

      <Footer />
    </div>
  );
};

export default VendeTuCampo;
