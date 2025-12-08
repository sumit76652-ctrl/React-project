import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem1 from "./TodoItem1";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems, } = useContext(TodoItemsContext);

  return (
    <>
      {" "}
      <div className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem1
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            
          ></TodoItem1>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
