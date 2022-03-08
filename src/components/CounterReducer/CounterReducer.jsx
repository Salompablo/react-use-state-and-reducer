import React, { useReducer } from 'react';

const reducer = (state, action) => {
    console.log(action);
    console.log(state);
  switch (action.type) {
    case 'increment': 
    return { count: state.count + 1 };
    case 'decrement': 
    return { count: state.count - 1 };
    case 'reset': 
    return initialState
    default: return state;
  }
}

const initialState = { count: 0 };

const UseReducerComponent = () => {
  //state es el valor del store, y dispatch nos permite disparar acciones
  const [state, dispatch] = useReducer(reducer, initialState);// Nuestro reducer y el valor inicial

  return (
    <div>
      Count: { state.count }
      <button onClick={() => dispatch({ type: 'increment', payload: "hola" })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>);
}

export default UseReducerComponent;
