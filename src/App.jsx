import { useState } from "react";
import { Heading, InputArea, TodoItems } from "./Components";
import { Data } from "./ContextData";
import WelcomeMassage from "./Components/WelcomeMassage";
import TaskIncompleteMassage from "./Components/TaskIncompleteMassage";

function App() {
  let [todoData, settodoData] = useState(Data);

  const handelOnNewTodo = (newtodoName, newtodoDate) => {
    let newTodo = [
      ...todoData,
      {
        name: newtodoName,
        date: newtodoDate,
      },
    ];
    settodoData(newTodo);
  };

  const handelDeleteItem = (todoDeleteName) => {
    let newTodoItems = todoData.filter((item) => item.name !== todoDeleteName);
    settodoData(newTodoItems);
  };

  return (
    <>
      <div className="w-full overflow-hidden p-5 sm:p-0 sm:flex sm:justify-center">
        <div className="max-w-[640px] card-border-color-shadow  my-10 p-8 rounded-3xl card-bg-color ">
          <Heading />
          <InputArea OnNewTodo={handelOnNewTodo} />
          {todoData.length === 0 ? (
            <WelcomeMassage />
          ) : (
            <TaskIncompleteMassage />
          )}
          <TodoItems todoData={todoData} onDeleteClick={handelDeleteItem} />
        </div>
      </div>
    </>
  );
}

export default App;
