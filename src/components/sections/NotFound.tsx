import React from 'react';
import { AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
    <div className="bg-red-100 rounded-full p-6 mb-6">
      <AlertTriangle className="h-16 w-16 text-red-500" />
    </div>
    <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
    <p className="text-lg text-gray-600 mb-8">
      Oops! The page you are looking for does not exist.<br />
      You may have mistyped the address or the page may have moved.
    </p>
    <button
      onClick={() => { window.location.hash = 'about'; }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
    >
      Go to About Page
    </button>
  </section>
);

export default NotFound; 