// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          ERP Dashboard
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/inventory" className="hover:text-gray-300">
                Inventory
              </Link>
            </li>
            <li>
              <Link to="/sales" className="hover:text-gray-300">
                Sales
              </Link>
            </li>
            <li>
              <Link to="/hr" className="hover:text-gray-300">
                HR
              </Link>
            </li>
            {/* Add other links as needed */}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          {/* User Profile or Logout Button */}
          <button className="hover:text-gray-300">Profile</button>
          <button className="hover:text-gray-300">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
