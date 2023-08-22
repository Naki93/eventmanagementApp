
import  { useState} from 'react';
import React from 'react';
import EditEventForm from './EditEventForm';


// EventList component takes props 'events', 'onDeleteEvent', 'onUpdateEvent', and 'fetchEvents'
const EventList = ({ events, onDeleteEvent, onUpdateEvent, fetchEvents }) => {
  // State to track the event being edited and whether the edit form should be shown
  const [editingEvent, setEditingEvent] = useState(null);
  //const [showEditForm, setShowEditForm] = useState(false); 

  

   // Function to handle status change of an event
  const handleStatusChange = async (eventId, newStatus) => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        `http://localhost:5000/auth/events/${eventId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ eventStatus: newStatus }),
        }
      );
  
      if (response.ok) {
        fetchEvents(); // Fetch updated events after status change
      } else {
        console.error('Error updating event status');
      }
    } catch (error) {
      console.error('Error updating event status', error);
    }
  };
  
// Function to handle the update button click for editing an event
  const handleUpdateButtonClicked = (event) => {
    setEditingEvent(event);
  };

  

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {events.map((event) => (
        <div key={event.id} className="col">
          <div className="card bg-dark text-light shadow">
            <div className="card-body">
              <h5 className="card-title">{event.eventName}</h5>
              <p className="card-text">Date: {event.eventDate}</p>
              <p className="card-text">Time: {event.eventTime}</p>
              <p className="card-text">Location: {event.eventLocation}</p>
              <p className="card-text">Description: {event.eventDescription}</p>
              <div className="mb-2">
                <span className="me-2">Status:</span>
                <select
                  className="form-select"
                  value={event.eventStatus} // Use eventStatus from the event object
                  onChange={(e) =>
                    handleStatusChange(event._id, e.target.value) // Call the handleStatusChange function
                  }
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Postponed">Postponed</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => onDeleteEvent(event._id)}
              >
                Delete
              </button>
              <button
                className="btn btn-warning ms-2"
                onClick={() => {
                  handleUpdateButtonClicked(event); // Set the updatedEventData
                  
                }}
              >
                Update
                
              </button>
              {editingEvent === event && (
              <EditEventForm event={event} onUpdateEvent={fetchEvents} />
              )}
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;

