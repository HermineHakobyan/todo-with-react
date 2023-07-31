import { useReducer } from "react";
import TodoHeader from "./components/todo-header/todoHeader";
import ToDoListItems from "./components/todo-list-items/TodolistItems";
import ToDoFooter from "./components/todo-footer/ToDoFooter";

const reducer = (todos, action) => {
  if (action.type === "ADD") {
    return [
      ...todos,
      {
        id: new Date().getTime(),
        text: action.payload.text,
        isCompleted: false
      }
    ];
  } else if (action.type === "REMOVE") {
    return todos.filter(todo => todo.id !== action.payload.id);
  }else if(action.type === "COPMLETED"){
    return todos.map(todo=>{
      if(todo.id=== action.payload.id){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo;
    })
  }else if(action.type === "REMOVE_ALL_COPLETED"){
    return todos.filter(todo =>!todo.isCompleted)

  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  console.log(todos);
  return (
    <div className="todo-app">
      <TodoHeader
        onAddTodo={(text) => {
          dispatch({
            type: "ADD",
            payload: {
              text
            }
          });
        }}
      />

      {
        todos.length >0 ?
        <ToDoListItems 
        todos={todos}
        onRemoveTodo={(id) => {
          dispatch({
            type: "REMOVE",
            payload: {
              id
            }
          });
        }}
        onCompletedTodo={(id)=>{
          dispatch({
            type:"COPMLETED",
            payload:{
              id
            }
          });
        }}
      />
      : null
      // <p> there is no todo yet</p>
      }
     
      {
        todos.length>0 ?
        <ToDoFooter 
      todos={todos.length}
      completedTodos={todos.filter(todo=>todo.isCompleted).length}
      onRemoveAllCopmletedTodos={()=>{
        dispatch({
          type:"REMOVE_ALL_COPLETED"
        })
      }}
      />
      : null

      }
      
    </div>
  );
}

export default App;
