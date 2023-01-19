
import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
       




     <footer class="footer-area section-padding-100-0 bg-img gradient-background-overlay"  >
         <div class="main-footer-area">
            <div class="container">
                <div class="row">

                     <div class="col-12 col-sm-6 col-xl-3">
                        <div class="footer-widget-area mb-100">
                             <div class="widget-title">
                                <h6>About Us</h6>
                            </div>

                            <img src="img/bg-img/footer.jpg" alt=""/>
                            <div class="footer-logo my-4">
                                <img src="img/core-img/logo.png" alt=""/>
                            </div>
                            <p>Integer nec bibendum lacus. Suspen disse dictum enim sit amet libero males uada feugiat. Praesent malesuada.</p>
                        </div>
                    </div>

                     <div class="col-12 col-sm-6 col-xl-3">
                        <div class="footer-widget-area mb-100">
                             <div class="widget-title">
                                <h6>Hours</h6>
                            </div>
                             <div class="weekly-office-hours">
                                <ul>
                                    <li class="d-flex align-items-center justify-content-between"><span>Monday - Friday</span> <span>09 AM - 19 PM</span></li>
                                    <li class="d-flex align-items-center justify-content-between"><span>Saturday</span> <span>09 AM - 14 PM</span></li>
                                    <li class="d-flex align-items-center justify-content-between"><span>Sunday</span> <span>Closed</span></li>
                                </ul>
                            </div>
                             <div class="address">
                                <h6><img src="img/icons/phone-call.png" alt=""/> +45 677 8993000 223</h6>
                                <h6><img src="img/icons/envelope.png" alt=""/> office@template.com</h6>
                                <h6><img src="img/icons/location.png" alt=""/> Main Str. no 45-46, b3, 56832, Los Angeles, CA</h6>
                            </div>
                        </div>
                    </div>

                     <div class="col-12 col-sm-6 col-xl-3">
                        <div class="footer-widget-area mb-100">
                             <div class="widget-title">
                                <h6>Useful Links</h6>
                            </div>
                             <ul class="useful-links-nav d-flex align-items-center">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Listings</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Properties</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Elements</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                     <div class="col-12 col-sm-6 col-xl-3">
                        <div class="footer-widget-area mb-100">
                             <div class="widget-title">
                                <h6>Featured Properties</h6>
                            </div>
                             <div class="featured-properties-slides owl-carousel">
                                 <div class="single-featured-properties-slide">
                                    <a href="#"><img src="img/bg-img/fea-product.jpg" alt=""/></a>
                                </div>
                                 <div class="single-featured-properties-slide">
                                    <a href="#"><img src="img/bg-img/fea-product.jpg" alt=""/></a>
                                </div>
                                 <div class="single-featured-properties-slide">
                                    <a href="#"><img src="img/bg-img/fea-product.jpg" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

         <div class="copywrite-text d-flex align-items-center justify-content-center">
            <p> 
              by  Colorlib  </p> 
         </div>
    </footer>
     
    </>
  );
}



