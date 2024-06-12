import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Ingreso from "./pages/public/Ingreso";
import Asistencia from "./pages/public/Asistencia";
import Admin from "./pages/public/Admin";
import Registros from "./pages/public/Registros";
import Login from "./componen/ModalLogin";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ingresar" />} />
        <Route path="/ingresar" element={<Ingreso />} />
        <Route path="/asistencia" element={<Asistencia />} />
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/registros" element={<Registros/>}/>
       <Route path="/register" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

