import './App.css';
import { useState } from "react";
import Content from './Content';
import PreviewAvatar from './PreviewAvatar';
import FakeChatApp from './FakeChatApp';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {/* {show && <PreviewAvatar />} */}
      {show && <FakeChatApp />}
    </div>
  );
}

export default App;
