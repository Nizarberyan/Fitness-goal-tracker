
export const saveGoals = (goals) => {
    localStorage.setItem('goals', JSON.stringify(goals));
  };
  
  export const loadGoals = () => {
    const data = localStorage.getItem('goals');
    return data ? JSON.parse(data) : [];
  };
  