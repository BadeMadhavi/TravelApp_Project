import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './edit.css';

const EditTrip = () => {
  const { index } = useParams();
  const [trip, setTrip] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    if (savedTrips[index]) {
      setTrip(savedTrips[index]);
    } else {
      alert('Trip not found!');
      navigate('/trips');
    }
  }, [index, navigate]);

  const handleSave = () => {
    if (!trip.destination || !trip.startDate || !trip.endDate) {
      alert('Please fill in all fields.');
      return;
    }

    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    savedTrips[index] = trip;
    localStorage.setItem('trips', JSON.stringify(savedTrips));

    alert('Trip updated successfully!');
    navigate('/triplist');
  };

  const handleChange = (field, value) => {
    setTrip((prevTrip) => ({
      ...prevTrip,
      [field]: value,
    }));
  };

  const handleArrayChange = (field, value, index) => {
    const updatedArray = [...trip[field]];
    updatedArray[index] = value;
    setTrip((prevTrip) => ({
      ...prevTrip,
      [field]: updatedArray,
    }));
  };

  const handleAddItem = (field) => {
    setTrip((prevTrip) => ({
      ...prevTrip,
      [field]: [...prevTrip[field], ''],
    }));
  };

  return (
    <div className="edit-container">
      <h2>Edit Trip</h2>
      {trip ? (
        <>
          <input
            type="text"
            placeholder="Destination"
            value={trip.destination || ''}
            onChange={(e) => handleChange('destination', e.target.value)}
          />
          <input
            type="date"
            value={trip.startDate || ''}
            onChange={(e) => handleChange('startDate', e.target.value)}
          />
          <input
            type="date"
            value={trip.endDate || ''}
            onChange={(e) => handleChange('endDate', e.target.value)}
          />

          {/* Expenses */}
          <h3>Expenses</h3>
          {trip.expenses && trip.expenses.map((expense, idx) => (
            <input
              key={idx}
              type="number"
              placeholder="Expense"
              value={expense}
              onChange={(e) => handleArrayChange('expenses', e.target.value, idx)}
            />
          ))}
          <button onClick={() => handleAddItem('expenses')}>Add Expense</button>

          {/* Activities */}
          <h3>Activities</h3>
          {trip.activities && trip.activities.map((activity, idx) => (
            <input
              key={idx}
              type="text"
              placeholder="Activity"
              value={activity}
              onChange={(e) => handleArrayChange('activities', e.target.value, idx)}
            />
          ))}
          <button onClick={() => handleAddItem('activities')}>Add Activity</button>

          {/* Companions */}
          <h3>Companions</h3>
          {trip.companions && trip.companions.map((companion, idx) => (
            <input
              key={idx}
              type="text"
              placeholder="Companion"
              value={companion}
              onChange={(e) => handleArrayChange('companions', e.target.value, idx)}
            />
          ))}
          <button onClick={() => handleAddItem('companions')}>Add Companion</button>

          <button onClick={handleSave}>Save Changes</button>
  
        </>
      ) : (
        <p>Loading trip details...</p>
      )}
    </div>
  );
};

export default EditTrip;
