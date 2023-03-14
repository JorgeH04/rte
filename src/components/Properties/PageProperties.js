import React from "react";
import { PropertyContext } from "../../context/Properties";
import PropertyList from "./PropertyList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function PaginatedProducts() {
  const { sorted, page, changePage } = React.useContext(PropertyContext);

  if (sorted[page]) {
    return (
      <>

	  <section class="listings-content-wrapper section-padding-100">
      <div class="container">
        <div class="row">
            <div class="col-12">
                    
                </div>
            </div>

           <div class="row">
			    	 <PropertyList properties={sorted[page]}></PropertyList>
           </div>

            <div class="row">
                <div class="col-12">
                    <div class="south-pagination d-flex justify-content-end">
                        <nav aria-label="Page navigation">

						  {sorted.length > 1 && (
                            <ul class="pagination">
								 {page > 0 && (
                                <li class="page-item">
										 	<a class="page-link active" onClick={() => changePage(page - 1)}>
												  <FaAngleDoubleLeft></FaAngleDoubleLeft>
											 </a>
								 </li>
								 )}
								 {sorted.map((_, index) => {
									 return (
                                   <li class="page-item">
									 <a class="page-link" onClick={() => changePage(index)}>
										 {index + 1}
									 </a>
								  </li>
										 );})}
									{page < sorted.length - 1 && (	
										<li class="page-item">
											<a class="page-link" onClick={() => changePage(page + 1)}>
												<FaAngleDoubleRight></FaAngleDoubleRight>
											</a>
										</li>
											)}
										</ul>
								)}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>



    </>

  );


  } else {
    return (
      <h3 className="search-errors">
        lamentablemente su búsqueda no coincidió con ninguno de los productos
      </h3>
    );
  }
}
