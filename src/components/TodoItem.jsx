import { MdDeleteSweep } from "react-icons/md";
import { todoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";
function AddItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(todoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
