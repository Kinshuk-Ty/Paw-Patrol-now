import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './App';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary success - we'll add Firebase auth later
    navigate('/'); // Redirect to home after login
  };

  return (
    <div className="p-8 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          className="w-full mb-2 p-2 border rounded" 
          placeholder="Email" 
          required
        />
        <input 
          className="w-full mb-4 p-2 border rounded" 
          type="password" 
          placeholder="Password" 
          required
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="mt-4 text-center">
        <Link to="/" className="text-pink-500 hover:underline">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default Login;
