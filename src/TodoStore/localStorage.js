// src/redux/localStorage.js

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todosState', serializedState);
    } catch (e) {
      console.warn("Could not save state", e);
    }
  };
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('todosState');
      if (serializedState === null) {
        return undefined; // Let the reducers initialize the state
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn("Could not load state", e);
      return undefined;
    }
  };
  