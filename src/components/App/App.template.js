import React from 'react';
import { TodoContext } from '../TodoContex'
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import Container from '@mui/material/Container';

function AppTemplate() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext);
    return (
        <Container maxWidth="sm">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {searchedTodos.map((item, index) => (
                    <TodoItem
                        key={index}
                        text={item.text}
                        completed={item.completed}
                        onComplete={completeTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </Container>
    )
}

export default AppTemplate; 