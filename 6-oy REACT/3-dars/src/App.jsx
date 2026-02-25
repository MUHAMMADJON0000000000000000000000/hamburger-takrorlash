import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./assets/img/logo_krepair.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="nav">
        <img src="./asser" alt="" />
        <img src="./asser" alt="" />

        <ul>
          <li>Услуги</li>
          <li>Прайс-лист</li>
          <li>O компании</li>
          <li>Контакты</li>
        </ul>

        <a href="#nubers">+7 499 226 29 28</a>
      </div>
    </>
  );
}

export default App;
