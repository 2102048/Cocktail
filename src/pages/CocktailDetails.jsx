import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CocktailDetails({ cart, setCart }) {

  const params = useParams();
  const navigate = useNavigate();
  const [drink, setDrink] = useState(null);

  // fetch drink details
  useEffect(function () {

    async function getDrinkDetails() {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + params.id
      );
      const data = await response.json();

      if (data.drinks) {
        setDrink(data.drinks[0]);
      } else {
        setDrink(null);
      }
    }

    getDrinkDetails();
  }, [params.id]);

  if (!drink) {
    return <p className="text-center mt-20 text-2xl">Loading...</p>;
  }

  // add item to cart
  function addToCart() {
    const newCart = [...cart, drink];
    setCart(newCart);
    alert(drink.strDrink + " added to cart!");
  }

  // go back function
  function goBack() {
    navigate(-1);
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">

      <button
        onClick={goBack}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
      >
        ⬅ Back
      </button>

      <h1 className="text-3xl font-bold text-center mb-6">
        {drink.strDrink}
      </h1>

      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="rounded-lg w-full mb-6"
      />

      <button
        onClick={addToCart}
        className="w-full bg-blue-600 text-white py-3 rounded-md mb-6 hover:bg-blue-700 transition"
      >
        Add To Cart
      </button>

      <h2 className="text-xl font-semibold mb-2">
        Category: {drink.strCategory}
      </h2>

      <h2 className="text-xl font-semibold mb-2">
        Alcoholic: {drink.strAlcoholic}
      </h2>

      <h2 className="text-xl font-semibold mb-4">
        Glass: {drink.strGlass}
      </h2>

      <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        {drink.strInstructions}
      </p>

      <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>

      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        {Array.from({ length: 15 }).map(function (_, index) {

          const ingredient = drink["strIngredient" + (index + 1)];
          const measure = drink["strMeasure" + (index + 1)];

          if (ingredient) {
            return (
              <li key={index}>
                {ingredient} {measure ? " - " + measure : ""}
              </li>
            );
          }

          return null;
        })}
      </ul>

    </div>
  );
}

export default CocktailDetails;
