// src/TodoList.js
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

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

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={addTodo}>Ajouter</button>
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
                <td><button onClick={() => deleteTodo(index)}>Supprimer</button></td>
            </tr>
            ))}
            </tbody>
      </table>
    </div>
  );
}

export default TodoList;
