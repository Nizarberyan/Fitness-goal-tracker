
import React from 'react';

function GoalSummary({ goals }) {
  const completed = goals.filter(g => g.progress >= g.target).length;
  const totalGoals = goals.length;
  const average = goals.length > 0
    ? goals.reduce((sum, g) => sum + (g.progress / g.target), 0) / goals.length
    : 0;
  

  const categoryCounts = goals.reduce((acc, goal) => {
    acc[goal.category] = (acc[goal.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="summary-container">
      <h2 className="section-title">Résumé des Performances</h2>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-info">
            <h3>Objectifs atteints</h3>
            <p className="stat-value">{completed} / {totalGoals}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-info">
            <h3>Progression moyenne</h3>
            <p className="stat-value">{(average * 100).toFixed(1)}%</p>
          </div>
        </div>
        
        <div className="stat-card wide">
          <div className="stat-icon">📌</div>
          <div className="stat-info">
            <h3>Répartition par catégorie</h3>
            <div className="categories-list">
              {Object.entries(categoryCounts).map(([category, count]) => (
                <span key={category} className="category-tag">
                  {category}: {count}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalSummary;
