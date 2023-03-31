import React from "react";
import {Link} from "react-router-dom";

const Events = () => {
  // Same events data as before
  // ...
  const events = [
    {
      id: 1,
      title: "Beginner Kayaking Course",
      date: "April 10, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Riverbank Park",
      description:
        "Our beginner kayaking course is designed for those new to the sport. Learn basic paddling techniques, safety procedures, and essential equipment knowledge.",
    },
    {
      id: 2,
      title: "Whitewater Adventure Trip",
      date: "April 20, 2023",
      time: "8:00 AM - 6:00 PM",
      location: "Whitewater Rapids",
      description:
        "Join us for an adrenaline-pumping whitewater adventure! Suitable for experienced kayakers, this trip will test your skills and provide a thrilling experience.",
    },
    // Add more events as needed
  ];

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
