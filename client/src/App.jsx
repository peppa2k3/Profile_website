import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import avatar from "./assets/debungnha.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <div className="header">
          <h1>HAI DANG</h1>
          <p>
            My name is Dang Ngoc Hai , I was born 2001. Currently I am a staff
            at xxx xxxx VN
          </p>
        </div>
        <div className="content">
          {" "}
          <a href="./" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://dangngochai.io.vn" target="_blank">
            <img src={avatar} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="footer">
          {" "}
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
