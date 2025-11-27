import { NavLink } from "react-router-dom";

function Home() {

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg w-full text-center">

        <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-relaxed mb-6">
          Search cocktails by typing the first letter!
        </p>

        <NavLink
  to="/search"
  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
>
  View Cocktails
</NavLink>


      </div>

    </div>
  );
}

export default Home;
