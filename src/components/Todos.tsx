import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { remove, toggle } from '../modules/todos';

interface TodoProps {
  todo: {
    id: number,
    text: string,
    checked: boolean,
  }
}

function Todos() {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
    </div>
  )
}

function Todo({ todo }: TodoProps) {
  const { id, text, checked } = todo;
  const dispatch: Function = useDispatch();

  const onRemove: Function = (id: number) => dispatch(remove(id));
  const onToggle: Function = (id: number) => dispatch(toggle(id));
  return (
    <div>
      <span onDoubleClick={() => onRemove(id)}>{text}</span>
      <input type="checkbox" checked={checked} readOnly={true} onClick={() => onToggle(id)}/>
    </div>
  )
}

export default Todos;
