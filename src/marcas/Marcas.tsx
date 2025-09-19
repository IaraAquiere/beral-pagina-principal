import logos1 from "../assets/iconos/logos-01.png"
import logos2 from "../assets/iconos/logos-02.png"
import logos3 from "../assets/iconos/logos-03.png"
import logos4 from "../assets/iconos/logos-04.png"
import logos5 from "../assets/iconos/logos-05.png"
import logos6 from "../assets/iconos/logos-06.png"


const Marcas = () => {
  return (
    <div className="container text-center my- p-4">
      <h5 className="mb-3">Marcas con las que trabajamos:</h5>
      <div className="row justify-content-center g-2">
        <div className="col-4 col-md-2">
          <img src={logos1} alt="" height={75} />
        </div>
        <div className="col-4 col-md-2">
          <img src={logos2} alt="" height={75}/>
        </div>
        <div className="col-4 col-md-2">
          <img src={logos3} alt="" height={75} />
        </div>
        <div className="col-4 col-md-2">
          <img src={logos4} alt="" height={75} />
        </div>
      </div>
      <div className="row justify-content-center g-2 mt-2">
        <div className="col-4 col-md-2">
          <img src={logos5} alt="" height={75} />
        </div>
        <div className="col-4 col-md-2">
          <img src={logos6} alt="" height={75} />
        </div>
      </div>
    </div>
  )
}

export default Marcas