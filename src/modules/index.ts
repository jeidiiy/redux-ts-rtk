import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";

export const rootReducer = combineReducers({
  todos: todos,
  counter: counter
})

export type RootState = ReturnType<typeof rootReducer>
export type CounterState = ReturnType<typeof counter>
export type TodosState = ReturnType<typeof todos>
