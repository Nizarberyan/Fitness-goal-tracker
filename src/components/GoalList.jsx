
import React from 'react';

function GoalList({ goals, onProgress, onDelete }) {
  return (
    <div className="goals-container">
      <h2 className="section-title">Mes Objectifs</h2>
      {goals.length === 0 ? (
        <div className="empty-state">
          <p>Vous n'avez pas encore d'objectifs. Créez votre premier objectif !</p>
        </div>
      ) : (
        <div className="goals-grid">
          {goals.map(goal => {
            const percent = Math.min((goal.progress / goal.target) * 100, 100).toFixed(0);
            const isCompleted = goal.progress >= goal.target;

            return (
              <div className={`goal-card ${isCompleted ? 'completed' : ''}`} key={goal.id}>
                <div className="goal-header">
                  <h3>{goal.title}</h3>
                  {isCompleted && <div className="completion-badge">✓</div>}
                </div>
                
                <div className="goal-progress-info">
                  <span className="progress-value">{goal.progress} / {goal.target}</span>
                  <span className="progress-percent">{percent}%</span>
                </div>
                
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${percent}%` }}></div>
                </div>
                
                <div className="goal-actions">
                  <button className="btn-progress" onClick={() => onProgress(goal.id)}>
                    <span className="icon">+</span> Progression
                  </button>
                  <button className="btn-delete" onClick={() => onDelete(goal.id)}>
                    <span className="icon">×</span> Supprimer
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default GoalList;
