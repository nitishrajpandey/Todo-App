/* eslint-disable react/prop-types */
// import React from 'react'
import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="flex flex-col w-full sm:flex-row overflow-hidden  items-center sm:gap-5 my-7 py-3 sm:py-0  sm:my-5 sm:bg-inherit bg-[#3d3d3d] rounded-xl sm:rounded-none shadow-sm shadow-[#3d3d3d] sm:shadow-none">
        <div className="sm:w-[50%] ">
          <h1 className="w-full text-lg px-5 py-3  rounded-lg overflow-hidden">
            {todoName}
          </h1>
        </div>
        <div className="sm:w-[30%]">
          <h1 className="w-full text-lg px-5 py-3  rounded-lg">{todoDate} </h1>
        </div>
        <div className="sm:w-[15%]">
          <button
            className=" w-full px-6 sm:px-4 py-3 border border-[#7c241c] hover:border-[#f63b64] focus:border-[#ee3d3d] rounded-md shadow-sm shadow-[#7c241c] flex justify-center"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete className="text-red-700 text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
