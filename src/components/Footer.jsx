// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 ERP Dashboard. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
          <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
