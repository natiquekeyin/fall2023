import logo from "./logo.svg";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Temp1 from "./components/Temp1";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("hello");
  });
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "School appointment",
      day: "November 10 at 1pm",
      reminder: true,
    },
    { id: 2, text: "GYM", day: "November 15 at 10pm", reminder: false },
    { id: 3, text: "Meeting", day: "December 10 at 3 pm", reminder: true },
  ]);
  // to make state variable global and transerferable to ANY component we put them in App.js...
  // tasks is now a state variable with initial value set to an array []... and we can use setTasks to change the state of tasks -VA

  const deleteTask = (id) => {
    // console.log("delete", id);
    // filter funciton will filter all the tasks...leaving out the task with the id.. given in paramter...
    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleReminder = (id) => {
    // console.log("hello", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    // console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}

      {showAddTask && <AddTask onAdd={addTask} />}
    </div>
  );
}

export default App;
