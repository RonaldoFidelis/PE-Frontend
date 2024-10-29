import birds from "../assets/birds.png";

function Banner() {
  return (
    <div className="w-full h-[440px] mt-[73px] bg-backgroundBlue bg-opacity-60 flex">
      <div className="md:w-2/3 md:h-full flex justify-center items-center">
        <div className="p-5">
          <h3 className="text-backgroundSecondary text-base font-normal">Terapia online gratuita</h3>
          <h1 className="text-background text-2xl font-medium">Seu psicologo a qualquer<br />hora, em qualquer lugar.</h1>
          <button className="w-[160px] h-[45px] py-2 mt-2 bg-backgroundSecondary rounded-[5px] flex items-center justify-center transition ease-in-out hover:bg-opacity-85 duration-500">
            <a className="w-full text-background text-sm text-nowrap font-semibold" href="/">Agendar consulta</a>
          </button>
        </div>
      </div>
      <div className="hidden md:w-1/3 md:h-full md:flex">
        <img src={birds} alt="" className="w-[285px] h-[240px] mix-blend-color-dodge"/>
      </div>
    </div>
  )
}

export default Banner