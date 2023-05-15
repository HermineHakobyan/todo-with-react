const TodoListItem=({todos, onRemoveTodo, onCompletedTodo})=>{
return todos.map(todo =>{
    return(
        <div className="todo-list-item" key={todo.id}>
        <label>
            <input 
            type="checkbox"
            checked={todo.isCompleted}
            onChange={()=>{onCompletedTodo(todo.id)}}
            />
            <span>{todo.text}</span>
            <button onClick={()=>onRemoveTodo(todo.id)}>
                Remove </button>
        </label>
    </div> 
    )
    
})
};
export default TodoListItem;

