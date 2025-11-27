function Cart({ cart, setCart }) {

  function removeFromCart(id) {
    const newCart = cart.filter(function (item) {
      return item.idDrink !== id;
    });
    setCart(newCart);
  }

  return (
    <div className="p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl">Cart is empty</p>
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {cart.map(function (drink) {
            return (
              <div key={drink.idDrink} className="bg-white p-4 rounded-lg shadow-md">
                
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="rounded-md mb-3 w-full"
                />

                <h2 className="font-bold text-lg">{drink.strDrink}</h2>

                <button
                  onClick={function () { removeFromCart(drink.idDrink); }}
                  className="w-full bg-red-600 text-white py-2 mt-3 rounded-md hover:bg-red-700"
                >
                  Remove
                </button>

              </div>
            );
          })}

        </div>
      )}
    </div>
  );
}

export default Cart;
