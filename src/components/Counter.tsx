import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { RootState } from "../modules";

function Counter() {
  const counter = useSelector(({ counter }: RootState) => counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button name="increase" onClick={() => dispatch(increase())}>+1</button>
      <button name="decrease" onClick={() => dispatch(decrease())}>-1</button>
    </div>
  )
}

export default Counter;
