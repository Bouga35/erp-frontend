// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">ERP Dashboard</h1>
          <nav>
            <Link to="/profile" className="text-white">Profile</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Inventory Module */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory</h2>
            <p className="text-gray-600">Manage your product inventory and stock levels.</p>
            <Link to="/inventory" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Inventory
            </Link>
          </div>

          {/* HR Module */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">HR</h2>
            <p className="text-gray-600">Manage employees, payroll, and attendance.</p>
            <Link to="/hr" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to HR
            </Link>
          </div>

          {/* Sales Module */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales</h2>
            <p className="text-gray-600">Track your sales, customer orders, and invoices.</p>
            <Link to="/sales" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Sales
            </Link>
          </div>
        </div>

        {/* Additional content or modules */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Module 1</h3>
              <p className="text-gray-600">Additional module details.</p>
            </div>

            {/* Module 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Module 2</h3>
              <p className="text-gray-600">Additional module details.</p>
            </div>

            {/* Module 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Module 3</h3>
              <p className="text-gray-600">Additional module details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
