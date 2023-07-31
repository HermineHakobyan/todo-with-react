 import Todolistitem from "../todo-list-item/Todolistitem";
 const ToDoListItems =({todos, onRemoveTodo, onCompletedTodo})=>{
    return(
        <div className="todo-list-items">
            <Todolistitem todos={todos}
            onRemoveTodo={onRemoveTodo}
            onCompletedTodo={onCompletedTodo}
            />
        </div>
    )
 };
 export default ToDoListItems;