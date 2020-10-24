import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Navbar from "./navbar";
import Home from './home';
import About from './About';
import Contact from './Contact';
import Posts from './posts';
import Help from './Help'

export default function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar />
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/help" component={Help} />
      <Route path="/:post_id" component={Posts} />
      </Switch>
    </Router>
     
    </div>
  );
}
