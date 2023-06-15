/**
 * 1. Init state
 * 2. Actions
 * 3. Reducer
 * 4. Dispatch
 */

import { useReducer, useRef } from "react";

const initState = {
  job: '',
  jobs: []
};

// Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newJobs
      };
    default:
      throw new Error('Invalid action!');
  }
}

// Dispatch
function TodoAppUseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

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

export default TodoAppUseReducer;