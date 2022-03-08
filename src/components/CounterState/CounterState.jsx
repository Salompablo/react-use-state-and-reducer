import React, { useState } from "react";
import "./CounterState.scss";

const UseStateComponent = () => {
  //se define la variable count y su setter setCount utilizando destructuracion de Arrays
  const [count, setCount] = useState(0); // 0 es el valor inicial del state

  return (
    <div className='counter'>
      <h1 className='counter__count'>{count}</h1>
      <button
        className='counter__button counter__button--increase'
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className='counter__button counter__button--decrease'
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button
        className='counter__button counter__button--reset'
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default UseStateComponent;
