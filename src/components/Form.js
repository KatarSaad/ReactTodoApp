import React from "react";

export const Form=(props)=>{
    const inputTextHandler = (e)=>{
     console.log(e)
     props.setInputText(e.target.value)

     
    }

    const submitTodoHandler = (e)=>{
      console.log("hey")
      //props.setTodos()
      e.preventDefault()
      props.setTodos([
        ...props.todos,{text:props.inputText,completed:false,id:Math.random()*1000 ,},
        
      ])
      props.setInputText("")

    }
    const choiceHandler = (e)=>{
      props.setChoice(e.target.value)
    }
    
    
    return (
        <form>
        <input value={props.inputText}  onChange={inputTextHandler}  type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={choiceHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )


};