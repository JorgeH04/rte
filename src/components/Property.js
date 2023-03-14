import React from "react";
import { PropertyContext } from "../context/Properties";
import Loading from "../components/Properties/Loading";
import PageProperties from "../components/Properties/PageProperties";
import Filters from "../components/Properties/Filters";

export default function Products() {
  const { loading, properties } = React.useContext(PropertyContext);

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

    <PageProperties></PageProperties>
    </>
  );
}