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
    <div className="text-center">
      <h1 className="text-4xl font-bold font-serif text-cyan-600 mb-4">
        {" "}
        My favorite Recipes{" "}
      </h1>
      <label
        htmlFor="selectCategory"
        className="font-semibold
      mr-2 mb-3"
      >
        Select categories:
      </label>
      <select
        id="selectCategory"
        value={selectCategory}
        onChange={handleSelectedCategory}
        className="mb-4 w-40 h-8 text-yellow-600 bg-slate-600 pl-2 border rounded-md"
      >
        {categoriez.map((category) => (
          <option value={category.strCategory} key={category.idCategory}>
            {" "}
            {category.strCategory}
          </option>
        ))}
      </select>
      <div className="container grid gap-2 sm:grid-cols-2 md:grid-cols-3 mx-auto">
        {recipes.map((recipe) => (
          <Recipe data={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
