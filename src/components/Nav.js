import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import ScriptTag from 'react-script-tag';



 
export default function Nav() {


 
    

return (
<>

             
 
    <div id="preloader">
        <div class="south-load"></div>
    </div>

     <header class="header-area">

         <div class="top-header-area">
            <div class="h-100 d-md-flex justify-content-between align-items-center">
                <div class="email-address">
                    <a href="mailto:contact@southtemplate.com">contact@southtemplate.com</a>
                </div>
                <div class="phone-number d-flex">
                    <div class="icon">
                        <img src="img/icons/phone-call.png" alt=""/>
                    </div>
                    <div class="number">
                        <a href="tel:+45 677 8993000 223">+45 677 8993000 223</a>
                    </div>
                </div>
            </div>
        </div>

         <div class="main-header-area" id="stickyHeader">
            <div class="classy-nav-container breakpoint-off">
                 <nav class="classy-navbar justify-content-between" id="southNav">
                     
                     <a class="nav-brand"><Link to="/"><img src="img/core-img/logo.png" alt=""/></Link></a>

                     <div class="classy-navbar-toggler">
                        <span class="navbarToggler"><span></span><span></span><span></span></span>
                    </div>

                     <div class="classy-menu">

                         <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>

                         <div class="classynav">
                            <ul>
                                <li> <Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/properties">Properties</Link> </li>
                                
                                <li><Link to="/properties">Contact</Link> </li>
                            </ul>

                        

                             <a href="#" class="searchbtn"><i class="fa" aria-hidden="true"></i></a>
                        </div>
                        
						
                    </div>
                </nav>
            </div>
        </div>
    </header>


  
    <ScriptTag type="text/javascript" src="js/classy-nav.min.js" />
   
  </>
         );
        }