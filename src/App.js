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


import { Helmet } from 'react-helmet';

 
function App() {
  return (
        <>
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


<Helmet>
<link rel="stylesheet" href="/style.css"/>
         <script src="/js/jquery/jquery-2.2.4.min.js"></script>
         <script src="/js/popper.min.js"></script>
         <script src="/js/bootstrap.min.js"></script>
        
         <script src="/js/classy-nav.min.js"></script>
         <script src="/js/jquery-ui.min.js"></script>
         <script src="/js/active.js"></script>
</Helmet>

 </>

  );
}

export default App;

