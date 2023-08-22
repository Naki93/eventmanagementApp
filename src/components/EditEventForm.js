import React, { useState } from 'react';


// EditEventForm component takes props 'event' and 'onUpdateEvent' to handle event editing
const EditEventForm = ({ event, onUpdateEvent }) => {

  // Initialize state with the event data
  const [updatedData, setUpdatedData] = useState({
    eventName: event.eventName,
    eventDate: event.eventDate.split("T")[0],
    eventTime: event.eventTime.split("T")[0],
    eventLocation: event.eventLocation.split("T")[0],
    eventDescription: event.eventDescription,
    eventStatus: event.eventStatus,
  });

  
// Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(
        `http://localhost:5000/auth/events/${event._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );
  
      if (response.ok) {
        onUpdateEvent(); // Update the event list
      } else {
        console.error('Error updating event');
      }
    } catch (error) {
      console.error('Error updating event', error);
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
          value={updatedData.eventName}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, eventName: e.target.value })
          }
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
          value={updatedData.eventDate}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, eventDate: e.target.value })
          }
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
          value={updatedData.eventTime}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, eventTime: e.target.value })
          }
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
          value={updatedData.eventLocation}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, eventLocation: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventDescription" className="form-label">
          Event Description:
        </label>
        <textarea
          id="eventDescription"
          className="form-control"
          value={updatedData.eventDescription}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, eventDescription: e.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="eventStatus" className="form-label">
          Event Status:
        </label>
        <select
          id="eventStatus"
          className="form-control"
          value={updatedData.eventStatus}
          onChange={(e) =>
            setUpdatedData({ ...updatedData, eventStatus: e.target.value })
          }
        >
          <option value="Upcoming">Upcoming</option>
          <option value="Postponed">Postponed</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Update Event
      </button>
    </form>
  );
};

export default EditEventForm;
