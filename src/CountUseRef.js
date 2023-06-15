import { useEffect, useRef, useState } from "react";

function CountUseRef() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const preCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    preCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ref.current);
    console.log(h1Ref.current.getBoundingClientRect());
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
        setCount(prev => prev - 1);
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(timerId.current);
  }

  return (
    <div>
      <h1 ref={h1Ref}>count: {count}</h1>
      <h1>preCount: {preCount.current}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default CountUseRef;