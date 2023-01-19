import React from "react";

export default function Hero({ children }) {
  return (
    <>

     <section class="hero-area">
        <div >
           
             <div class="single-hero-slide bg-img"  style={{backgroundImage: `url("${"https://res.cloudinary.com/dd3uzxyfv/image/upload/v1672106872/hero1_wkue4r.jpg"}")`}} >
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12">
                            <div class="hero-slides-content">
                                <h2 data-animation="fadeInUp" data-delay="100ms">Find your perfect house</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 

    </>
  );
}
