import React from "react";
import {
    useParams,
  } from "react-router-dom";

function Property() {

    const { id } = useParams();
    return (
      <>
      <h2>{id}</h2>
      </>

    );
}



export default Property;
