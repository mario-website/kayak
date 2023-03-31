import React from "react";
import {useParams} from "react-router-dom";
import {useAppContext} from "../contexts/AppContext";

const EventDetails = () => {
  // @ts-ignore
  const {events} = useAppContext();
  const {eventId} = useParams();
  // @ts-ignore
  const event = events.find((event) => event.id === parseInt(eventId, 10));

  if (!event) {
    return <p>Event not found.</p>;
  }

  return (
    <div className="container">
      <h1>{event.title}</h1>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetails;
