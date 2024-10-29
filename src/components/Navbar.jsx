import { useState, useEffect } from "react";
import perfil from "../assets/perfil.svg";
import "../style/Navbar.css"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMobile() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="bg-background w-full fixed flex items-center justify-between py-5 px-5 z-20">
      <a className=" flex items-center gap-2" href="/">
        <h1 className="text-xl text-font font-thin">Consultório comunitário</h1>
      </a>
      {/* Logica para checar se o menuMobile está aberto ou não */}
      <nav className={menuOpen ? "menu-open" : ""}>
        <button onClick={handleMobile} className="text-base font-medium flex p-1 gap-2 items-center md:hidden">
          <span className="hamburguer"></span>
        </button>
        {/* Layout do menuMobile e menuNormal */}
        {menuOpen ? (
          <ul className="text-font bg-background block absolute w-full h-[calc(100vh-64px)] right-0 top-[3.6rem] px-12 z-50">
            <li className="px-1 py-4 border-b-backgroundSecondary border-opacity-50 border-b-2">
              <a
                onClick={handleMobile}
                className="block p-1 text-lg font-extralight"
                href="/">Nossos psicologos</a>
            </li>
            <li className="px-1 py-4 border-b-backgroundSecondary border-opacity-50 border-b-2">
              <a
                onClick={handleMobile}
                className="block p-1 text-lg font-extralight"
                href="/">Sobre o projeto</a>
            </li>
            <li className="px-1 py-4 border-b-backgroundSecondary border-opacity-50 border-b-2">
              <a
                onClick={handleMobile}
                className="block p-1 text-lg font-extralight"
                href="/">Agendamento</a>
            </li>
          </ul>) : (
          <ul className=" hidden md:flex md:items-center md:justify-center md:gap-5 z-50">
            <li className="font-extralight">
              <a className="hover-underline" href="/">Nosso psicologos</a>
            </li>
            <li className="font-extralight">
              <a className="hover-underline" href="/">Sobre o projeto</a>
            </li>
            <li className="font-extralight">
              <a className="hover-underline" href="/">Agendamentos</a>
            </li>
            <li className="font-extralight">
              <a className="" href="/login">
                <img src={perfil} className="w-[35px]" />
              </a>
            </li>
          </ul>)}
      </nav>
    </div>
  )
}

export default Navbar;