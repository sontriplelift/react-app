import './App.css';
import { useCallback, useContext, useRef, useState } from "react";
import Content from './Content';
import PreviewAvatar from './PreviewAvatar';
import FakeChatApp from './FakeChatApp';
import CountUseLayoutEffect from './CountUseLayoutEffect';
import CountUseRef from './CountUseRef';
import CountMemo from './CountMemo';
import CountUseCallback from './CountUseCallback';
import SampleUseMemo from './SampleUseMemo';
import SampleUseReducer from './SampleUseReducer';
import TodoAppUseReducer from './TodoAppUseReducer';
import TodoUseReducer from './Todo';
import ChildUseContext from './ChildUseContext';
import { ThemeContext } from './ThemeContext';
import Video from './Video';

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleIncrease = useCallback(() => {
      setCount(prev => prev + 1);
  }, []);

  const context = useContext(ThemeContext);

  const videoRef = useRef();

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {/* {show && <PreviewAvatar />} */}
      {/* {show && <FakeChatApp />} */}
      {/* {show && <CountUseLayoutEffect />} */}
      {/* {show && <CountUseRef />} */}

      {/* {show && <CountMemo count={count}/>}
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount(count + 1)}>Click 1</button>
      <button onClick={() => setCount2(count2 + 1)}>Click 2</button> */}

      {/* {show && <CountUseCallback onIncrease={handleIncrease}/>}
      <h1>{count}</h1> */}

      {/* {show && <SampleUseMemo />} */}
      {/* {show && <SampleUseReducer />} */}
      {/* {show && <TodoAppUseReducer />} */}
      {/* {show && <TodoUseReducer />} */}

      {/* <button onClick={context.toggleTheme}>Toggle theme</button>
      {show && <ChildUseContext/>} */}

      <Video ref={videoRef}/>
      <button onClick={() => {videoRef.current.play()}}>Play</button>
      <button onClick={() => {videoRef.current.pause()}}>Pause</button>
    </div>
  );
}

export default App;
