import discord from "../assets/discord.svg";
import instagram from "../assets/instagram.svg";

function Footer() {
  return (
    <footer className="bg-backgroundBlue/60 grid grid-cols-1 md:grid-cols-2 p-2 md:p-8">
      <div className="md:col-span-1 px-5">
        <h1 className="mb-4 text-background text-xl font-normal">Consultório comunitario</h1>
        <ul className="flex flex-col">
          <h1 className="text-background text-sm font-normal mb-1">Contatos:</h1>
          <li className="flex flex-row gap-1 items-center mb-[2px]">
            <h1 className="text-background text-xs font-normal">Whatsap:</h1>
            <a href="/" className="text-background text-xs font-light transition ease-in-out hover:text-backgroundSecondary/90 duration-500">(xx) xxxxx-xxxx</a>
          </li>
          <li className="flex flex-row gap-1 items-center mb-[2px]">
            <h1 className="text-background text-xs font-normal">E-mail:</h1>
            <a href="/" className="text-background text-xs font-light transition ease-in-out hover:text-backgroundSecondary/90 duration-500">Consultoriocomunitario.pe@gmail.com</a>
          </li>
          <li className="flex flex-row gap-1 items-center mb-[2px]">
            <h1 className="text-background text-xs font-normal">Localização:</h1>
            <a href="/" className="text-background text-xs font-light transition ease-in-out hover:text-backgroundSecondary/90 duration-500">Recife - PE</a>
          </li>
        </ul>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-1 px-5 ">
        <div className="flex flex-col gap-2 md:w-[400px] px-2">
          <h1 className="text-backgroundSecondary/70 text-base">Sobre o projeto</h1>
          <p className="text-background/70 text-xs">Projeto social sem fins lucrativos
            desenvolvido para ajudar a população. Acesse nossas redes sociais clicando no
            icones abaixo.</p>
            <span className="flex items-center gap-2">
              <a className="w-[30px] opacity-70 transition ease-in-out hover:opacity-100 duration-500" href="/">
                <img src={discord} alt="" />
              </a>
              <a className="w-[34.8px] opacity-70 transition ease-in-out hover:opacity-100 duration-500" href="/">
                <img src={instagram} alt="" />
              </a>
            </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer