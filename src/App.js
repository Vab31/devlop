import React from "react";
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Service from "./components/Service";
// import Project from "./components/Project";
// import ClientFeedBack from "./components/ClientFeedBack";
// import BookUs from "./components/BookUs";
import Hero from "./components/webdev/hero";
import Homepage from "./components/homepage";
import Footer from "./components/Footer"
import Heroml from "./components/ml/hero";


function App() {
  return (
    <div className="App">
 

      <Router>
    
    <Navbar/>
   
        <Routes>
          <Route path="/webdev" element={<Hero />} />
          <Route path="/ml" element={<Heroml />} />

          <Route path="/" element={<Homepage/>} />

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
