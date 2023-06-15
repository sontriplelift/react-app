import { memo } from "react";

function CountMemo({ onIncrease }) {
  console.log('re-render');
  return (
    <>
      <h1>UseCallback</h1>
      <button onClick={onIncrease}>Click</button>
    </>
  )
}

export default memo(CountMemo);