import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" 
    id="contact-us">
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">
        Suscríbete a nuestro <span className="text-coral-red">
          Newsletter
        </span> 
      </h3>
      <div className='flex border border-slate-gray rounded-full justify-between items-center w-full p-1'>
        <input type="text" placeholder="tucorreo@ejemplo.com" className='input'/>
        <div>
          <Button label="Suscribirse"/>
        </div>
      </div>

    </section>
  )
}

export default Subscribe