// src/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditButtonClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // Mettez à jour la tâche modifiée dans la liste des tâches
    // Utilisez currentTodo pour obtenir les informations de la tâche
    // Réinitialisez l'état isEditing à false pour sortir du mode d'édition
    // ...
  };

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  }
  
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
            placeholder="Ajouter une tâche..." />
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
                    <td>{todo}{' '}</td>
                    <td>
                        <button onClick={() => deleteTodo(index)}>Supprimer</button>
                        <button onClick={() => handleEditButtonClick(todo)}>Modifier</button>
                    </td>
                </tr>
                ))}
                </tbody>
        </table>
    </div>
  );
  
}

export default TodoList;
