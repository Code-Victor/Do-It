import React from "react";
import CompletedItem from "./components/completedItem";

function CompletedTab({todos,setTodos}) {
    function deleteAll() {
        setTodos(todos.filter((todo)=>todo.done===false));
    }
  return (
    <div>
      <div className="flex flex-col gap-4 mb-5">
          {
              todos.filter((todo)=>todo.done===true).map((todo)=>{
                return <CompletedItem todo={todo} todos={todos} setTodos={setTodos}/>
            })
          }

      </div>
      <div>
        <div className='ml-auto flex px-4 py-4 rounded-md gap-1 text-white font-semibold bg-red-500 w-36' onClick={()=>{deleteAll()}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete All
        </div>
      </div>
    </div>
  );
}

export default CompletedTab;
