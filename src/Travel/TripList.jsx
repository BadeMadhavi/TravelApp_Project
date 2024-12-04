import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(savedTrips);
  }, []);

  const handleAddNewTrip = () => {
    // Navigating to trip detail page to add a new trip
    navigate('/tripdetail');
  };

  const handleEditTrip = (index) => {
    navigate(`/edittrip/${index}`);
  };

  const handleDeleteTrip = (index) => {
    const updatedTrips = trips.filter((_, i) => i !== index);
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  return (
    <div className="list-container">
      <h2>Your Trips</h2>
      <p>Here you can add, edit, or delete your trips.</p>
      <button onClick={handleAddNewTrip}>Add New Trip</button>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <h3>{trip.destination}</h3>
            <p>{trip.startDate} to {trip.endDate}</p>
            <p><strong>Expenses:</strong> {trip.expenses ? trip.expenses.join(', ') : 'No expenses added'}</p>
            <p><strong>Companions:</strong> {trip.companions ? trip.companions.join(', ') : 'No companions added'}</p>
            <p><strong>Activities:</strong> {trip.activities ? trip.activities.join(', ') : 'No activities added'}</p>
            <button onClick={() => handleEditTrip(index)}>Edit</button>
            <button onClick={() => handleDeleteTrip(index)}>Delete Trip</button>
          </li>
        ))}
      </ul>
      {trips.length === 0 && <p>No trips found. Start by adding a new trip!</p>}
    </div>
  );
};

export default TripList;
