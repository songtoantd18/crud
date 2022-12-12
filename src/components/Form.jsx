import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  input,
  setInput,
  todoList,
  setTodoList,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    //tại sao k để ({title,id,complete}) mà lại để (title,{id,completed})
    //vì đang thay đổi title nên id và completed giữ nguyên

    console.log("title:", title);
    console.log("id:", id);
    console.log("completed:", completed);
    const newTodo = todoList.map((item) => {
      console.log("item:", item);
      // phân tích logic ở đây :
      //nếu = thì trả về cái title mới id cũ complete cũ còn nếu không thì trả về item thôi
      return item.id === id ? { title, id, completed } : item;
    });
    setTodoList(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  //useEffect dùng để thay đôi re-render lại giao diện mỗi khi nhấn nút submit( set input và edittodo chung 1 nút lúc submit)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("!editTodo:", !editTodo);
    // chia ra lam 2 trường hợp , th1: nhấn nút submit bình thường,
    //  ban đầu editTodo là null mà !editTodo=!null=true nên chạy cái
    //   này, th2 là còn lại khi nhấn nút edit thì bên todolist sẽ
    //    chạy ra giá trị setEditTodo(findTodo)= trả về 1 object
    //     mà !editTodo=!{} = false sẽ chạy th2 else
    if (!editTodo) {
      setTodoList([
        ...todoList,
        { id: uuidv4(), title: input, completed: false },
      ]);
      setInput("");
    } else {
      ////////////////th2 nếu nhấn vào nút edit thì hàm này sẽ chạy
      //// input là thay đổi title,còn edittodo.id và completed giữu nguyên k đổi
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div>
      <form>
        <input
          placeholder="enter to do... "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          {editTodo ? "ok" : "add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
