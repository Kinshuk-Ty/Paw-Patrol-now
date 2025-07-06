import React from 'react';

const Login = () => {
  // Debug test - will show on screen
  const debugInfo = `
    Screen Width: ${window.innerWidth}px
    CSS Loaded: ${document.styleSheets.length > 0 ? '✅' : '❌'}
    React Version: ${React.version}
  `;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb', // gray-50
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: 'red', textAlign: 'center' }}>DEBUG MODE</h1>
      
      <pre style={{
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '500px'
      }}>
        {debugInfo}
      </pre>

      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        margin: '0 auto',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center' }}>Login Form Coming Soon</h2>
        <p style={{ textAlign: 'center', color: '#666' }}>
          (This confirms the page loads correctly)
        </p>
      </div>
    </div>
  );
};

export default Login;
