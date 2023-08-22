import React, { useState } from 'react';


// CreateEventForm component takes a prop 'onEventCreated' to handle event creation
const CreateEventForm = ({ onEventCreated }) => {
  // State variables for form inputs and error handling
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('')
  const [error, setError] = useState('');

  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get the authentication token from local storage
      const token = localStorage.getItem('token');

      // Send a POST request to create an event
      const response = await fetch(`http://localhost:5000/auth/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          eventName,
          eventDate,
          eventTime,
          eventLocation,
          eventDescription,
        }),
      });
  
      if (response.ok) {
        // If the event is created successfully, reset state and call the 'onEventCreated' callback
        const responseData = await response.json();
        setError('');
        console.log(responseData);
        onEventCreated(responseData);
        setEventName('');
        setEventDate('');
        setEventTime('');
        setEventLocation('');
        setEventDescription('');
      } else {
        // Handle errors during event creation
        setError('Error creating event');
        console.error('Event creation failed');
      }
    } catch (error) {
      // Handle network or server errors
      setError('Error creating event');
      console.error('Event creation failed', error);
    }
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="eventName" className="form-label">
          Event Name:
        </label>
        <input
          type="text"
          id="eventName"
          className="form-control"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventDate" className="form-label">
          Event Date:
        </label>
        <input
          type="date"
          id="eventDate"
          className="form-control"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventTime" className="form-label">
          Event Time:
        </label>
        <input
          type="time"
          id="eventTime"
          className="form-control"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventLocation" className="form-label">
          Event Location:
        </label>
        <input
          type="text"
          id="eventLocation"
          className="form-control"
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventDescription" className="form-label">
          Event Description:
        </label>
        <textarea
          type="text"
          id="eventDescription"
          className="form-control"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Create Event
      </button>
      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
};

export default CreateEventForm;
