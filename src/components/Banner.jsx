import birds from "../assets/birds.png";

function Banner() {
  return (
    <section className="w-full h-[450px] mt-[73px] bg-backgroundBlue/60 flex">
      <div className="w-full md:w-2/3 md:h-full flex justify-center items-center">
        <div className="p-5">
          <h3 className="text-backgroundSecondary text-sm font-light">Terapia gratuita</h3>
          <h1 className="text-background text-xl lg:text-2xl font-normal leading-6">Seu psicologo a qualquer<br />hora, em qualquer lugar.</h1>
          <button className="w-[130px] h-[40px] py-2 mt-2 bg-backgroundSecondary rounded-[5px] flex items-center justify-center transition ease-in-out hover:bg-opacity-85 duration-500">
            <a className="w-full text-background text-xs text-nowrap font-medium" href="/">Agendar consulta</a>
          </button>
        </div>
      </div>
      <div className="hidden md:w-1/3 md:h-full md:flex">
        <img src={birds} alt="" className="w-[300px] h-[250px] lg:w-[350px] lg:h-[280px] mix-blend-color-dodge opacity-80"/>
      </div>
    </section>
  )
}

export default Banner