import { createContext, useState } from "react";

export const CounterContext = createContext(0);

//? create Provider and add children
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);    
  const Increment = () => {
    setCount((prevVal) => prevVal + 1);
  };
  const Decrement = () => {
    setCount((prevVal) => prevVal - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <CounterContext.Provider value={{ count, Increment, Decrement, Reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
