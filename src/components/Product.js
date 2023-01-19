import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Products/Loading";
import PageProducts from "../components/Products/PageProducts";
import Filters from "../components/Products/Filters";
export default function Products() {
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <section class="breadcumb-area bg-img"   style={{backgroundImage: `url("${"https://res.cloudinary.com/dd3uzxyfv/image/upload/v1672106875/hero2_ipnamc.jpg"}")`}}>
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-12">
                    <div class="breadcumb-content">
                        <h3 class="breadcumb-title">Listings</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <Filters />
    <PageProducts></PageProducts>
    </>
  );
}