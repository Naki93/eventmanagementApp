import React from 'react';
import EventCard from './EventCard';

//Event list component to display list of events
const EventList = ({ events }) => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
