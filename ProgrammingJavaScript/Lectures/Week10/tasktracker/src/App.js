import logo from "./logo.svg";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Temp1 from "./components/Temp1";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // for fetching tasks ...

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // to make state variable global and transerferable to ANY component we put them in App.js...
  // tasks is now a state variable with initial value set to an array []... and we can use setTasks to change the state of tasks -VA

  const deleteTask = async (id) => {
    // console.log("delete", id);
    // filter funciton will filter all the tasks...leaving out the task with the id.. given in paramter...
    // setTasks(tasks.filter((task) => task.id != id));

    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleReminder = async (id) => {
    // console.log("hello", id);

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    // console.log(task);
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Link to="/about">About</Link>|<Link to="/">Home</Link>|{" "}
        <Link to="/temp1">Temp1</Link>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show"
                )}

                {showAddTask && <AddTask onAdd={addTask} />}
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/temp1" element={<Temp1 />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Deploy this applicaiton!
// setting up a server.. by using "serve"
// JSON Server..
// API has different DELETE.. POST(inserting new), PUT(updates...)

// React Router DOM:for making routes and links in react applications
// The add button should only appear on home page.. "useLocation" react-router-dom
