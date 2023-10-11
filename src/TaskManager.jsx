import "./App.css";
import { tasks as TasksData } from "./data/tasks";
import { useState } from "react";

function TaskManager() {
  // Ustawienie stanu tasks za pomocą hooka useState i przekazanie do niego danych z TasksData
  const [tasks, setTasks] = useState(TasksData);

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      {/* Mapowanie elementów w tablicy tasks i wyświetlanie ich na stronie  */}
      <>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <li>{task.title}</li>
              <button onClick={() => handleDeleteTask(index)}>X</button>
            </div>
          );
        })}
      </>
    </div>
  );
}
export default TaskManager;
