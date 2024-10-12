import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";

//Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" elements={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
