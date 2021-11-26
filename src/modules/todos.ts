import { createAction, createReducer } from "@reduxjs/toolkit";

interface Todo {
  id: number,
  text: string,
  checked: boolean
}

// 액션
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE = 'todos/CHANGE';

// 액션 생성 함수
export const insert = createAction(INSERT, (text: string) => {
  return {
    payload: {
      id: curId++,
      text,
      checked: false
    } as Todo
  }
});
export const remove = createAction<number>(REMOVE);
export const toggle = createAction<number>(TOGGLE);
export const onChangeInput = createAction<string>(CHANGE);

// 초기값
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리액트', checked: true },
    { id: 2, text: '리덕스', checked: true },
    { id: 3, text: '리덕스 툴킷', checked: false },
  ],
}

let curId = 4;

// 리듀서
const todos = createReducer(initialState, (builder =>
    builder
      .addCase(insert, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(remove, (state, action) => {
        state.todos.splice(state.todos.findIndex(todo => todo.id === action.payload), 1)
      })
      .addCase(toggle, (state, action) => {
        state.todos.forEach(todo => todo.id === action.payload ? todo.checked = !todo.checked : todo)
      })
      .addCase(onChangeInput, (state, action) => {
        state.input = action.payload;
      })
))

export default todos;
