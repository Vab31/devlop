import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Project from "./components/Project";
import ClientFeedBack from "./components/ClientFeedBack";
import BookUs from "./components/BookUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/service" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/feedback" element={<ClientFeedBack />} />
          <Route path="/contact" element={<BookUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
