import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import Button from './App'; // Reuse your existing Button component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login successful - will automatically redirect
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-8 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          placeholder="Password"
          required
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-pink-500">Register</Link>
      </p>
    </div>
  );
};

export default Login;
