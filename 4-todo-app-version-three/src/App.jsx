import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMessage  from "./component/WelcomeMessage";
import "./App.css";
import { use, useState } from "react";

function App() {


  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    

    const newTodoItems = [...todoItems, {name: itemName,dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItems);
    
  }

  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo onNewItem = {handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage /> }
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>  

     
      
    </center>
  );
}

export default App;
