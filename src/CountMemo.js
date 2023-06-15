import { memo } from "react";

function CountMemo({ count }) {
  console.log('re-render');
  return (
    <h1>Memo count: {count}</h1>
  )
}

export default memo(CountMemo);