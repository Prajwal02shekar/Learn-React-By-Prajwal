import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();
const TaskProvider = ({ children }) => {
  let [task, setTask] = useState("");
  const addTask = ( title, author, description ) => {
    setTask([...task, { title, description, author, id: uuidv4() }]);
  };
  return(
  <TaskContext.Provider value={{addTask,task}}>
    {children}
    </TaskContext.Provider>
    )
};

export default TaskProvider;
