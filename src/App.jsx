import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Psychologist from "./pages/Psychologist";
import Aboutproject from "./pages/Aboutproject";
import Form from "./pages/Form";
import Account from "./pages/Account";

//Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" elements={<Home/>}/>
        <Route path="/psicologos" elements={<Psychologist/>}/>
        <Route path="/sobreprojeto" elements={<Aboutproject/>}/>
        <Route path="/agendamento" elements={<Form/>}/>
        <Route path="/account" elements={<Account/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}   

export default App
 