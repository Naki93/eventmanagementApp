import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import CreateEventForm from './CreateEventForm';
import EventList from './EventList';
import splash from "../images/dot.png"// Import the image




const AdminDashboard = () => {
  const [events, setEvents] = useState([]);// State for storing events
  const [error, setError] = useState(null);// State for error handling

  

   // Function to fetch events from the server
  const fetchEvents = async () => {
     // Get the token from local storage
    const token = localStorage.getItem('token')
    
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

    // Function to handle event deletion
  const handleDeleteEvent = async (eventId) => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch(`http://localhost:5000/auth/events/${eventId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        fetchEvents();// Fetch events again after deletion
      } else {
        console.error('Error deleting event');
      }
    } catch (error) {
      console.error('Error deleting event', error);
    }
  };
  
// Function to handle event updates
  const handleUpdateEvent = async (eventId, updatedData) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/auth/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        fetchEvents();// Fetch events again after update
      } else {
        console.error('Error updating event');
      }
    } catch (error) {
      console.error('Error updating event', error);
    }
  };
  

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <a className="navbar-brand" href="/admin-dashboard">
            <img src={splash} alt="Logo" width="28" height="28" className="d-inline-block align-text-top me-2" />
           AdminDashboard
          </a>
          <Link to="/admin-dashboard" className="">
             {/* Use Link to navigate to the login page */}
          </Link>
          
          <Link to="/login" className="btn btn-danger">
            Logout {/* Use Link to navigate to the login page */}
          </Link>
        </div>
      </nav>

      <CreateEventForm onEventCreated={fetchEvents} />

      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="mb-3">Event List</h2>
      <EventList
        events={events}
        onDeleteEvent={handleDeleteEvent}
        onUpdateEvent={handleUpdateEvent}
        fetchEvents={fetchEvents}
      />
    </div>
  );
};

export default AdminDashboard;

