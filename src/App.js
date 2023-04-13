import { Route, Routes, BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import HaciendaSantaJulia from "./pages/HaciendaSantaJulia";
import ValleDelToro from "./pages/ValleDelToro";
import ElEncantoDeCuracavi from "./pages/ElEncantoDeCuracavi";
import ElEncantoDeCuracaviII from "./pages/ElEncantoDeCuracaviII";
import ElEncantoDeLoreto from "./pages/ElEncantoDeLoreto";
import VendeTuCampo from "./pages/VendeTuCampo";
import QuinesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/HaciendaSantaJulia" element={<HaciendaSantaJulia />} />
          <Route path="/ValleDelToro" element={<ValleDelToro />} />
          <Route
            path="/ElEncantoDeCuracavi"
            element={<ElEncantoDeCuracavi />}
          />
          <Route
            path="/ElEncantoDeCuracaviII"
            element={<ElEncantoDeCuracaviII />}
          />
          <Route path="/ElEncantoDeLoreto" element={<ElEncantoDeLoreto />} />
          <Route path="/VendeTuCampo" element={<VendeTuCampo />} />
          <Route path="/QuinesSomos" element={<QuinesSomos />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
