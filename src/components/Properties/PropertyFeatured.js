import React from "react";
import { PropertyContext } from "../../context/Properties";
import Filters from "./Filters";
import PageProperties from "./PageProperties";

import { Link } from 'react-router-dom'
 
export default function ProductList() {

  const { featured } = React.useContext(PropertyContext);

  return (
    <>
     <section class="featured-properties-area section-padding-100-50">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading wow fadeInUp">
                        <h2>Featured Properties</h2>
                        <p>Suspendisse dictum enim sit amet libero malesuada feugiat.</p>
                    </div>
                </div>
            </div>

            <div class="row">

             {featured.map(post => (
                <div class="col-12 col-md-6 col-xl-4" key={post._id}>
                    <div class="single-featured-property mb-50 wow fadeInUp" data-wow-delay="600ms">
                        <div class="property-thumb">
                        <Link to={`featured/${post._id}`}>
                             <img src={post.imageuno} alt=""/>
                            </Link>

                            <div class="tag">
                                <span>For Sale</span>
                            </div>
                            <div class="list-price">
                                <p>${post.price || 0}</p>
                            </div>
                        </div>
                        <div class="property-content">
                            <h5>{post.title || "default title"}</h5>
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
                ))}
            </div>
        </div>
    </section>
 

 
    </>
  );
}


