import React from 'react';
import AppTemplate from './App.template'
import { TodoProvider } from '../TodoContex';


function App() {
  return (
    <TodoProvider>
      <AppTemplate />
    </TodoProvider>
  );
}

export default App;