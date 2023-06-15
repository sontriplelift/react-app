/**
 * 1. Init state
 * 2. Actions
 * 3. Reducer
 * 4. Dispatch
 */

import { useReducer } from "react";

const initValue = 0;

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (state, action) => {
  console.log('reducer running...');
  switch(action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action!');
  }
}

function SampleUseReducer() {
  const [count, dispatch] = useReducer(reducer, initValue);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
}

export default SampleUseReducer;