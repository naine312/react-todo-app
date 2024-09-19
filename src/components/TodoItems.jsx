import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoItemsContext } from "../store/todo-item-store";
const TodoItems = () => {
  const contextObj = useContext(todoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
