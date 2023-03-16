import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AgendaPage from "./pages/AgendaPage";
import AgendaEditPage from "./pages/AgendaEditPage";
import AgendaDeletePage from "./pages/AgendaDeletePage";
import AgendaCreatePage from "./pages/AgendaCreatePage";
import AlarmaPage from "./pages/AlarmaPage";
import AlarmaCreatePage from "./pages/AlarmaCreatePage";
import AlarmaEditPage from "./pages/AlarmaEditPage";
import AlarmaDeletePage from "./pages/AlarmaDeletePage";
import PerfilPage from "./pages/PerfilPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/agenda/edit" element={<AgendaEditPage />} />
          <Route path="/agenda/create" element={<AgendaCreatePage />} />
          <Route path="/agenda/delete" element={<AgendaDeletePage />} />
          <Route path="/delete" element={<AgendaDeletePage />} />
          <Route path="/alarma" element={<AlarmaPage />} />
          <Route path="/alarma/create" element={<AlarmaCreatePage />} />
          <Route path="/alarma/edit" element={<AlarmaEditPage />} />
          <Route path="/alarma/delete" element={<AlarmaDeletePage />} />
          <Route path="/" element={<AgendaPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;

/* 
TODO: add images to login and setup pages
TODO: add icon to Navbar
TODO: clean PerfilPage
TODO: (optional) boton cerrar sesion al finalizar Sidebar
TODO: (optional) cambiar texto del boton de navbar
*/
