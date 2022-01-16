import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import Container from '@mui/material/Container';

function AppTemplate({ completedTodos, totalTodos, query, setQuery, searchedTodos, completeTodo, deleteTodo }) {
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