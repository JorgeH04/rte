import React, { useContext } from "react";
import { PropertyContext } from "../../context/Properties";
export default function Filters() {
  const {
    filters: { search, category, amount,  rooms, filtro, talle, colorstock },
    updateFilters,
    sorted,
    price, 
    minPrice, 
    maxPrice,
  } = useContext(PropertyContext);

//   console.log(price);
//   console.log(minPrice);
//   console.log(maxPrice);

  return (
    <>

    <div class="south-search-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="advanced-search-form">
                         <div class="search-title">
                            <p>Search for your home</p>
                        </div>
                         <form action="#" method="post" id="advanceSearch">
                            <div class="row">

                                <div class="col-12 col-md-4 col-lg-3">
                                      <input 
                                          type="text" 
                                          class="form-control" 
                                          name="search"
                                          placeholder="Keyword"
                                          value={search}
                                          onChange={updateFilters}
                                          />                           
                                </div>

                                <div class="col-12 col-md-4 col-lg-3">
                                    <div class="form-group">
                                        <select 
                                          name="name"
                                          class="form-control" 
                                          value={category}
                                          onChange={updateFilters}
                                          id="cities">
                                            <option value="todos">All Cities</option>
                                            <option value="Palermo">Palermo</option>
                                            <option value="Caballito">Caballito</option>
                                       
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4 col-lg-3">
                                    <div class="form-group">
                                       <select 
                                          name="filtro"
                                          class="form-control" 
                                          value={filtro}
                                          onChange={updateFilters}
                                          id="cities">
                                            <option value="All">All</option>
                                            <option value="App">Appartments</option>
                                            <option value="House">Houses</option>
                                            <option value="Store">Stores</option>
                                            <option value="Farm">Farm</option>
                                           
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4 col-lg-3">
                                    <div class="form-group">
                                        <select class="form-control" id="offers">
                                            <option>All Offers</option>
                                            <option>100% OFF</option>
                                            <option>75% OFF</option>
                                            <option>50% OFF</option>
                                            <option>25% OFF</option>
                                            <option>10% OFF</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4 col-xl-3">
                                    <div class="form-group">                                   
                                    <label>
                                             <input
                                               type="radio"
                                               name="price"
                                               id="todos"
                                               value="todos"
                                               checked={price === "todos"}
                                               onChange={updateFilters}
                                              />
                                          todos
                                        </label>
                                        <br/>
                                        <label>
                                          <input
                                            type="radio"
                                            name="price"
                                            value="0"
                                            checked={price === 0}
                                            onChange={updateFilters}
                                           />
                                          $0 - $2000
                                        </label>
                                        <br/>
                                        <label>
                                          <input
                                            type="radio"
                                            name="price"
                                            value="2000"
                                            checked={price === 2000}
                                            onChange={updateFilters}
                                           />
                                          $2000 - $5000
                                        </label>
                                        <br/>
                                        <label>
                                          <input
                                            type="radio"
                                            name="price"
                                            value="5000"
                                            checked={price === 5000}
                                            onChange={updateFilters}
                                           />
                                         + $5000
                                        </label>                                                                             
                                    </div>
                                </div>

                                <div class="col-12 col-md-4 col-xl-2">
                                    <div class="form-group">
                                    <select 
                                           name="color"
                                           value={rooms}
                                           onChange={updateFilters}
                                           class="form-control" 
                                           id="bedrooms"
                                           >
                                            <option value="rooms">Bedrooms</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                       
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 col-md-4 col-xl-2">
                                    <div class="form-group">
                                    <select class="form-control" id="bathrooms"
                                           name="colorstock"
                                           value={category}
                                           onChange={updateFilters}
                                           class="form-control" 
                                           id="bedrooms"
                                        >
                                            <option value="bath">Bathrooms</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-12 col-md-8 col-lg-12 col-xl-5 d-flex">
                                    <div class="slider-range">
                                               <input 
                                                            type="range"
                                                            name="price"
                                                            min={minPrice}
                                                            max={maxPrice}
                                                            id="price"
                                                            value={price}
                                                            onChange={updateFilters}
                                                            className="form-control"
                                                /><br />
                                     
                                    </div>
                                </div>


                                <div class="col-12 search-form-second-steps">
                                    <div class="row">
                                   
                                    </div>
                                </div>

                             
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>



   </>
  );
}
