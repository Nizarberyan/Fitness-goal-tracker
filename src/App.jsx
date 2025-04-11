// src/App.jsx
import React, { useState, useEffect } from 'react';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import GoalSummary from './components/GoalSummary';
import { saveGoals, loadGoals } from './utils/storage';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  // Load saved goals from localStorage on first render
  useEffect(() => {
    const saved = loadGoals();
    setGoals(saved);
  }, []);

  // Save to localStorage every time goals change
  useEffect(() => {
    saveGoals(goals);
  }, [goals]);

  // Add a new goal
  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  // Increase progress of a goal
  const updateProgress = (id) => {
    const updated = goals.map(goal =>
      goal.id === id ? { ...goal, progress: goal.progress + 1 } : goal
    );
    setGoals(updated);
  };

  // Delete a goal
  const deleteGoal = (id) => {
    const updated = goals.filter(goal => goal.id !== id);
    setGoals(updated);
  };

  return (
    <div className="App">
      <h1>Fitness Goal Tracker</h1>
      <GoalForm onAdd={addGoal} />
      <GoalList goals={goals} onProgress={updateProgress} onDelete={deleteGoal} />
      <GoalSummary goals={goals} />
    </div>
  );
}

export default App;
