const TodoFooter =({todos, completedTodos,onRemoveCompletedTodos})=>{
    return(
        <div className="todo-footer">
        <span>{completedTodos}/{todos}</span>
        <button onClick={onRemoveCompletedTodos}>
            Clear all completed
        </button>
    </div>
    )  
};
export default TodoFooter;