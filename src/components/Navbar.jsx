import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"

const Navbar = () => {
            const cartProducts = useSelector(state => state.cart)
            // State for the input value
            const [searchQuery, setSearchQuery] = useState('');
            // State for the number of items in the cart
            const [cartCount, setCartCount] = useState(0);

            // Handler function to update the input value
            const handleInputChange = (e) => {
                        setSearchQuery(e.target.value);
            };

            // Function to add a product to the cart
            const addToCart = () => {

            };

            return (
                        <nav className="bg-gray-800 p-4 flex items-center justify-between">
                                    {/* Brand Name on the Left */}
                                    <div className="flex items-center">
                                                <span className="text-white font-bold text-lg">Brand Name</span>
                                    </div>

                                    {/* Links in the Middle */}
                                    <div className="flex-grow text-white text-center">
                                                <Link to="/" className="px-4 py-2">Home</Link>
                                                <Link to="/" className="px-4 py-2">Products</Link>
                                                <Link to="/" className="px-4 py-2">About Us</Link>
                                                <Link to="/" className="px-4 py-2">Contact</Link>
                                    </div>

                                    {/* Search Bar, Cart Icon, and Cart Count on the Right */}
                                    <div className="flex items-center">
                                                <input
                                                            type="text"
                                                            placeholder="Search"
                                                            className="px-4 py-2 rounded-md mr-4"
                                                            value={searchQuery}
                                                            onChange={handleInputChange} // Call the handler function on input change
                                                />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h12a2 2 0 012 2v2a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zM11 14h10m0 0v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6m10 0a2 2 0 012-2h2a2 2 0 012 2m-4 0v6"></path>
                                                </svg>
                                                <Link to="/cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer w-6 text-white mr-4" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 011 1v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2V3zm8 2H6v1h8V5zM5 8v10a1 1 0 001 1h8a1 1 0 001-1V8H5zm4 2a1 1 0 011-1h2a1 1 0 110 2H10a1 1 0 01-1-1zm-1 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                                            </svg>
                                                </Link>
                                                {/* Display the cart count */}
                                                <span className="text-white">{cartProducts.length}</span>
                                    </div>
                        </nav>
            );
};

export default Navbar;
