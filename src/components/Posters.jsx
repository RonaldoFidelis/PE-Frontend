import frame from "../assets/frameHome.webp";

function Posters() {
  return (
    <section className="flex flex-col items-center w-full mt-[80px] mb-[50px]">
      <div className="relative flex">
        <img className="w-[350px] md:w-[460px] h-[300px] md:h-[360px]" src={frame} alt="frame" />
        <span className="absolute inset-0 flex flex-col gap-2 py-20 px-5 bg-black/20">
          <h1 className="text-sm text-background font-normal">
            &quot;O correr da vida embrulha tudo. A vida é assim: esquenta, esfria, aperta, afrouxa, sossega e depois desinquieta. O que ela quer da gente é coragem.&quot;
          </h1>
          <p className="text-background text-sm md:text-base font-medium">Guimarães Rosa</p>
        </span>
      </div>
    </section>
  );
}

export default Posters;
