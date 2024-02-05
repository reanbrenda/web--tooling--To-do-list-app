import { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <TodoList todos={todos} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
