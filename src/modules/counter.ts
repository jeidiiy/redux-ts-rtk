interface Action {
  type: string
}

// 액션
const INCREASE: string = "counter/INCREASE";
const DECREASE: string = "counter/DECREASE";

// 액션 생성 함수
export const increase: Function = () => ({ type: INCREASE })
export const decrease: Function = () => ({ type: DECREASE })

// 초기값
const initialState: number = 0;

// 리듀서
export default function counter(state = initialState, action: Action) {
  switch (action.type) {
    case INCREASE:
      return state = state + 1;
    case DECREASE:
      return state = state - 1;
    default:
      return state;
  }
}