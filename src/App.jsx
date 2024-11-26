import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"; // Importe o Login.jsx
import Home from "./components/Home"; // Importe o Home.jsx
import Register from "./components/Register"; // Importe o Register.jsx
import RotaPrincipal from "./components/RotaPrincipal"; // Importe o RotaPrincipal.jsx

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
      </Routes>
    </Router>
  );
};

export default App;
