import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> Oferta
          <span className="text-coral-red"> limitada</span> 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Nike constantemente ofrece descuentos atractivos en una amplia gama de productos, a través de promociones en línea y eventos exclusivos.</p>
        <p className="mt-6 lg:max-w-lg info-text">Además, su programa de membresía brinda beneficios como acceso anticipado a lanzamientos y envío gratuito, mejorando la experiencia de compra para los clientes.</p>
        <div className="mt-11">
          <div className="flex flex-wrap gap-4">
            <Button label="Comprar ahora" iconUrl={arrowRight} />
            <button className="bg-white border px-6 py-2 rounded-full
            border-slate-gray text-slate-gray hover:bg-slate-500 hover:text-slate-100">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer