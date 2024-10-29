import { Link } from 'react-router-dom';
import error404 from '../../public/error404.png';

function NotFound() {

  return (
    <div className="bg-background w-full min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <img
          className="w-[40%] md:w-[30%] lg:w-[35%]"
          src={error404} alt="error-404" />
        <Link
          className="mt-10 bg-backgroundSecondary rounded-[5px] text-sm text-background font-normal flex items-center justify-center p-2 "
          to='/'>
          Retorna para pagina inicial
        </Link>
      </div>
    </div>
  )
}



export default NotFound