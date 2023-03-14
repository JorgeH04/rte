import React, { Component } from 'react'
import axios from 'axios'
import { getAll, paginate } from './data';

export const PropertyContext = React.createContext();


export default function PropertyProvider({ children }) {

   const [loading, setLoading] = React.useState(false);   
   const [properties, setProperties] = React.useState([]);
   const [featured, setFeatured] = React.useState([]);
   const [sorted, setSorted] = React.useState([]);
   const [page, setPage] = React.useState(0);
   const [filters, setFilters] = React.useState({
    search: "",
    title: "todos",
    amount: false,
    price: "todos",
    rooms:"rooms",
    filtro:"All",
    talle:"todos",
    bath:"bath",
    minPrice: 0,
    maxPrice: 0,
  });
  const [price, setPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [minPrice, setMinPrice] = React.useState(0);

 

   const initialUrl = `https://backre.herokuapp.com/properties`;

 //  const initialUrl = `http://localhost:4000/properties`;

  //  const initialUrlDos = `http://localhost:4000/ofertauno/uno`;

   const initialUrlDos = `https://backre.herokuapp.com/ofertauno/uno`;
   console.log(initialUrlDos);

   React.useEffect(() => {
    setLoading(true);
    async function fetchData() {

      let response = await getAll(initialUrl);
      console.log(response);
      setSorted(paginate(properties));
      setProperties(response.data);
      console.log(response.data);
        let maxPrice = Math.max(...response.data.map(item => item.price));
       setPrice(maxPrice);
       setMaxPrice(maxPrice)
       //  console.log(maxPrice);
      // console.log(maxPrice);
      // console.log(maxPrice);
      setLoading(false);
  }
  fetchData();
  
  }, []);

  

   
   React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let responsedos = await getAll(initialUrlDos);
      setFeatured(responsedos.data);
      setLoading(false);
  }
  fetchData();
  }, []);



   const changePage = index => {
    setPage(index);
  };


   const updateFilters = e => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "todos" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
   // console.log(filter);
  };


 
 

  React.useLayoutEffect(() => {
    let newProducts = [...properties].sort((a, b) => a.price - b.price);
    
    const { search, name, shipping, price, rooms, color, amount, filtro, talle, bath, title } = filters;
    //
   


    if (title !== "todos") {
      newProducts = newProducts.filter(item => item.title === title);
    }
    if (rooms !== "rooms") {
      newProducts = newProducts.filter(item => item.rooms === rooms);
    }
    if (bath !== "bath") {
      newProducts = newProducts.filter(item => item.bath === bath);
    }
    if (filtro !== "All") {
      newProducts = newProducts.filter(item => item.filtro === filtro);
    }
    if (amount !== false) {
      newProducts = newProducts.filter(item => item.free_shipping === shipping);
    }
    if (price !== "todos") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 2000;
        } else if (price === 2000) {
          return item.price > 2000 && item.price < 5000;
        } else {
          return item.price > 5000;
        }
      });
    }
    if (talle !== "todos") {
      newProducts = newProducts.filter(item => {
        if (talle === 0) {
          return item.talle < 2000;
        } else if (talle === 2000) {
          return item.talle > 2000 && item.talle < 5000;
        } else {
          return item.talle > 5000;
        }
      });
    }

    if (search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }

    setPage(0);

    setSorted(paginate(newProducts));
  }, [filters, properties]);
  


  

    return (
      <PropertyContext.Provider
      value={{
        properties,
        featured,
        loading,
        filters,
        sorted,
        page,
        changePage,
        updateFilters,
        price,
        maxPrice,
        minPrice
 
      }}
    >
      {children}
    </PropertyContext.Provider>

    )
}
