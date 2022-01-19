import React from 'react';
import { useTodos } from '../../customHooks/useTodos'
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItemSkeleton } from '../TodoItem/TodoItemSkeleton';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import Container from '@mui/material/Container';
import { BasicModal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';



function App() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo, completedTodos, totalTodos, query, setQuery, handleClose, open, addTodo, handleOpen } = useTodos();
  return (
    <Container maxWidth="sm">
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch
          query={query}
          setQuery={setQuery}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        query={query}
        onError={() => <p>Desespérate, hubo un error...</p>}
        onLoading={() => [...Array(7)].map((e, i) => (<TodoItemSkeleton key={i} />))}
        onEmptyTodos={() => <p>¡Crea tu primer TODO!</p>}
        onEmptySearchResults={(searchText) => <p>No hay resultados de tasks para {searchText}</p>}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
      <BasicModal
        handleClose={handleClose}
        open={open}
        addTodo={addTodo}

      />
      <CreateTodoButton
        handleOpen={handleOpen}
      />
    </Container>
  );
}

export default App;