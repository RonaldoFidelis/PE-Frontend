import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import perfil from "../assets/perfil.svg";
import "../style/navbar.css"

function Navbar() {
  const location = useLocation();
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
    <div className={location.pathname === "/login" ? "hidden" : "bg-background w-full fixed flex items-center justify-between py-5 px-5 z-20"}>
      <Link className=" flex items-center gap-2 text-xl text-font font-thin" to="/">
        Consultório comunitário
      </Link>
      {/* Logica para checar se o menuMobile está aberto ou não */}
      <nav className={menuOpen ? "menu-open" : ""}>
        <div className="flex gap-3">
          <Link to="/login">
            <img src={perfil} className="w-[30px]" />
          </Link>
          <button onClick={handleMobile} className="text-base font-medium flex p-1 gap-2 items-center md:hidden">
            <span className="hamburguer"></span>
          </button>
        </div>
        {/* Layout do menuMobile e menuNormal */}
        {menuOpen ? (
          <ul className="text-font bg-background block absolute w-full h-[calc(100vh-64px)] right-0 top-[3.6rem] px-12 z-50">
            <li className="px-1 py-4 border-b-backgroundSecondary border-opacity-50 border-b-2">
              <Link
                onClick={handleMobile}
                className="block p-1 text-lg font-extralight"
                to="/">Nossos psicologos</Link>
            </li>
            <li className="px-1 py-4 border-b-backgroundSecondary border-opacity-50 border-b-2">
              <Link
                onClick={handleMobile}
                className="block p-1 text-lg font-extralight"
                to="/">Sobre o projeto</Link>
            </li>
            <li className="px-1 py-4 border-b-backgroundSecondary border-opacity-50 border-b-2">
              <Link
                onClick={handleMobile}
                className="block p-1 text-lg font-extralight"
                to="/">Agendamento</Link>
            </li>
          </ul>) : (
          <ul className=" hidden md:flex md:items-center md:justify-center md:gap-5 z-50">
            <li className="font-extralight">
              <Link className="hover-underline" to="/">Nosso psicologos</Link>
            </li>
            <li className="font-extralight">
              <Link className="hover-underline" to="/">Sobre o projeto</Link>
            </li>
            <li className="font-extralight">
              <a className="hover-underline" to="/">Agendamentos</a>
            </li>
            <li className="font-extralight">
              <Link className="" to="/login">
                <img src={perfil} className="w-[35px]" />
              </Link>
            </li>
          </ul>)}
      </nav>
    </div>
  )
}

export default Navbar;