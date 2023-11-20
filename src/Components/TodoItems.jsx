/* eslint-disable react/prop-types */
// import React from 'react'

import TodoItem from "./TodoItem";

function TodoItems({ todoData, onDeleteClick }) {
  return (
    <>
      {todoData.map((data, index) => (
        <TodoItem
          key={index}
          todoName={data.name}
          todoDate={data.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
}

export default TodoItems;
