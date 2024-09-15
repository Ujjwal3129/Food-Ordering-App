import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { FaCartPlus, FaHome, FaStore } from "react-icons/fa";  // Corrected FaShop to FaStore
import { TbHelpHexagonFilled } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { MdAssignmentInd } from "react-icons/md";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Header() {
  const [login, setLogin] = useState(false);

  const user = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  const onlineStatus = useOnlineStatus();

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <header className="bg-zinc-100 shadow-md py-2">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="logo-container">
          <img className="logo w-20" src={LOGO_URL} alt="Logo" />
        </div>
        <nav className="nav-items">
          <ul className="flex gap-12 text-lg font-semibold">
            <Link to="/">
              <li className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <FaHome />
                Home
              </li>
            </Link>

            <Link to="/help">
              <li className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <TbHelpHexagonFilled />
                Help
              </li>
            </Link>

            <Link to="/offer">
              <li className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <BiSolidOffer /> Offer
              </li>
            </Link>

            <Link to="/cart">
              <li className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <FaCartPlus />
                Cart {cartItems.length}
              </li>
            </Link>

            <Link to="/grocery">
              <li className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <FaStore /> {/* Updated Icon */}
                Grocery
              </li>
            </Link>

            <button
              onClick={handleLogin}
              className="flex gap-2 items-center text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              <MdAssignmentInd />
              {login ? "Sign out" : "Sign in"}
            </button>

            <li className="flex gap-2 items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
              {user.loggedIn} Active: {onlineStatus ? "🟢" : "🔴"}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
