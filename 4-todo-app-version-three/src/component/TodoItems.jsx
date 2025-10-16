import TodoItem1 from "./TodoItem1";
import styles from "./TodoItems.module.css"

const TodoItems = ({todoItems, onDeleteClick}) => {
return <> <div className= {styles.itemContainer}>
       
       {todoItems.map(item => <TodoItem1 todoDate={item.dueDate} todoName= {item.name}
       onDeleteClick={onDeleteClick}></TodoItem1> )}
      
      </div></>
}

export default TodoItems;