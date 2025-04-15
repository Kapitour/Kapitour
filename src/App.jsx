import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login"; // Importe o Login.jsx
import Home from "./components/Home/Home"; // Importe o Home.jsx
import Register from "./components/Login/Register"; // Importe o Register.jsx
import RotaPrincipal from "./components/Rotas/RotaPrincipal"; // Importe o RotaPrincipal.jsx
import Store from "./components/Store/Store";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />
        {/* Rota para o Login */}
        <Route path="/login" element={<Login />} />
        {/* Rota para a página de cadastro */}
        <Route path="/register" element={<Register />} />
        {/* Rota para o guia turístico */}
        <Route path="/rotas" element={<RotaPrincipal />} />
        {/* Rota para a loja */}
        <Route path="/loja" element={<Store />} />
      </Routes>
    </Router>
  );
};

export default App;
