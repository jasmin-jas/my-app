import React from "react";
import './App.css'
import Navbar from "./navbar.js";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from './footer.js';

const App = () => {
  return (
    <Router>

      <div>
        <Navbar />

        <Routes>

          <Route exact path="/"
            element={<Home />}
            >

          </Route>
          <Route path="/about"
            element={<About />}>

          </Route>
          <Route path="/contact"
            element={<Contact />}>

          </Route>
        </Routes>
        <Footer/>




      </div>
    </Router>


  );
}


export default App;
