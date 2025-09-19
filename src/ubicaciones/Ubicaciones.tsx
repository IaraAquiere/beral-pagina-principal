import zonas from "../assets/iconos/zona-06.png"
import { GoArrowUpRight } from "react-icons/go";

const Ubicaciones = () => {
    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 mb-3 mb-md-0 text-center">
                    <img src={zonas} alt="" className="img-fluid" width="650" />
                </div>
                <div className="col-12 col-md-7 px-3">
                    <h2 className="mb-3">
                        Nuestra zona de cobertura va desde Avellaneda hasta Villa Gesell,
                        cubriendo gran parte del territorio de la Provincia de Buenos Aires.
                    </h2>
                    <a href="https://maps.app.goo.gl/gZhtxqbCY4o8nSw19" target="_blank">
                        <button
                            type="button"
                            className="btn btn-secondary rounded-pill btn-sm m-2"
                            style={{ backgroundColor: "rgb(255,123,0)", border: "none" }}
                        >
                            Sucursal La Plata <GoArrowUpRight />
                        </button></a>
                    <a href="https://maps.app.goo.gl/AyqD8z2ZWWnsDwSm7" target="_blank"><button
                        type="button"
                        className="btn btn-secondary rounded-pill btn-sm m-2"
                        style={{ backgroundColor: "rgb(255,123,0)", border: "none" }}
                    >
                        Sucursal La Lucila del Mar <GoArrowUpRight /></button></a>
                    <h3 className="mt-3" style={{ color: "rgb(255,123,0)" }}>Zonas de distribución:</h3>
                    <p>
                        Avellaneda. Dock Sud. Sarandi. Wilde. Bernal. Quilmes. Ezpeleta.
                        Berazategui. Hudson. Villa Elisa. City Bell. La Plata. Berisso. Brandsen.
                        Loma Verde. Monte. Las Flores. Gral Belgrano. Ranchos. Pila. Chascomus.
                        Lezama. Castelli. Dolores. Magdalena. Atalaya. Bavio. Vieytes. Punta Indio.
                        Veronica. Pipinas. Gral Conesa. Gral Lavalle. San Clemente del Tuyu.
                        Partido de la Costa. Pinamar. Carilo. Villa Gesell. Gral Madariaga. Maipu.
                        Gral Guido. Las Armas. Varela.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Ubicaciones