import React, { useState } from "react";
import "./Todo.css";
import todoImg from "../../images/todo-image.jpeg";

const Todo = () => {
  const [inputData, setInputData] = useState(()=>{
    return ""
  });
  const [todoList, setTodoList] = useState(()=>{
    return []
  });

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const addTodo = () => {
    if (!inputData) return;
    setTodoList((prevList)=>{
      
     return [...prevList, inputData]});
    setInputData("");
  };

  const removeAll = () => {
    setTodoList([]);
  };

  const deleteItem = (ind) => {
    const updatedList = todoList.filter((element, id) => {
      return id !== ind;
    });

    setTodoList(updatedList);
  };

  return (
    <>
      <div className="main-container">
        <div className="todo-container">
          <div className="todo-image">
            <img src={todoImg} alt="" />
          </div>
          <div className="todo-input">
            <input
              type="text"
              placeholder="Enter Todos..."
              value={inputData}
              onChange={handleChange}
            />
            <button className="add-todo-button" onClick={addTodo}>
              Add Todo
            </button>
          </div>

          <div className="todo-display">
            {todoList.map((element, ind) => {
              return (
                <div className="todo-display-list" key={ind}>
                  <h3>
                    {element}{" "}
                    <button onClick={() => deleteItem(ind)}>Delete</button>
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="remove-all">
            <button onClick={removeAll}>Remove All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
