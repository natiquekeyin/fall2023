import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

  let onClick = (e) => {
    console.log("click from App component");
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onClick={onClick} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
