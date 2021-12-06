import React from "react";

function CompletedItem({todo,todos,setTodos}) {
    function deleteTodo(){
        setTodos(todos.filter((todot)=>todot!==todo))
        // if(todos.length===1){
        //     setTodos([])
        // }
        // else{

        //     setTodos(todos.splice(index,1));
        // }
    }
  return (
    <button className="flex rounded-md hover:bg-gray-100 focus:bg-gray-300 p-4 items-center gap-6 w-full">
      <input type="checkbox" name="" id="" className="w-5 h-5" defaultChecked={true} />
      <div className="flex justify-between w-full">
        <p className="font-semibold line-through text-gray-600">
         {todo.title}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={()=>{deleteTodo()}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </button>
  );
}

export default CompletedItem;
