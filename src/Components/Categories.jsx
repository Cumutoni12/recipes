import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import Recipe from "./Recipe";

function Categories() {
  const [categoriez, setcategories] = useState([]);
  const [selectCategory, setSelectedCategory] = useState("Chicken");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => setcategories(data.categories))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectCategory}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals));
  }, [selectCategory]);
  const handleSelectedCategory = (e) => setSelectedCategory(e.target.value);

  return (
    <div>
      <h1> My favorite Recipes </h1>
      <label htmlFor="selectCategory">Select categories</label>
      <select
        id="selectCategory"
        value={selectCategory}
        onChange={handleSelectedCategory}
      >
        {categoriez.map((category) => (
          <option value={category.strCategory} key={category.idCategory}>
            {" "}
            {category.strCategory}
          </option>
        ))}
      </select>
       {recipes.map(recipe=>(
      <Recipe data={recipe}/>
    ))} 
      
    </div>
  );
}

export default Categories;
