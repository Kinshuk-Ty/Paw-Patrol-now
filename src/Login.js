import React from 'react';
import { Link } from 'react-router-dom';
import Button from './App'; // Reuse your Button component

const Login = () => {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input 
        className="w-full mb-2 p-2 border rounded" 
        placeholder="Email" 
      />
      <input 
        className="w-full mb-4 p-2 border rounded" 
        type="password" 
        placeholder="Password" 
      />
      <Button className="w-full">
        Sign In
      </Button>
      <p className="mt-4 text-center">
        <Link to="/register" className="text-pink-500 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
