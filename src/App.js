import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const PageLink = ({ to, emoji, label }) => (
  <Link
    to={to}
    className="bg-white shadow-md px-6 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition"
  >
    {emoji} {label}
  </Link>
);

const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-6">Welcome to Paw Patrol</h1>
    <p className="text-lg mb-10">Bringing pet joy to your doorstep</p>
    <div className="flex flex-wrap justify-center gap-4">
      <PageLink to="/products" emoji="🛍️" label="Products" />
      <PageLink to="/orders" emoji="📦" label="Orders" />
      <PageLink to="/about" emoji="👨‍💻" label="About Us" />
      <PageLink to="/partners" emoji="🤝" label="Partners" />
      <PageLink to="/login" emoji="🔐" label="Login" />
    </div>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
  }
