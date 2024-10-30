import React from "react";
import Rating from "./Rating";

function Recipe({ data }) {
  return (
    <div>
      <img src={data.strMealThumb} alt={data.strMeal} />
      <h2> {data.strMeal}</h2>
      <Rating />
    </div>
  );
}

export default Recipe;
