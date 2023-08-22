import React from 'react';

//Create component to display list of events
const EventCard = ({ event , userRole }) => {
  return (
    <div className="col mb-4">
      <div className="card bg-dark text-light shadow">
        <div className="card-body">
          <h5 className="card-title">{event.eventName}</h5>
          <p className="card-text">Date: {event.eventDate}</p>
          <p className="card-text">Time: {event.eventTime}</p>
          <p className="card-text">Location: {event.eventLocation}</p>
          <p className="card-text">Description: {event.eventDescription}</p>
          <p className="card-text">Status: {event.eventStatus}</p>
          {userRole === 'admin' && (
            <div>
                <button className="btn btn-warning">Edit</button>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
