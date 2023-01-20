import React from "react";
import ProductList from "./ProductList";
import { PropertyContext } from "../../context/Properties";
import Loading from "../Loading";

export default function FeaturedProducts() {
  const { loading, featured } = React.useContext(PropertyContext);
  if (loading) {
    return <Loading />;
  }
  return <ProductList title="featured products" products={featured} />;
}
