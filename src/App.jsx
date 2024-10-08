import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div>
      <div className="flex mt-10 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline text-center">
          Learn about Redux Toolkit
        </h1>
        <AddTodo />
      </div>
     <div className="w-[50vw] mx-auto"> <Todos /></div>
    </div>
  );
};

export default App;
