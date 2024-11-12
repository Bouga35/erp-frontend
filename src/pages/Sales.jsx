// src/pages/Sales.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';

function Sales() {
  const [sales, setSales] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSales = async () => {
      const token = localStorage.getItem('token');  // Get the token from localStorage

      try {
        const response = await axios.get('/sales', {
          headers: { Authorization: `Bearer ${token}` },  // Pass the token for authentication
        });
        setSales(response.data);
      } catch (err) {
        setError('Failed to fetch sales records');
      }
    };

    fetchSales();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sales Records</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Product Name</th>
            <th className="px-4 py-2 border-b text-left">Quantity Sold</th>
            <th className="px-4 py-2 border-b text-left">Total Price</th>
            <th className="px-4 py-2 border-b text-left">Customer Name</th>
            <th className="px-4 py-2 border-b text-left">Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {sales.length > 0 ? (
            sales.map((sale) => (
              <tr key={sale._id}>
                <td className="px-4 py-2 border-b">{sale.productName}</td>
                <td className="px-4 py-2 border-b">{sale.quantity}</td>
                <td className="px-4 py-2 border-b">${sale.totalPrice}</td>
                <td className="px-4 py-2 border-b">{sale.customerName}</td>
                <td className="px-4 py-2 border-b">{new Date(sale.dateOfSale).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 text-center text-gray-500">No sales records available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;
