import React, { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Home</h1>
      <br />
      <div>Button clicked {counter} times</div>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>Click me!</button>
    </>
  );
}
