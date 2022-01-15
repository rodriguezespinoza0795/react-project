import React, { useState, useEffect  } from 'react';
import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import Container from '@mui/material/Container';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Cortar cebolla2', completed: true },
  { text: 'Tomar el curso de intro a React2', completed: false },
  { text: 'Llorar con la llorona2', completed: false },
  { text: 'Cortar cebolla3', completed: false },
  { text: 'Tomar el curso de intro a React3', completed: true },
  { text: 'Llorar con la llorona3', completed: false },
  { text: 'Cortar cebolla4', completed: false },
  { text: 'Tomar el curso de intro a React5', completed: false },
  { text: 'Llorar con la llorona6', completed: false },
]

function App() {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState(defaultTodos);
  const [searchedTodos, setSearchedTodos] = useState(defaultTodos);
  const completedTodos = todos.filter( todo => todo.completed).length
  const totalTodos = todos.length

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearchedTodos(query.length == 0 ? todos: todos.filter( ({text}) => text.toLowerCase().includes(query.toLowerCase()))), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <Container maxWidth="sm">
      <TodoCounter 
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch 
        query={query}
        setQuery={setQuery}
      />
      <TodoList>
        {searchedTodos.map((item, index) => (
          <TodoItem key={index} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Container>
  );
}

export default App;