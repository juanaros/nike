import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> nuestras zapatillas
          <span className="text-coral-red"> son de calidad </span> 
          <span className="text-coral-red"> superior</span> al resto
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">La calidad superior de Nike es innegable, respaldada por décadas de innovación y excelencia en diseño. Desde la selección cuidadosa de materiales de primera calidad hasta la meticulosa atención al detalle en cada costura y componente, cada par de zapatillas Nike ofrece un estándar incomparable en términos de durabilidad, comodidad y rendimiento.</p>
        <p className="mt-6 lg:max-w-lg info-text">Nike entrega excelencia en cada par de zapatillas, garantizando calidad y rendimiento excepcionales.</p>
        <div className="mt-11">
        <Button label="Ver detalles" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>

    </section>
  )
}

export default SuperQuality