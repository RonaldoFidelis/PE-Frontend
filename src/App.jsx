import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Psychologist from "./pages/Psychologist";
import Aboutproject from "./pages/Aboutproject";
import Form from "./pages/Form";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

//Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/psicologos" element={<Psychologist/>}/>
        <Route path="/sobreprojeto" element={<Aboutproject/>}/>
        <Route path="/agendamento" element={<Form/>}/>
        <Route path="/acc ount" element={<Account/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
  )
}   

export default App
