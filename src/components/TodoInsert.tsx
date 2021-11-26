import { insert, onChangeInput } from '../modules/todos';
import { useDispatch, useSelector } from "react-redux";
import { TodosState } from "../modules";
import React from "react";

function TodoInsert() {
  const input = useSelector((todos: TodosState) => todos.input);
  const dispatch = useDispatch();

  const onInsert = (text: string) => dispatch(insert(text));
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeInput(e.target.value));
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange}/>
        <button type="submit">등록</button>
      </form>
    </div>
  )
}

export default TodoInsert;
