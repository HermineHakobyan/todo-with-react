import { useState } from "react";
const TodoHeader =({onAddTodo})=>{
 const [value, setValue]= useState("");
 const onFormSubmit=(e)=>{
    e.preventDefault();
    if(value !== ""){
        onAddTodo(value);
    }
    setValue("");
 };
    return(
        <div className="todo-header">
            <form onSubmit={onFormSubmit}>
                <input
                type="text"
                placeholder="Type here ..."
                value={value}
                onChange={e=>setValue(e.target.value)}
                />
                <button>ADD</button>
            </form>
        </div>
    )
};
export default TodoHeader;
