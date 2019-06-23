import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {BrowserRouter as Router,Route,Link } from "react-router-dom" ;

const App = () => (
  <Router>
  <div>
    <Navigation />
  
  <Route path="/" component={Home} exact />
  <Route path="/about" exact component={About} />
  <Route path="/contact" component={Contact} />
  </div>
  </Router>
);

export default App;
