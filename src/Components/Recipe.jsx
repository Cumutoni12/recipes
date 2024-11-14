import React from "react";
import Rating from "./Rating";

function Recipe({ data }) {
  return (
    <div className="card border rounded-lg bg-slate-50 py-2 px-2 overflow-hidden">
      <img src={data.strMealThumb} alt={data.strMeal} className="w-full h-48 object-cover border rounded-md" />
      <h2 className="text-xl font-semibold "> {data.strMeal}</h2>
      <Rating />
    </div>
  );
}

export default Recipe;
