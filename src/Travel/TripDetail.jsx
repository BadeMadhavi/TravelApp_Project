import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./tripdetail.css";

const TripDetail = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [companions, setCompanions] = useState([]);
  const [activities, setActivities] = useState([]); // New state for activities
  const [newExpense, setNewExpense] = useState('');
  const [newCompanion, setNewCompanion] = useState('');
  const [newActivity, setNewActivity] = useState(''); // New state for a single activity
  const navigate = useNavigate();

  const handleSaveTrip = () => {
    if (!destination || !startDate || !endDate) {
      alert('Please fill in all fields.');
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      alert('End date cannot be before start date.');
      return;
    }

    const newTrip = {
      destination,
      startDate,
      endDate,
      expenses,
      companions,
      activities, 
    };

    const savedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    savedTrips.push(newTrip);
    localStorage.setItem('trips', JSON.stringify(savedTrips));

    alert('Trip added successfully!');
    navigate('/triplist');
  };

  const handleAddExpense = () => {
    if (newExpense.trim()) {
      setExpenses([...expenses, newExpense]);
      setNewExpense('');
    }
  };

  const handleRemoveExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleAddCompanion = () => {
    if (newCompanion.trim()) {
      setCompanions([...companions, newCompanion]);
      setNewCompanion('');
    }
  };

  const handleRemoveCompanion = (index) => {
    setCompanions(companions.filter((_, i) => i !== index));
  };

  const handleAddActivity = () => {
    if (newActivity.trim()) {
      setActivities([...activities, newActivity]);
      setNewActivity('');
    }
  };

  const handleRemoveActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  return (
    <div className="add-container">
      <h2>Add New Trip</h2>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <div>
        <h3>Expenses</h3>
        <input
          type="text"
          placeholder="Add Expense"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense} <button onClick={() => handleRemoveExpense(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Travel Companions</h3>
        <input
          type="text"
          placeholder="Add Companion"
          value={newCompanion}
          onChange={(e) => setNewCompanion(e.target.value)}
        />
        <button onClick={handleAddCompanion}>Add Companion</button>
        <ul>
          {companions.map((companion, index) => (
            <li key={index}>
              {companion} <button onClick={() => handleRemoveCompanion(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Activities</h3>
        <input
          type="text"
          placeholder="Add Activity"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
        />
        <button onClick={handleAddActivity}>Add Activity</button>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              {activity} <button onClick={() => handleRemoveActivity(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleSaveTrip}>Save Trip</button>
      <button onClick={() => navigate('/triplist')}>Cancel</button>
    </div>
  );
};

export default TripDetail;
