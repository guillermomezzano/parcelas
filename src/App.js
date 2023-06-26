import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Loader from "./components/modules/ui/Loader";
import SnackbarMessage from "./components/modules/ui/SnackbarMessage";

import Home from "./pages/Home";
// import Parcela from "./pages/Parcela";
import ParcelaHaciendaSantaJulia from "./pages/ParcelaHaciendaSantaJulia";
import ParcelaValleDelToro from "./pages/ParcelaValleDelToro";
import ParcelaElEncantoDeCuracavi from "./pages/ParcelaElEncantoDeCuracavi";
import ParcelaElEncantoDeCuracaviII from "./pages/ParcelaElEncantoDeCuracaviII";
import ParcelaElEncantoDeLoreto from "./pages/ParcelaElEncantoDeLoreto";
import VendeTuCampo from "./pages/VendeTuCampo";
import QuinesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import Proyectos from "./pages/Proyectos";
import LandingPage from "./pages/LandingPages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <Loader />
        <SnackbarMessage />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Proyectos" element={<Proyectos />} />
            <Route
              path="/ElEncantoDeCuracavi"
              element={<ParcelaElEncantoDeCuracavi />}
            />
            <Route
              path="/ElEncantoDeCuracaviII"
              element={<ParcelaElEncantoDeCuracaviII />}
            />
            <Route
              path="/ElEncantoDeLoreto"
              element={<ParcelaElEncantoDeLoreto />}
            />
            <Route path="/ValleDelToro" element={<ParcelaValleDelToro />} />
            <Route
              path="/HaciendaSantaJulia"
              element={<ParcelaHaciendaSantaJulia />}
            />
            <Route path="/VendeTuCampo" element={<VendeTuCampo />} />
            <Route path="/QuinesSomos" element={<QuinesSomos />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/LandingPage" element={<LandingPage />} />
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
      </GlobalState>
    </div>
  );
}

export default App;
