import { useState } from "react";

const TodoHeader=({onAddTodo})=>{
   const [value, setValue] =useState("");
    const onformSubmit=(e)=>{
        e.preventDefault();
        if(value !== ""){
            onAddTodo(value);
        }
        setValue("");
    };
    return(
        <div className="todo-header">
            <form >
                <input
                type="text"
                placeholder="Type here ..."
                value={value}
                onChange={e=>setValue(e.target.value)}
                />
                <button onClick={onformSubmit}>ADD</button>
            </form>
        </div>
    );

};


export default TodoHeader;