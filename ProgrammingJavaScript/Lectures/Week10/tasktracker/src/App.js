import logo from "./logo.svg";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Temp1 from "./components/Temp1";
import { useState } from "react";
import "./App.css";

function App() {
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />

      {/* <Temp1 /> */}
    </div>
  );
}

export default App;
