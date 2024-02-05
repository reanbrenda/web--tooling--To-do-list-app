import React from "react";

function TodoItem({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      <span data-testid="TodoItemTitle">{todo.text}</span>
    </div>
  );
}

export default TodoItem;
