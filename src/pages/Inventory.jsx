// src/pages/Inventory.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInventory = async () => {
      const token = localStorage.getItem('token'); // Ensure the user is authenticated

      try {
        const response = await axios.get('/inventory', {
          headers: { Authorization: `Bearer ${token}` }, // Pass the token for authentication
        });
        setInventory(response.data);
      } catch (err) {
        setError('Failed to fetch inventory items');
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Item Name</th>
            <th className="px-4 py-2 border-b text-left">Quantity</th>
            <th className="px-4 py-2 border-b text-left">Price</th>
            <th className="px-4 py-2 border-b text-left">Category</th>
            <th className="px-4 py-2 border-b text-left">Added Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length > 0 ? (
            inventory.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 border-b">{item.quantity}</td>
                <td className="px-4 py-2 border-b">{item.price}</td>
                <td className="px-4 py-2 border-b">{item.category}</td>
                <td className="px-4 py-2 border-b">{new Date(item.createdAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 text-center text-gray-500">No inventory items available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
