
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';



const RegistrationForm = () => {
  //Set appropriate states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [usernameError, setUsernameError] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setPasswordError('');
    setSuccessAlert(false)

    // Perform validation
    let hasErrors = false;

    if (!username.includes('@') || !username.includes('.com')) {
        setUsernameError('Username must be in the format of example@example.com');
        hasErrors = true;
      }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          isAdmin,
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData); // Handle the response data as needed
  
        // Show success alert
        setSuccessAlert(true);
  
        if (isAdmin) {
          console.log('User registered as admin');
        } else {
          console.log('User registered as regular user');
        }
        setRegistrationSuccess(true);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

    

  // If registration is successful, navigate to the login page
  if (registrationSuccess) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
        
      <form onSubmit={handleSubmit} className="col-md-6 bg-dark text-light p-4 rounded">
        <h2 className="mb-4">Registration Form</h2>
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
            className={`form-control ${passwordError ? 'is-invalid' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="invalid-feedback">{passwordError}</div>}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isAdmin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
          <label htmlFor="isAdmin" className="form-check-label">
            Admin
          </label>
        </div>
        {/* Username error alert */}
        {usernameError && (
          <div className="alert alert-danger mt-3" role="alert">
            {usernameError}
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        
      </form>
      
    </div>
  );
};

export default RegistrationForm;



