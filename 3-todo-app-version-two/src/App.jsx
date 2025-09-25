import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name: "Buy Milk", dueDate: "4/10/2023"
    },
    {
      name: "Go TO collage", dueDate: "4/10/2023"
    },
    {
      name: "Like this vedio", dueDate: "right now"
    }
  ];

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>  

     
      
    </center>
  );
}

export default App;
