import React from "react";
import Propertycard from "./Propertycard";
 
export default function PropertyList({ title, Propertycard }) {

  return (
    <>
          {Propertycard.map(item => {
               return <Propertycard key={item._id} {...item} />;
           })}
     </>
      );
}
