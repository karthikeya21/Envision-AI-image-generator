import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";
import { ImageGenerator } from "./components/ImageGenerator";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-generator" element={<ImageGenerator />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
