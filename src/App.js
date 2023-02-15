import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const arr = ["Да", "Нет", "не знаю", "Может быть"];
  const [answer, setAnswer] = useState("Нажми на меня");
  const [pending, setPending] = useState(false);

  function changeText() {
    if (pending) {
      return;
    }
    const index = getRandonIndex(arr.length);
    setPending(true);
    console.log(index);
    setTimeout(() => {
      setAnswer(arr[index]);
      setPending(false);
    }, 1500);
  }

  function getRandonIndex(len) {
    return Math.floor(Math.random() * len);
  }

  return (
    <div className="App">
      <div className="ball" onClick={changeText}>
        <div className="oko">
          <div className="text">{pending ? "Подождите" : answer}</div>
        </div>
      </div>
    </div>
  );
}
