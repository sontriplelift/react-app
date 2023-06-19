import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import { StoreProvider } from './store';

// Fake chats
function emitChat(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`channel-${id}`, {
        detail: `Chat content in Channel ${id}: ${(Math.random() + 1).toString(36).substring(2)}`
      })
    )
  }, 2000);
}
emitChat(1);
emitChat(2);
emitChat(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
