// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Inventory from './pages/Inventory'; // Inventory page
import HR from './pages/HR'; // HR page
import Sales from './pages/Sales'; // Sales page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/inventory" element={<Inventory />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/sales" element={<Sales />} />
      </Routes>
    </Router>
  );
}

export default App;
