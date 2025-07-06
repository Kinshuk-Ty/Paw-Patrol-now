import React from 'react';
import { Link } from 'react-router-dom';
import Button from './App';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Added background */}
      <div className="p-8 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input 
          className="w-full mb-2 p-2 border rounded bg-white" 
          placeholder="Email" 
        />
        <input 
          className="w-full mb-4 p-2 border rounded bg-white" 
          type="password" 
          placeholder="Password" 
        />
        <Button className="w-full">
          Sign In
        </Button>
        <p className="mt-4 text-center">
          <Link to="/" className="text-pink-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
