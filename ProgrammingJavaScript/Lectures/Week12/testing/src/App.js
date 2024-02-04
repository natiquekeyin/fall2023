import logo from "./logo.svg";
import "./App.css";
import Skills from "./skills/Skills";
import Events from "./myevents/Events";
function App() {
  const skills = ["Hello", "world"];
  return (
    <div className="App">
      {/* <Skills skills={skills} /> */}
      <Events />
      learn react
    </div>
  );
}

export default App;
