import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";

import PropertyFeatured from "./components/Properties/PropertyFeatured";
import PropertyDetails from "./components/Properties/PropertyDetails";
import PropertyFDetails from "./components/Properties/PropertyFDetails";

import Property from "./components/Property";


 
 
function App() {
  return (
  <Router>

  <Nav />
  <Route exact path="/">
          <Hero />
          <PropertyFeatured />
  </Route>

  <Route exact path="/properties">
        <Property />  
  </Route>

  <Route
          path="/featured/:_id"
          children={<PropertyFDetails></PropertyFDetails>}
  ></Route>

 
  <Route path="/about" component={About} />
          
  <Route
          path="/products/:_id"
          children={<PropertyDetails></PropertyDetails>}
  ></Route>

 

   <Footer />


</Router>



  );
}

export default App;

