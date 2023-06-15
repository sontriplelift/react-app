import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

function TodoUseReducer() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addJob(state.job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Todo</h1>
      <input 
        ref={inputRef} 
        value={state.job}
        onChange={(e) => dispatch(setJob(e.target.value))}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.jobs.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(deleteJob(index))}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoUseReducer;