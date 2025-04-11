
import React, { useState } from 'react';

function GoalForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [category, setCategory] = useState('fitness');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !target) return;

    const newGoal = {
      id: Date.now(),
      title,
      target: Number(target),
      progress: 0,
      category
    };

    onAdd(newGoal);
    setTitle('');
    setTarget('');
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Créer un Nouvel Objectif</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre de l'objectif</label>
          <input
            id="title"
            type="text"
            placeholder="Ex : Marcher 10 000 pas"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="target">Valeur cible</label>
          <input
            id="target"
            type="number"
            placeholder="Ex : 10000"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select 
            id="category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="fitness">Fitness</option>
            <option value="nutrition">Nutrition</option>
            <option value="bien-être">Bien-être</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        
        <button type="submit" className="btn-primary">
          <span className="icon">+</span> Ajouter Objectif
        </button>
      </form>
    </div>
  );
}

export default GoalForm;
