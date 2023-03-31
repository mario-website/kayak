import React from "react";
import {useParams} from "react-router-dom";

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

const EventDetails = () => {
  // @ts-ignore
  const {eventId} = useParams();
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
