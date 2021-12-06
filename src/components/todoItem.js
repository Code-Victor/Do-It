import React, { useEffect, useState } from "react";

function TodoItem({todo,todos,setTodos}) {
    const [checked, setChecked] = useState(todo.done);
    var loc;
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        if (todo===element){
            loc=i;
        }
    }
    var currentTodos= todos
    var currentTodo=todo
    useEffect(() => {
        if (checked) {
            currentTodo.done=true;
            currentTodos.splice(loc,1);
            currentTodos.splice(loc,0,currentTodo);
            setTodos(currentTodos);
        }
        else{
            currentTodo.done=false;
            currentTodos.splice(loc,1);
            currentTodos.splice(loc,0,currentTodo);
            setTodos(currentTodos);

        }
        console.log('effect')
        console.log(currentTodo.done)
        console.log(currentTodos[loc].done);
        console.log(todos[loc].done)
    }, [checked])
  return (
    <button
      className="flex rounded-md hover:bg-gray-100 focus:bg-gray-300 p-4 items-center gap-6 w-full"
      onClick={() => setChecked(!checked)}
    >
      <input
        type="checkbox"
        name=""
        id=""
        className="w-5 h-5"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <p className={checked?"font-semibold line-through":"font-semibold"}>{todo.title}</p>
    </button>
  );
}

export default TodoItem;
