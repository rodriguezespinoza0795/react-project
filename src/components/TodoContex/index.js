import React, { useState } from 'react';
import useLocalStorage from "../../customHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            query,
            setQuery,
            searchedTodos,
            completeTodo,
            deleteTodo,
            error,
            loading
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };