import './App.css';
import { useState } from "react";
import Content from './Content';
import PreviewAvatar from './PreviewAvatar';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {show && <PreviewAvatar />}
    </div>
  );
}

export default App;
