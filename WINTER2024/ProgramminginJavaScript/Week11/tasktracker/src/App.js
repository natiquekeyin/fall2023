import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";

function App() {
  let onClick = (e) => {
    console.log("click from App component");
  };
  return (
    <div className="container">
      {/* <Header title="Task Tracker" onClick={onClick} />
      <Tasks /> */}

      {/* <Temp1 /> */}
      <Temp2 />
    </div>
  );
}

export default App;
