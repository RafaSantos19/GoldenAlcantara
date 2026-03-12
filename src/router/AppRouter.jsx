import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home"
import Sobre from "../pages/Sobre/Sobre"
import Filhotes from "../pages/Filhotes/Filhotes"
import Contato from "../pages/Contato/Contato"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/filhotes" element={<Filhotes />} />
          <Route path="/contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
