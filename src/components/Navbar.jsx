import { NavLink } from 'react-router-dom';

function Navbar({ cartCount }) {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-blue-700 shadow-lg z-50">
                <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="shrink-0">
                        <NavLink to="/" className="text-white">
                            <h1 className="text-xl sm:text-2xl font-bold">Cocktail App</h1>
                        </NavLink>
                    </div>

                    <ul className="flex space-x-4">
                        <li className="hidden sm:block">
                            <NavLink to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
                                Home
                            </NavLink>
                        </li>

                        <li className="hidden md:block">
                            <NavLink to="/search" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md">
                                Search
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to="/cart" 
                                className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-500 flex items-center gap-2"
                            >
                                Cart ({cartCount})
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="h-16"></div> 
        </>
    );
}

export default Navbar;
