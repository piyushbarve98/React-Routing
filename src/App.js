import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./navbar";
import Home from './home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
     
    </div>
  );
}
