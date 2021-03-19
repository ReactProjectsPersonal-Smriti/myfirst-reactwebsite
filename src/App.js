import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Services from './Services';
import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;