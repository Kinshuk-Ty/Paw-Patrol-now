const Login = () => {
return (
  <div className="login-container">
    <div className="login-box">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <input 
        className="w-full mb-2 p-2 border rounded" 
        placeholder="Email" 
      />
      <input 
        className="w-full mb-4 p-2 border rounded" 
        type="password" 
        placeholder="Password" 
      />
      <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg">
        Sign In
      </button>
      <p className="mt-4 text-center">
        <Link to="/" className="text-pink-500 hover:underline">
          Back to Home
        </Link>
      </p>
    </div>
  </div>
);
