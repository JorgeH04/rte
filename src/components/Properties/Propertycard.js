import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Propertycard({ imageuno, title, _id, price }) {
 
  return (

<>
  <div class="col-12 col-md-6 col-xl-4" key={_id}>
     <div class="single-featured-property mb-50">
        <div class="property-thumb">
        <Link to={`products/${_id}`} >
           <img src={imageuno} alt=""/>
        </Link>

           <div class="tag">
               <span>For Sale</span>
           </div>
           <div class="list-price">
               <p>${price || 0}</p>
           </div>
       </div>
        <div class="property-content">
           <h5>{title || "default title"}</h5>
           <p class="location"><img src="img/icons/location.png" alt=""/>Upper Road 3411, no.34 CA</p>
           <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
           <div class="property-meta-data d-flex align-items-end justify-content-between">
               <div class="new-tag">
                   <img src="img/icons/new.png" alt=""/>
               </div>
               <div class="bathroom">
                   <img src="img/icons/bathtub.png" alt=""/>
                   <span>2</span>
               </div>
               <div class="garage">
                   <img src="img/icons/garage.png" alt=""/>
                   <span>2</span>
               </div>
               <div class="space">
                   <img src="img/icons/space.png" alt=""/>
                   <span>120 sq ft</span>
               </div>
           </div>
       </div>
   </div>
</div>


    </>
   
  );
}


Propertycard.propTypes = {
    imageuno: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  };