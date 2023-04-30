import "./Navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

// const NabVar = () => {
//   return (
//     <div className="fixed">
//       <div className="topBar">
//         <div className="topBarContenedorCorreo">
//           <EmailIcon fontSize="large" sx={{ color: "white" }} />
//           <p>cristobal.foucaut@inmobiliariaelencanto.com</p>
//         </div>
//         <a href="">
//           <InstagramIcon fontSize="large" sx={{ color: "white" }} />
//         </a>
//       </div>
//       <nav>
//         <Link to="/">
//           <a className="logo">
//             <img src={logo}></img>
//           </a>
//         </Link>

//         <input type="checkbox" name="" id="toggle" />
//         <label for="toggle">
//           <i>
//             <DehazeIcon />
//           </i>
//         </label>
//         <div className="menu">
//           <ul>
//             <li>
//               <Link to="/">
//                 <a>Home</a>
//               </Link>
//             </li>
//             <li className="dropdown">
//               <Link to="/Proyectos">
//                 <a id="aServiciosNavbar">
//                   proyectos
//                   <div className="divSubmenu"></div>
//                   <ul className="submenu">
//                     <li>
//                       <Link to="/HaciendaSantaJulia">
//                         <a>Hacienda santa Julia</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/ValleDelToro">
//                         <a>Valle del Toro</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/ElEncantoDeCuracavi">
//                         <a>El Encanto de Curacaví</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/ElEncantoDeCuracaviII">
//                         <a>El Encanto de Curacaví II</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/ElEncantoDeLoreto">
//                         <a>El Encanto de Loreto</a>
//                       </Link>
//                     </li>
//                   </ul>
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link to="/VendeTuCampo">
//                 <a>Vende tu campo</a>
//               </Link>
//             </li>
//             <li>
//               <Link to="/QuinesSomos">
//                 <a>quienes somos</a>
//               </Link>
//             </li>
//             <li>
//               <a href="/Contacto">Contacto</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NabVar;

const NabVar = () => {
  return (
    // <>
    //   <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
    //     <Container fluid>
    //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="me-auto"></Nav>
    //         <Nav>
    //           <Nav.Link href="#features">Features</Nav.Link>
    //           <Nav.Link href="#pricing">Pricing</Nav.Link>
    //           <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action/3.2">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.3">
    //               Something
    //             </NavDropdown.Item>
    //             <NavDropdown.Item href="#action/3.4">
    //               Separated link
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //           <Nav.Link href="#deets">More deets</Nav.Link>
    //           <Nav.Link eventKey={2} href="#memes">
    //             Dank memes
    //           </Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
    <>
      <div className="topBar">
        <div className="topBarContenedorCorreo">
          <EmailIcon fontSize="large" sx={{ color: "white" }} />
          <p>cristobal.foucaut@inmobiliariaelencanto.com</p>
        </div>
        <a href="">
          <InstagramIcon fontSize="large" sx={{ color: "white" }} />
        </a>
      </div>
      <Navbar expand="lg" variant="dark" className="navbars">
        <div className="conteinerNavbar">
          <Navbar.Brand>
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <img className="logo" src={logo} alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link className="enlaces" href="/">
                  Home
                </Nav.Link>
                <NavDropdown
                  className="enlaces"
                  title="PROYECTOS"
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavDropdown.Item href="/ElEncantoDeCuracavi">
                    El Encanto De Curacavi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ElEncantoDeCuracaviII">
                    El Encanto De Curacavi II
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ElEncantoDeLoreto">
                    El Encanto De Loreto
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/HaciendaSantaJulia">
                    Hacienda Santa Julia
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ValleDelToro">
                    Valle Del Toro
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="enlaces" href="/VendeTuCampo">
                  <p className="text-nowrap">VendeTu Campo</p>
                </Nav.Link>
                <Nav.Link className="enlaces" href="/QuinesSomos">
                  <p className="text-nowrap">Quines Somos</p>
                </Nav.Link>
                <Nav.Link className="enlaces" href="/Contacto">
                  contacto
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Navbar>
    </>
  );
};

export default NabVar;
