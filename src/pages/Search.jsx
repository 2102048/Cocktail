import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(props) {

  const cart = props.cart;
  const setCart = props.setCart;

  const [letter, setLetter] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const navigate = useNavigate();

  // fetch cocktails
  async function fetchCocktails() {

    if (letter.length !== 1) {
      alert("Please enter a single letter");
      return;
    }

    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + letter
    );

    const data = await response.json();

    if (data.drinks) {
      setCocktails(data.drinks);
    } else {
      setCocktails([]);
    }
  }

  // add selected drink to cart
  function addToCart(drink) {
    const newCart = [...cart, drink];
    setCart(newCart);
  }

  // open details page
  function openDetails(id) {
    navigate("/cocktail/" + id);
  }

  return (
    <div className="p-6 mt-10">

      <h1 className="text-3xl font-bold text-center mb-6">
        Search Cocktails
      </h1>

      <div className="flex justify-center gap-3 mb-10">

        <input
          type="text"
          maxLength="1"
          placeholder="Enter first letter..."
          className="border p-2 rounded-md w-40 text-center"
          value={letter}
          onChange={function (e) {
            setLetter(e.target.value);
          }}
        />

        <button
          onClick={fetchCocktails}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {cocktails.map(function (drink) {
          return (
            <div key={drink.idDrink} className="bg-white p-4 rounded-lg shadow-md">

              <img
                src={drink.strDrinkThumb}
                onClick={function () {
                  openDetails(drink.idDrink);
                }}
                alt={drink.strDrink}
                className="rounded-md mb-3 w-full cursor-pointer hover:opacity-90 transition"
              />

              <h2 className="font-bold text-lg">{drink.strDrink}</h2>

              <button
                onClick={function () {
                  addToCart(drink);
                }}
                className="w-full bg-blue-600 text-white py-2 mt-3 rounded-md hover:bg-blue-700"
              >
                Add To Cart
              </button>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Search;
