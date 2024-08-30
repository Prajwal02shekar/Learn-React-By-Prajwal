import React from "react";
import NavbarContainer from "./pages/navbar/NavbarContainer";
import TaskProvider from "./context/TaskContext";
import TaskForm from "./components/taskComp/TaskForm";
import Alltask from "./components/taskComp/Alltask";

const App = () => {
  return (
    <TaskProvider>
      <header>
        <NavbarContainer />
      </header>
      <main className="flex-container">
        <TaskForm/>
        <Alltask/>
      </main>
    </TaskProvider>
  );
};

export default App;
