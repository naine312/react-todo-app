import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todo-item-store";
import "./App.css";

function App() {
  /*const [todoItems, setTodoItems] = useState(initialTodoItems);*/
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
