import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Button = ({ children, ...props }) => (
  <button className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition" {...props}>
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white p-4 ${className}`}>{children}</div>
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
          <img src={`https://stock.adobe.com/search?k=cats+and+dogs+playing}`} alt="Pet Product" className="w-full h-40 object-cover rounded-xl mb-4" />
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
    <p>You haven't placed any orders yet.</p>
  </div>
);

const ProfileCard = ({ name, role, bio, imageUrl, link }) => (
  <Card className="text-center rounded-2xl shadow-md overflow-hidden">
    <img 
      src={imageUrl} 
      alt={name} 
      className="w-full h-48 object-cover"
    />
    <CardContent className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-pink-500 mb-2">{role}</p>
      <p className="text-sm mb-4 line-clamp-3">{bio}</p>
      <Button>
        <Link to={link}>Read More</Link>
      </Button>
    </CardContent>
  </Card>
);

const AboutUs = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-8 text-center">About Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Profile cards remain the same */}
      <ProfileCard 
        name="Kinshuk Tyagi"
        role="Founder & Developer"
        bio="Passionate about pets and technology..."
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        link="/about/kinshuk"
      />
      <ProfileCard
        name="Mohd Ayan"
        role="Co-Founder"
        bio="Pet enthusiast with business expertise. Handles partnerships and ensures we deliver quality products to your doorstep."
        imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        link="/about/ayan"
      />
      <ProfileCard
        name="Pratik Raj"
        role="Marketing Head"
        bio="Creative mind behind our branding and outreach. Makes sure Paw Patrol connects with pet lovers everywhere."
        imageUrl="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        link="/about/pratik"
      />
    </div>
  </div>
);

// Individual profile pages (add these components too)
const KinshukProfile = () => (
  <div className="p-8 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Kinshuk Tyagi</h2>
    <img 
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
      alt="Kinshuk" 
      className="w-full h-64 object-cover rounded-xl mb-6"
    />
    <p className="mb-4">As the founder of Paw Patrol, I combined my love for pets with my technical skills...</p>
    {/* Add more detailed content here */}
    <Button className="mt-4">
      <Link to="/about">Back to Team</Link>
    </Button>
  </div>
);

const AyanProfile = () => (
  <div className="p-8 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Mohd Ayan</h2>
    <img 
      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
      alt="Mohd Ayan" 
      className="w-full h-64 object-cover rounded-xl mb-6"
    />
    <p className="mb-4">As co-founder of Paw Patrol, I bring business expertise and a love for pets...</p>
    <Button className="mt-4">
      <Link to="/about">Back to Team</Link>
    </Button>
  </div>
);

const PratikProfile = () => (
  <div className="p-8 max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Pratik Raj</h2>
    <img 
      src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
      alt="Pratik Raj" 
      className="w-full h-64 object-cover rounded-xl mb-6"
    />
    <p className="mb-4">As marketing head, I ensure Paw Patrol reaches every pet lover...</p>
    <Button className="mt-4">
      <Link to="/about">Back to Team</Link>
    </Button>
  </div>
);
// Create similar components for AyanProfile and PratikProfile
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

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">🐾 Paw Patrol</h1>
    <div className="space-x-2">
      <Link 
        to="/" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        Home
      </Link>
      <Link 
        to="/products" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        Products
      </Link>
      <Link 
        to="/orders" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        Orders
      </Link>
      <Link 
        to="/partners" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        Partners
      </Link>
      <Link 
        to="/about" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        About Us
      </Link>
      <Link 
        to="/location" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        Location
      </Link>
      <Link 
        to="/login" 
        className="text-black hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition"
      >
        Login
      </Link>
    </div>
  </nav>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* --- Main Content --- */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          
          {/* --- About Section --- */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/kinshuk" element={<KinshukProfile />} />
          <Route path="/about/ayan" element={<AyanProfile />} />
          <Route path="/about/pratik" element={<PratikProfile />} />
          
          {/* --- Other Pages --- */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
