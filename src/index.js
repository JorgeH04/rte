import React from 'react';
import { render } from 'react-dom';

import App from './App';
import ProductProvider from "./context/products";
//import { RoomProvider } from "./context/oldreact";

import  {CartProvider}  from "./context/cart";

render(
 
<ProductProvider>
  <CartProvider>
    <App/>
  </CartProvider>
</ProductProvider>
 
, 

document.getElementById('root'));