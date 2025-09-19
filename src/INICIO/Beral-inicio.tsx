import logo from "../assets/logo/LOGO-01.png"
import { GoArrowUpRight } from "react-icons/go";
import video from "../assets/video/Beral-VideoWeb 2.mp4";
import Marcas from "../marcas/Marcas";
import Productos from "../productos/Productos";
import Ubicaciones from "../ubicaciones/Ubicaciones";
import Carrousel from "../carrousel/Carrousel";

const Inicio = () => {
  return (
    <>
      {/* navbar principal */}
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center">
          <img src={logo} alt="" width="130" />
          <ul className="navbar-nav d-flex  flex-row mx-auto">
            <li className="">
              <a className="nav-link fw-semibold  m-2" href="#">Marcas</a>
            </li>
            <li className="">
              <a className="nav-link fw-semibold  m-2" href="#">Productos</a>
            </li>
            <li className="">
              <a className="nav-link fw-semibold fs-6 m-2" href="#">Zonas</a>
            </li>
            <li className="">
              <a className="nav-link fw-semibold fs-6 m-2" href="#">Contacto</a>
            </li>
          </ul>
          <div className="d-flex" >
            <a href="https://www.beral.com.ar/login" target="_blank" >
              <button type="button" className="btn btn-secondary rounded-pill btn-sm " style={{ backgroundColor: "rgb(255,123,0)", border: "none" }} >
                Clientes <GoArrowUpRight />
              </button></a>
          </div>
        </div>
      </nav>

      {/* titulo y video */}
      <section className="text-center py-5">
        <div className="container">
          <h1
            className="fw-bold"
            style={{
              fontSize: "clamp(5.5rem, 6vw, 9rem)",
              lineHeight: "1.1",
            }}
          >
            Siempre más <br /> y mejor servicio.
          </h1>
        </div>
      </section>
      <div className="m-3">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto d-block w-75 rounded-5"
          style={{ maxWidth: "1000px", objectFit: "contain" }}
        ></video>
      </div>

      <Marcas />
      <hr />
      <Productos />
      <hr />
      <Ubicaciones />
      <Carrousel />

      {/* mapas de google */}
      <div className="container-fluid my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26170.252137482123!2d-57.906782!3d-34.924476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2ef504426ca5b%3A0xf5b28e599db465f8!2sC.%20121%202318%2C%20B1900%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1757945409172!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-12 col-lg-10 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6401.018255152502!2d-56.68701!3d-36.662258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c6f9505469361%3A0x2db6b79c3c7eb2fe!2sBeral%20srl%20La%20Lucila!5e0!3m2!1ses-419!2sar!4v1757586615159!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* navbar pie de pagina */}
      <div className="d-flex justify-content-center">
        <a href="https://www.beral.com.ar/login" target="_blank" >
          <button type="button" className="btn btn-secondary rounded-pill btn-sm " style={{ backgroundColor: "rgb(255,123,0)", border: "none" }}>
            Clientes <GoArrowUpRight />
          </button></a>
      </div>
      <nav className="navbar bg-white shadow-sm px-4 py-3">
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="mb-3 mb-md-0 text-center text-md-start">
            <img src={logo} alt="" width="120" />
          </div>
          <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center">
            <li className="nav-item">
              <a className="nav-link fw-semibold fs-6 m-2" href="#marcas">Marcas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold fs-6 m-2" href="#productos">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold fs-6 m-2" href="#zonas">Zonas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold fs-6 m-2" href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Inicio;