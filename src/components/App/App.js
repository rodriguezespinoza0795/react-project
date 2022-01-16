import React, { useState, useEffect } from 'react';
import AppTemplate from './App.template'
import useLocalStorage from "../../customHooks/useLocalStorage";

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchedTodos, setSearchedTodos] = useLocalStorage('TODOS_V1', []);
  const [query, setQuery] = useState("");

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  useEffect(() => {
    const timeOutId = setTimeout(() =>
      setSearchedTodos(query.length === 0 ? todos : todos.filter(({ text }) => text.toLowerCase().includes(query.toLowerCase())))
      , 500);
    return () => clearTimeout(timeOutId);
  }, [query, todos]);

  const searchIndex = (text) => todos.findIndex(todo => todo.text === text);

  const completeTodo = (text) => {
    const todoIndex = searchIndex(text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = searchIndex(text);
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
    />
  );
}

export default App;