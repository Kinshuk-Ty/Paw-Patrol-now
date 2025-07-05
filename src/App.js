const Home = () => (
  <div className="p-8 text-center">
    <h1 className="text-4xl font-bold mb-6">Welcome to Paw Patrol</h1>
    <p className="text-lg mb-10">Bringing pet joy to your doorstep</p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link to="/products" className="bg-white shadow-md px-6 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition">
        🛍️ Products
      </Link>
      <Link to="/orders" className="bg-white shadow-md px-6 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition">
        📦 Orders
      </Link>
      <Link to="/about" className="bg-white shadow-md px-6 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition">
        👨‍💻 About Us
      </Link>
      <Link to="/partners" className="bg-white shadow-md px-6 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition">
        🤝 Partners
      </Link>
      <Link to="/login" className="bg-white shadow-md px-6 py-3 rounded-xl text-gray-800 font-semibold hover:bg-gray-100 transition">
        🔐 Login
      </Link>
    </div>
  </div>
);
