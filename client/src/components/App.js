import About from "./About"
import Contact from "./Contact"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Portfolio from "./Portfolio.js"
import Home from "./Home.js"
import '../App.css';
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <NavBar navigate ={navigate}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='about' element={<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
