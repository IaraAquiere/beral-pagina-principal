import carrousel1 from "../assets/carrousel/1.jpg";
import carrousel2 from "../assets/carrousel/2.jpg";
import carrousel3 from "../assets/carrousel/3.jpg";
import carrousel4 from "../assets/carrousel/4.jpg";
import carrousel5 from "../assets/carrousel/5.jpg";
import carrousel6 from "../assets/carrousel/6.jpg";
import whatsapp from "../assets/iconos/whatsapp.png"
import instagram from "../assets/iconos/instagram.png"
import facebook from "../assets/iconos/facebook.png"

const Carrousel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner p-5">
                    <div className="carousel-item active">
                        <img src={carrousel1} className="d-block w-100" alt="..."></img>

                    </div>
                    <div className="carousel-item">
                        <img src={carrousel2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carrousel3} className="d-block w-100" alt="..."></img>

                    </div>
                    <div className="carousel-item">
                        <img src={carrousel4} className="d-block w-100" alt="..."></img>

                    </div>
                    <div className="carousel-item">
                        <img src={carrousel5} className="d-block w-100" alt="..."></img>

                    </div>
                    <div className="carousel-item">
                        <img src={carrousel6} className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className="text-center mb-3">Contactate con nosotros.</h1>
            <div className="d-flex justify-content-center flex-direction-row">
                <a href="https://api.whatsapp.com/send?phone=542215553029" target="_blank"
                ><img src={whatsapp} alt="whatsapp" style={{ width: "40px", margin: "10px" }} /></a>
                <a href="https://www.instagram.com/beralsrl?igsh=dnZ6cnh2ejJ5YWg1" target="_blank">
                <img src={instagram} alt="instagram" style={{ width: "40px", margin: "10px" }} /></a>
                <a href="https://www.facebook.com/distribuidoraberal" target="_blank">
                <img src={facebook} alt="facebook" style={{ width: "40px", margin: "10px" }} /></a>
            </div>
        </>
    )
}

export default Carrousel