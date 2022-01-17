import React from 'react';
import { TodoContext } from '../TodoContex'
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoItemSkeleton } from '../TodoItem/TodoItemSkeleton';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import Container from '@mui/material/Container';
import { BasicModal } from '../Modal'; 
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';



function AppTemplate() {
    const { error, loading, searchedTodos, completeTodo, deleteTodo } = React.useContext(TodoContext);
    return (
        <Container maxWidth="sm">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && [...Array(7)].map((e, i) => (<TodoItemSkeleton key={i} />))}
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
            <BasicModal />
            <CreateTodoButton />
        </Container>
    )
}

export default AppTemplate; 