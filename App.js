import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Button = ({ children, ...props }) => (
  <button className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition" {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={\`bg-white p-4 \${className}\`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to Paw Patrol</h1>
    <p className="text-lg mb-6">Bringing pet joy to your doorstep</p>
    <Button>
      <Link to="/products">Shop Now</Link>
    </Button>
  </div>
);

const Products = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    {[1, 2, 3].map((id) => (
      <Card key={id} className="rounded-2xl shadow-md">
        <CardContent className="p-4">
          <img src={\`https://placekitten.com/200/20\${id}\`} alt="Pet Product" className="w-full h-40 object-cover rounded-xl mb-4" />
          <h2 className="text-xl font-semibold">Product {id}</h2>
          <p className="text-sm">A great item for your furry friend!</p>
          <Button className="mt-2">Add to Cart</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Orders = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">My Orders</h2>
    <p>You haven’t placed any orders yet.</p>
  </div>
);

const AboutUs = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p>We’re a team of pet lovers on a mission to deliver happiness.</p>
  </div>
);

const Partners = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    {["Happy Paws", "PetBuddy"].map((store) => (
      <Card key={store} className="p-4 rounded-2xl shadow">
        <CardContent>
          <h3 className="text-xl font-semibold">{store}</h3>
          <p>Local pet store partnered with us.</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Login = () => (
  <div className="p-8 max-w-sm mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
    <input className="w-full mb-2 p-2 border rounded" placeholder="Username" />
    <input className="w-full mb-4 p-2 border rounded" type="password" placeholder="Password" />
    <Button className="w-full">Sign In</Button>
  </div>
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
      <Link to="/login">Login</Link>
    </div>
  </nav>
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
