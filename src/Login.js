import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-4">
      {/* White card container */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        
        {/* Email Input */}
        <div className="mb-4">
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="email" 
            placeholder="your@email.com"
          />
        </div>
        
        {/* Password Input */}
        <div className="mb-6">
          <input 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="password" 
            placeholder="••••••••"
          />
        </div>
        
        {/* Login Button */}
        <button 
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          type="button"
        >
          Sign In
        </button>
        
        {/* Back to Home Link */}
        <div className="mt-4 text-center">
          <Link 
            to="/" 
            className="text-pink-500 hover:text-pink-600 hover:underline transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
