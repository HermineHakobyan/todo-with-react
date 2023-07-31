const ToDoFooter =({todos,completedTodos,onRemoveAllCopmletedTodos})=>{

    return(
        <div className="todo-footer">
            <span>{completedTodos}/{todos}</span>
            <button onClick={onRemoveAllCopmletedTodos}>
                Clear all completed
                </button>
        </div>
    )

};
export default ToDoFooter;