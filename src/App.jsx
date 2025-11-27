import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Search from "./pages/Search"
import Cart from "./pages/Cart"
import { useState } from "react"
import CocktailDetails from "./pages/CocktailDetails"

function App() {

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search cart={cart} setCart={setCart} />} />
        <Route path="/cocktail/:id" element={<CocktailDetails cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
