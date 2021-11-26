import { insert, onChangeInput } from '../modules/todos';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import React, { ChangeEvent, FormEvent } from "react";

function TodoInsert() {
  const input = useSelector(({ todos }: RootState) => todos.input);
  const dispatch = useDispatch();

  const onInsert = (text: string) => dispatch(insert(text));

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(onChangeInput(e.target.value));
  }

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={input} onChange={onChangeHandler}/>
        <button type="submit">등록</button>
      </form>
    </div>
  )
}

export default TodoInsert;
