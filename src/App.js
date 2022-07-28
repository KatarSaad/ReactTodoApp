import React, { useState, useEffect } from "react";

import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import "./App.css";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [choice, setChoice] = useState("all");
  const [filtered, setFiltred] = useState([]);
  const saveLocalTodods=()=>{
 
      localStorage.setItem('todos',JSON.stringify(todos));

    }
      
    
  const getLocalTodos=()=>{
   
     let localTodos= JSON.parse(localStorage.getItem('todos'));
     console.log(localTodos)
     setTodos(localTodos);

    
     
  }  

  useEffect(() => {
    getLocalTodos()
    }, []);
  useEffect(() => {
    choiceHandler();
    saveLocalTodods();
  }, [todos, choice]);

  
  const choiceHandler = () => {
    if (choice == "uncompleted") {
      setFiltred(todos.filter((element) => element.completed === false));
    } else if (choice == "completed") {
      setFiltred(todos.filter((element) => element.completed === true));
    } else {
      setFiltred(todos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>

      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        choice={choice}
        setChoice={setChoice}
      />
      <h2>{inputText}</h2>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        choice={choice}
        setChoice={setChoice}
        filtered={filtered}
      />
    </div>
  );
  }

export default App;
