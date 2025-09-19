import icono1 from "../assets/iconos/iconografía-01.png"
import icono2 from "../assets/iconos/iconografía-02.png"
import icono3 from "../assets/iconos/iconografía-03.png"
import icono4 from "../assets/iconos/iconografía-04.png"
import icono5 from "../assets/iconos/iconografía-05.png"

const Productos = () => {
    return (
        <div className="container text-center my-4">
            <h3 className="mb-4">¿Qué productos distribuimos?</h3>
            <div className="row justify-content-center g-4">
                <div className="col-6 col-md-4">
                    <div className="p-2 d-flex flex-column align-items-center ">
                        <img src={icono3} alt="" className="mb-3" style={{ maxWidth: "80px" }} />
                        <p className="mb-0">Lubricantes, fluidos y grasas<br />para el automotor y la industria.</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="p-2 d-flex flex-column align-items-center">
                        <img src={icono2} alt="" className="mb-3" style={{ maxWidth: "80px" }} />
                        <p className="mb-0">Filtros de aceite. Filtros de aire.<br />Filtros de combustible. Filtros de habitáculo.</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="p-2 d-flex flex-column align-items-center ">
                        <img src={icono5} alt="" className="mb-3" style={{ maxWidth: "80px" }} />
                        <p className="mb-0">Baterías para el automotor.</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="p-2 d-flex flex-column align-items-center ">
                        <img src={icono4} alt="" className="mb-3" style={{ maxWidth: "80px" }} />
                        <p className="mb-0">Lámparas para el automotor:<br />12v y 24v.</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="p-2 d-flex flex-column align-items-center ">
                        <img src={icono1} alt="" className="mb-3" style={{ maxWidth: "80px" }} />
                        <p className="mb-0">Escobillas limpia parabrisas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos