import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      text: "School Appointment",
      day: "March20th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "GYM",
      day: "March 21st at 1:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Interview Appointment",
      day: "April 20th at 2:30pm",
      reminder: true,
    },
  ]);

  let [showAddTask, setShowAddTask] = useState(true);

  let deleteTask = (id) => {
    // console.log("Delete", id);

    setTasks(tasks.filter((task) => task.id !== id)); //return all tasks BUT the one with this task.id???
  };

  // Toggle reminder

  let toggleReminder = (id) => {
    // console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // to add new task..

  let addTask = (task) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    let newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
