import React, { useReducer } from 'react';

export default function App() {
  
  function reducer(state, action) {
return state +action;
}
  

  // const [sum, dispatch] = useReducer((state, action) => {
  //   return state + action;
  // }, 0);

  const [sum, dispatch] = useReducer(reducer, 0);

  return (
    <p>
      <span style={{fontSize:"44px"}}>{sum} &ensp;</span>
      <button onClick={() => dispatch(1)} style={{fontSize:"44px"}} >
      Add 1
      </button>
    </p>
  );
}