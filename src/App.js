import './App.css';
import { useState } from "react";
import Content from './Content';
import PreviewAvatar from './PreviewAvatar';
import FakeChatApp from './FakeChatApp';
import CountUseLayoutEffect from './CountUseLayoutEffect';
import CountUseRef from './CountUseRef';
import CountMemo from './CountMemo';

function App() {
  const [show, setShow] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {/* {show && <PreviewAvatar />} */}
      {/* {show && <FakeChatApp />} */}
      {/* {show && <CountUseLayoutEffect />} */}
      {/* {show && <CountUseRef />} */}
      
      {show && <CountMemo count={count1}/>}
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Click 1</button>
      <button onClick={() => setCount2(count2 + 1)}>Click 2</button>
    </div>
  );
}

export default App;
