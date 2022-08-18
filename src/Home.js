import React, { useState, useEffect } from "react";

export default function Home() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // // Type 1: Executes on render and all state changes
  // useEffect(() => {
  //   console.log('Use Effect executing!')
  // })

  // // Type 2: Executes on render and all dependency state changes
  // useEffect(() => {
  //   console.log("Use Effect executing!");
  // }, [counter2]);

  // Type 3: Executes on render 
  useEffect(() => {
    console.log("Use Effect executing!");
  }, []);

  return (
    <>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>

      <button onClick={() => setCounter1(counter1 + 1)}>Increment 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>
    </>
  );
}
