import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [input, setInput] = useState("song toan");
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
};

export default App;
