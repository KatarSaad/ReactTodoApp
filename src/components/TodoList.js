import{ React,useState }from "react";
import { Todo } from "./Todo";

export const  TodoList=({todos,setTodos,filtered})=>{
  
 

    

    return (
        <div className="todo-container">
        <ul className="todo-list">
          {filtered.map(todo=>(
           <Todo text={todo.text} todo={todo} todos={todos} setTodos={setTodos}  />)
            
          )}
        </ul>
        
        
        
        

      </div>
        
    );
};