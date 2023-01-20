import React from 'react';
import { render } from 'react-dom';
import App from './App';
import PropertyProvider from "./context/Properties";
 
 
render(
 
 <PropertyProvider>
     <App/>
 </PropertyProvider>
 
, 

document.getElementById('root'));