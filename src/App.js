import './App.css';
import { useState } from "react";
import Content from './Content';
import PreviewAvatar from './PreviewAvatar';
import FakeChatApp from './FakeChatApp';
import CountUseLayoutEffect from './CountUseLayoutEffect';
import CountUseRef from './CountUseRef';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {/* {show && <PreviewAvatar />} */}
      {/* {show && <FakeChatApp />} */}
      {/* {show && <CountUseLayoutEffect />} */}
      {show && <CountUseRef />}
    </div>
  );
}

export default App;
