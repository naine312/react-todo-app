import { MdAddToQueue } from "react-icons/md";
import { useRef } from "react";
import { todoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";

function AddTodo() {
  const { addNewItem } = useContext(todoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container items-container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddToQueue />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
