import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SideBar from './components/Sidebar/Sidebar';
import Panel from './components/Panel/Panel';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <SideBar />
        <Panel/>
      </div>
      <Footer />
      

    </React.Fragment>
  );
}

export default App;