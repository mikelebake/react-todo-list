// src/App.js
import React from 'react';
import './App.css';
import TodoList from './TodoList'; // Importez le composant TodoList

function App() {
  return (
    <div className="App">
      <h1>Liste de Tâches</h1>
      <TodoList /> {/* Utilisez le composant TodoList */}
    </div>
  );
}

export default App;
