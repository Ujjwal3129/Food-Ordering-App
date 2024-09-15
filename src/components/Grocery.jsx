import React from "react";

const groceryItems = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "$2.99/lb",
    image:
      "https://www.example.com/apple.jpg", // Replace with actual image URL
    category: "Fruits",
  },
  {
    id: 2,
    name: "Organic Milk",
    price: "$3.50",
    image:
      "https://www.example.com/milk.jpg", // Replace with actual image URL
    category: "Dairy",
  },
  {
    id: 3,
    name: "Carrots",
    price: "$1.49/lb",
    image:
      "https://www.example.com/carrots.jpg", // Replace with actual image URL
    category: "Vegetables",
  },
  // Add more grocery items as needed
];

const Grocery = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Grocery Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groceryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.category}</p>
            <p className="text-gray-800 font-bold mb-4">{item.price}</p>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-200">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
