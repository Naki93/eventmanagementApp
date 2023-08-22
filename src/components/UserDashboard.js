import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar';
import UserEventList from './UserEventList';


const UserDashboard = () => {
  // State variables for events and error handling
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  
  // Function to fetch events from the server
  const fetchEvents = async () => {
    // Get the token from local storage
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/auth/events`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setEvents(data);// Update the events state with fetched data
      } else {
        setError('Error fetching events');// Handle error if response is not ok
      }
    } catch (error) {
      setError('Error fetching events');// Handle error if fetch fails
    }
  };
  
// Use useEffect to fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);
//Log out function
  const handleLogout = () => {
    
    console.log('Logout clicked');
  };

  // Get the decoded token
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="mt-4">Event List</h2>
      <UserEventList events={events}  userRole={decodedToken.role}/>
    </div>
  );
};

export default UserDashboard;
