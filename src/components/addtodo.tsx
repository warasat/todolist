import React, { useState } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddToDo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <div>
      <form className="text-center p-8 m-5 " onSubmit={handleFormSubmit}>
        <input
          className="border-black border-solid p-1 m-2"
          type="text"
          placeholder="name"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="bg-green-600 text-white hover:bg-green-800 w-14 h-8 m-2 " type="submit">
          add
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
