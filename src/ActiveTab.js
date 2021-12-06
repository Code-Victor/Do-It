import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoItem";

function ActiveTab({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { title: inputValue, done: false }]);
    setInputValue("");
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)} className="flex gap-8 h-12 mb-4">
        <input
          type="text"
          className="rounded border border-gray-300 flex-1 p-3"
          name=""
          id=""
          value={inputValue}
          placeholder="add details"
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
        <div
          className="bg-blue-500 rounded px-10 py-3 text-white font-semibold"
          onClick={() => {}}
        >
          Add
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {todos
          .filter((todo) => todo.done === false)
          .map((todo) => {
            return <TodoItem todo={todo} setTodos={setTodos} todos={todos} />;
          })
          
          }
         
        
        {/* <TodoItem/>
                <TodoItem/> */}
      </div>
    </div>
  );
}

export default ActiveTab;
