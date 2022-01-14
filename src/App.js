import { TodoItem } from './components/TodoItem';
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import Container from '@mui/material/Container';



const todos = [
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
  return (
    <Container maxWidth="sm">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((item, index) => (
          <TodoItem key={index} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </Container>
  );
}

export default App;