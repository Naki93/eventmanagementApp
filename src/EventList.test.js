import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventList from './components/EventList';

// Sample events for testing
const sampleEvents = [
  {
    id: '1',
    eventName: 'Event 1',
    eventDate: '2023-08-15',
    eventTime: '15:00',
    eventLocation: 'Location 1',
    eventDescription: 'Description 1',
    eventStatus: 'Upcoming',
  },
  // Add more sample events here
];

test('renders the list of events', () => {
  render(<EventList events={sampleEvents} onDeleteEvent={() => {}} onUpdateEvent={() => {}} fetchEvents={() => {}} />);
  
  // Check if all event names are rendered
  for (const event of sampleEvents) {
    expect(screen.getByText(event.eventName)).toBeInTheDocument();
  }
});

test('changes event status on select change', () => {
  render(<EventList events={sampleEvents} onDeleteEvent={() => {}} onUpdateEvent={() => {}} fetchEvents={() => {}} />);
  
  // Find the select element for the first event
  const selectElement = screen.getByDisplayValue(sampleEvents[0].eventStatus);
  
  // Change the select value
  fireEvent.change(selectElement, { target: { value: 'Upcoming' } });
  
  // Check if the select value has changed
  expect(selectElement.value).toBe('Upcoming');
});
