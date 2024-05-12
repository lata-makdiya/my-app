import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const createTodo = () => {
    if (newTodo !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>TODO List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={createTodo}>Add Todo</button>

      <table className='table mt-5'>
        {todos.map((todo) => (
          <tr>
            <td><input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            /></td>
            <td style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</td>
            <td onClick={() => deleteTodo(todo.id)}>Delete</td>
          </tr>
        ))}
      </table>


      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TodoList;
