import { Route, Routes, BrowserRouter } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Parcela from "./pages/Parcela";
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
          <Route
            path="/ElEncantoDeCuracavi"
            element={<ElEncantoDeCuracavi />}
          />
          <Route
            path="/ElEncantoDeCuracaviII"
            element={<ElEncantoDeCuracaviII />}
          />
          <Route path="/ElEncantoDeLoreto" element={<ElEncantoDeLoreto />} />
          <Route path="/ValleDelToro" element={<ValleDelToro />} />
          <Route path="/HaciendaSantaJulia" element={<HaciendaSantaJulia />} />
          <Route path="/VendeTuCampo" element={<VendeTuCampo />} />
          <Route path="/QuinesSomos" element={<QuinesSomos />} />
          <Route path="/Contacto" element={<Contacto />} />
          {/* <Route
            path="/ElEncantoDeCuracavi"
            element={<Parcela idParcela={"P1"} />}
          />
          <Route
            path="/ElEncantoDeCuracaviII"
            element={<Parcela idParcela={"P2"} />}
          />
          <Route
            path="/ElEncantoDeLoreto"
            element={<Parcela idParcela={"P3"} />}
          />
          <Route path="/ValleDelToro" element={<Parcela idParcela={"P4"} />} />
          <Route
            path="/HaciendaSantaJulia"
            element={<Parcela idParcela={"P5"} />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
