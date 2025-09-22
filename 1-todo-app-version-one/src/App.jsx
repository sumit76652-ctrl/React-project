import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import TodoItem2 from "./component/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo></AddTodo>
      <div className="item-container">
      <TodoItem/>
      <TodoItem2></TodoItem2>
      </div>
      
      
    </center>
  );
}

export default App;
