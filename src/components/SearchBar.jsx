import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const SearchBar = ({ listOfRestaurant, setListOfRestaurant }) => {
    const [searchText, setSearchText] = useState("");

    const filter = () => {
        const filteredRestaurants = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.5
        );
        setListOfRestaurant(filteredRestaurants);
    };

    const handleSearch = () => {
        const filteredSearch = listOfRestaurant.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setListOfRestaurant(filteredSearch);
    };

    return (
        <div className="flex justify-center items-center w-full max-w-lg mx-auto mt-6">
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
            >
                <FaSearch className="mr-2" />
                 Search
            </button>

            <button
                onClick={filter}
                className="px-4 py-2 ml-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center"
            >
                <FaFilter className="mr-2" /> Filter
            </button>
        </div>
    );
};

export default SearchBar;
