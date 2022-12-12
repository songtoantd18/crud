import React from "react";

const TodoList = ({ todoList, setTodoList, editTodo, setEditTodo }) => {
  const handleDelete = (todo) => {
    setTodoList(
      todoList.filter((item) => {
        // console.log("item.id:", item.id);
        return item.id !== todo.id;
      })
    );
  };
  const handleCheck = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    console.log("1:", 1);
    console.log("id:", id);

    const findTodo = todoList.find((item) => {
      /////tim item nao trung voi cai id
      return item.id === id;
    });
    console.log("findTodo:", findTodo);
    setEditTodo(findTodo);
    /// dua cai item nay vao editTodo bang setEditTodo
  };

  return (
    <div>
      {todoList.map((todo) => {
        return (
          <div key={todo.id}>
            <div className={`list ${todo.completed ? "completed" : ""}`}>
              {/* <div>{todo.id}</div> */}
              <div>{todo.title}</div>
            </div>
            <button onClick={() => handleDelete(todo)}>delete</button>
            <button onClick={() => handleCheck(todo)}>check</button>
            <button onClick={() => handleEdit(todo)}>edit</button>
          </div>
        );
      })}

      {/* setInput('ok123') */}
    </div>
  );
};

export default TodoList;
