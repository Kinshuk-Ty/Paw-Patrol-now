import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const NavButton = ({ to, label }) => (
  <Link
    to={to}
    className="bg-white shadow px-4 py-2 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition"
  >
    {label}
  </Link>
);

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">🐾 Paw Patrol</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/partners">Partners</Link>
      <Link to="/about">About Us</Link>
      <Link to="/location">Location</Link> {/* ← ONLY ADD THIS LINE */}
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="p-8 text-center">
    <img
      src="https://images.unsplash.com/photo-1621518336680-4b8a3e76efba?auto=format&fit=crop&w=1000&q=80"
      alt="Cute dog and cat"
      className="mx-auto mb-6 rounded-xl shadow-md w-full max-w-2xl object-cover"
    />
    <h1 className="text-4xl font-bold mb-4">Welcome to Paw Patrol</h1>
    <p className="text-lg text-gray-700">Bringing pet joy to your doorstep</p>
  </div>
);

const Products = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Products</h2>
    <p>Our awesome pet products will appear here.</p>
  </div>
);

const Orders = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Orders</h2>
    <p>Your orders will appear here.</p>
  </div>
);

const AboutUs = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p>We’re a small team of passionate teenagers building India’s first pet product delivery service.</p>
    <ul className="mt-4 text-left list-disc list-inside">
      <li><strong>Kinshuk Tyagi</strong> – Founder, web lead</li>
      <li><strong>Mohd Ayan</strong> – Co-founder, logistics</li>
      <li><strong>Pratik Raj</strong> – Creative team support</li>
    </ul>
  </div>
);

const Partners = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
    <p>We work with local pet stores to deliver your products faster and cheaper.</p>
  </div>
);

const Location = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Set Your Location</h2>
    <div className="max-w-md mx-auto">
      <input 
        className="w-full mb-4 p-2 border rounded" 
        placeholder="Enter your delivery address" 
      />
      <Button>Save Location</Button>
    </div>
  </div>
);

const Login = () => (
  <div className="p-8 max-w-sm mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
    <input className="w-full mb-2 p-2 border rounded" placeholder="Username" />
    <input className="w-full mb-4 p-2 border rounded" type="password" placeholder="Password" />
    <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">Sign In</button>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
  }
