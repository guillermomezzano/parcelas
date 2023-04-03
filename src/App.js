import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Parcelas from "./pages/Parcelas";
import Parcela from "./pages/Parcela";
import VendeTuCampo from "./pages/VendeTuCampo";
import QuinesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Parcelas" element={<Parcelas />} />
          <Route path="/Parcela" element={<Parcela />} />
          <Route path="/VendeTuCampo" element={<VendeTuCampo />} />
          <Route path="/QuinesSomos" element={<QuinesSomos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
