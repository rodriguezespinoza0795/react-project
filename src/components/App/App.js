import React, { useState, useEffect } from 'react';
import AppTemplate from './App.template'
import useLocalStorage from "../../customHooks/useLocalStorage";

function App() {
  const { item: todos, saveItem: saveTodos, loading, error, } = useLocalStorage('TODOS_V1', []);
  const [query, setQuery] = useState("");

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(query.toLowerCase()));

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppTemplate
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      query={query}
      setQuery={setQuery}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      error={error}
      loading={loading}
    />
  );
}

export default App;