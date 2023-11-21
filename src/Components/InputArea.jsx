/* eslint-disable react/prop-types */
import { useState } from "react";
import { SiAddthis } from "react-icons/si";

function InputArea({ OnNewTodo }) {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handelNameChange = (event) => {
    todoName = event.target.value;
    setTodoName(todoName);
  };
  const handelDateChange = (event) => {
    todoDate = event.target.value;
    setTodoDate(todoDate);
  };

  const handelOnclick = () => {
    OnNewTodo(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <>
      <div className="flex flex-col w-full sm:flex-row overflow-hidden  items-center gap-5 my-5">
        <div className="sm:w-[50%] ">
          <input
            type="text"
            value={todoName}
            placeholder="Enter todo .."
            className="w-full text-lg px-5 py-3  rounded-lg outline-none border border-[#6EE7B7] hover:border-[#3B82F6] focus:border-[#3B82F6] bg-[#242424]"
            onChange={handelNameChange}
          />
        </div>
        <div className="sm:w-[30%]">
          <input
            type="date"
            value={todoDate}
            className="w-full py-3 px-3 rounded-lg outline-none border border-[#6EE7B7] hover:border-[#3B82F6] focus:border-[#3B82F6] bg-[#242424]  "
            onChange={handelDateChange}
          />
        </div>
        <div className="sm:w-[15%]">
          <button
            className=" w-full px-6 sm:px-4 py-3 border border-[#6EE7B7] hover:border-[#3B82F6] focus:border-[#3B82F6]  rounded-md active:scale-95 duration-300 ease-in-out  shadow-sm shadow-[#6EE7B7] flex justify-center"
            onClick={handelOnclick}
          >
            <SiAddthis />
          </button>
        </div>
      </div>
    </>
  );
}

export default InputArea;
