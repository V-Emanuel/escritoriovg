import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/dashboard/Home"
import CustomerServices from "./pages/dashboard/CustomerServices"
import Clients from "./pages/dashboard/Clients"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atendimentos" element={<CustomerServices />} />
        <Route path="/clientes" element={<Clients />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regitro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
