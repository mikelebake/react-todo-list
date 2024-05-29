// src/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  // State pour stocker la liste des tâches
  const [todos, setTodos] = useState([]);
  // State pour la nouvelle tâche à ajouter
  const [newTodo, setNewTodo] = useState('');
  // State pour déterminer si une tâche est en cours de modification
  const [isEditing, setIsEditing] = useState(false);
  // State pour stocker les informations de la tâche actuelle à modifier
  const [currentTodo, setCurrentTodo] = useState({ text: '', index: null });

  // Fonction pour ajouter une nouvelle tâche
  const addTodo = () => {
    if (newTodo.trim()) {
      // Ajoute la nouvelle tâche à la liste des tâches
      setTodos([...todos, newTodo]);
      // Réinitialise l'input de la nouvelle tâche
      setNewTodo('');
    }
  };

  // Fonction pour supprimer une tâche
  const deleteTodo = (index) => {
    // Filtre la tâche à supprimer en utilisant son index
    const newTodos = todos.filter((_, i) => i !== index);
    // Met à jour la liste des tâches
    setTodos(newTodos);
  };

  // Fonction pour gérer le clic sur le bouton de modification
  const handleEditButtonClick = (todo, index) => {
    // Active le mode d'édition
    setIsEditing(true);
    // Stocke la tâche actuelle et son index
    setCurrentTodo({ text: todo, index: index });
  };

  // Fonction pour soumettre le formulaire de modification
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // Met à jour la liste des tâches avec la tâche modifiée
    const updatedTodos = todos.map((todo, index) =>
      index === currentTodo.index ? currentTodo.text : todo
    );
    // Met à jour la liste des tâches avec les modifications
    setTodos(updatedTodos);
    // Désactive le mode d'édition et réinitialise currentTodo
    setIsEditing(false);
    setCurrentTodo({ text: '', index: null });
  };

  // Fonction pour gérer le changement de l'input de modification
  const handleEditInputChange = (e) => {
    // Met à jour le texte de la tâche en cours de modification
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  return (
    <div className="App">
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Modifier la tâche</h2>
          <label htmlFor="editTodo">Modifier la tâche :</label>
          <input
            name="editTodo"
            type="text"
            placeholder="Modifier la tâche"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit">Mettre à jour</button>
          <button onClick={() => setIsEditing(false)}>Annuler</button>
        </form>
      ) : (
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Ajouter une tâche..."
          />
          <button onClick={addTodo}>Ajouter</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Tâches</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Supprimer</button>
                <button onClick={() => handleEditButtonClick(todo, index)}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;