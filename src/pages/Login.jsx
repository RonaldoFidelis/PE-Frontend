
function Login() {
  return (
    <div className="flex">
      {/*Tela de login*/}
      <div className="w-2/3 h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center gap-1 mb-14">
          <h1 className="text-font text-2xl font-extralight">Consultorio comunitario</h1>
          <h2 className="text-font text-lg font-extralight">Faça seu login</h2>
        </div>
        {/*Inputs*/}
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-5 items-center">
            <input className="border-2 border-backgroundBlue w-[400px] h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite seu E-mail" type="email" name="" id="" required />
            <input className="border-2 border-backgroundBlue w-[400px] h-[55px] rounded-[10px] p-4 outline-none font-extralight" placeholder="Digite sua Senha" type="password" name="" id="" required />
          </div>
          <div className="flex">
            <a className="ml-auto text-xs font-extralight transition hover:text-backgroundBlue duration-300" href="#">
              Esqueci minha senha
            </a>
          </div>
        </div>
        {/*BTN*/}
        <div className="flex flex-col gap-1 mt-14 items-center">
          <button className="bg-backgroundBlue text-white font-light rounded-[5px] w-[150px] h-[45px] p-2">Login</button>
          <span className="font-extralight text-xs transition hover:text-backgroundBlue duration-300">
            <a href="#">Solicite cadastro</a>
          </span>
        </div>
      </div>
      {/*Banner*/}
      <div className="w-1/2 h-screen flex items-center justify-center bg-backgroundBlue bg-opacity-50">
        {/* Contêiner interno que centraliza o conteúdo verticalmente */}
        <div className="h-max flex flex-col">

          {/* Mensagem de boas-vindas leve */}
          <span className="text-font md:text-4xl lg:text-5xl font-extralight ">
            Bem-vindo<br/>de volta!
          </span>

          {/* Mensagem motivacional principal */}
          <span className="text-white md:text-6xl lg:text-8xl font-semibold">
            Juntos<br/>fazemos<br/>a diferença!
          </span>

        </div>
      </div>


    </div>
  )
}

export default Login