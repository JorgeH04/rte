import React from "react";
import { useParams } from "react-router-dom";
import { PropertyContext } from "../../context/Properties";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";

import OwlCarousel from 'react-owl-carousel2';
 
export default function ProductDetails() {
  const { _id } = useParams();
  const history = useHistory();

  const { products } = React.useContext(PropertyContext);
  const product = products.find(item => item._id === _id);

  const [details, setDetails] = React.useState([{title: "", price: "", amount: "", imageuno: "", imagedos: ""}]);
  const [price, setPrice] = React.useState();
  const [title, setTitle] = React.useState();
  const [amount, setAmount] = React.useState();

  
  

  React.useEffect(() => {
    let prod = products.find(item => item._id === _id);
    setDetails(prod) 
  }, []);
 

  React.useEffect(() => {
    let vim = products.find(item => item._id === _id);
    let bb = vim.price
    setPrice(bb) 
  }, []);


 

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
 



  if (products.length === 0) {
    return <Loading />;
  } else {
   const {imageuno, imagedos, title, price, description} = product;


    return (
       <>


    <section class="breadcumb-area bg-img"  style={{backgroundImage: `url("${"https://res.cloudinary.com/dd3uzxyfv/image/upload/v1672106872/hero1_wkue4r.jpg"}")`}}>
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-content">
                        <h3 class="breadcumb-title">Details</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
     <section class="listings-content-wrapper section-padding-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <OwlCarousel class="single-listings-sliders owl-carousel" options={options} >
                       <div><img src={imageuno} alt="The Last of us"/></div>
                       <div><img src={imagedos} alt="GTA V"/></div>
                     
                     </OwlCarousel>
                   
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-12 col-lg-8">
                    <div class="listings-content">
                         <div class="list-price">
                            <p>${price}</p>
                        </div>
                        <h5>{title}</h5>
                        <p class="location"><img src="img/icons/location.png" alt=""/>
                        Upper Road 3411, no.34 CA</p>
                        <p>{title}</p>
                         <div class="property-meta-data d-flex align-items-end">
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
                         <ul class="listings-core-features d-flex align-items-center">
                            <li><i class="fa fa-check" aria-hidden="true"></i> Gated Community</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Automatic Sprinklers</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Fireplace</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Window Shutters</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Ocean Views</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Heated Floors</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Heated Floors</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Private Patio</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Window Shutters</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Fireplace</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Beach Access</li>
                            <li><i class="fa fa-check" aria-hidden="true"></i> Rooftop Terrace</li>
                        </ul>
                
                    </div>
                </div>
             
                </div>
            </div>
          
    </section>
 


       </>

    );
  }
}
