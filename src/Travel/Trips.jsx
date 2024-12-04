import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './edit.css';

const Trips = () => {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(savedTrips);
  }, []); 

  return (
    <div className="trips-container">
      <h2>Trips</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <span>{trip.destination || 'Unnamed Trip'}</span>
            <Link  to={`/edit-trip/${index}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trips;