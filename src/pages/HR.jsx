// src/pages/HR.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';

function HR() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      const token = localStorage.getItem('token');
      
      try {
        const response = await axios.get('/hr', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(response.data);
      } catch (err) {
        setError('Failed to fetch employees');
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Employee Name</th>
            <th className="px-4 py-2 border-b text-left">Position</th>
            <th className="px-4 py-2 border-b text-left">Department</th>
            <th className="px-4 py-2 border-b text-left">Date Hired</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee._id}>
                <td className="px-4 py-2 border-b">{employee.name}</td>
                <td className="px-4 py-2 border-b">{employee.position}</td>
                <td className="px-4 py-2 border-b">{employee.department}</td>
                <td className="px-4 py-2 border-b">{new Date(employee.hiredAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-2 text-center text-gray-500">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HR;
