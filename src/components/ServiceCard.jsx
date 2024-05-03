const ServiceCard = ( { imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt="" />
        </div>
        <h3 className="text-3xl font-bold leading-normal font-palaquin mt-5">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg text-slate-gray leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard