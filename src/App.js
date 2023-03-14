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

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/agenda/edit" element={<AgendaEditPage />} />
          <Route path="/agenda/create" element={<AgendaCreatePage />} />
          <Route path="/delete" element={<AgendaDeletePage />} />
          <Route path="/alarma" element={<AlarmaPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
