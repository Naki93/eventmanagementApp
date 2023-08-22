import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null); // Add error state

  
  
// Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('http://localhost:5000/auth/login')
      const response = await fetch(`http://localhost:5000/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      
  
  
      if (response.ok) {
        const responseData = await response.json();
        // console.log('Received Token:', token);
  
        const token = responseData.token; // Get the JWT token from the response
        console.log(JSON.stringify(token))
         localStorage.setItem('token', token);
        
  
        // Decode the JWT token to get the payload (which includes userRole)
        const decodedToken = jwt_decode(token);
        const userRole = decodedToken.role;
  console.log(decodedToken)
        console.log('User role:', userRole);
  
        setRole(userRole);
      } else {
        setError('Incorrect username or password');
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  

  useEffect(() => {
    // If the user role is admin, navigate to admin dashboard
    if (role === 'admin') {
      // return <Navigate to="/admin-dashboard" />;
      navigate('/admin-dashboard')

    }

    // If the user role is user, navigate to user dashboard
    if (role === 'user') {
      navigate('/user-dashboard');
    }
  }, [role , navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card bg-dark text-light p-4 rounded col-md-6">
        <h2 className="mb-4 text-center">Login Form</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          {/* ... form fields ... */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
               Username:
             </label>
            <input
               type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;





