import React from 'react';
import Todos from "./components/Todos";
import TodoInsert from "./components/TodoInsert";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter/>
      <br/>
      <TodoInsert/>
      <Todos/>
    </div>
  )
}

export default App;
