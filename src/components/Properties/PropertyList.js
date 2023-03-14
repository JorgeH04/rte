import React from "react";
import Propertycard from "./Propertycard";
 
export default function PropertyList({ title, properties }) {
  return (
    <>
          {properties.map(item => {
               return <Propertycard key={item._id} {...item} />;
           })}
     </>
      );
}
