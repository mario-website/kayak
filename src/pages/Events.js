import React from "react";
import {Link} from "react-router-dom";
import {useAppContext} from "../contexts/AppContext";

const Events = () => {
  // @ts-ignore
  const {events} = useAppContext();

  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <div>
        {events.map((event) => (
          <div key={event.id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/events/${event.id}`}>{event.title}</Link>
              </h5>
              <p className="card-text">{event.description}</p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
