import "./App.css";

function App() {
  let firstName = "Alan";
  return (
    <div className="App">
      <h1>First React APP</h1>
      <p>THis is fun learning react</p>
      <p>Welcome {firstName.replace("l", "x")}</p>
    </div>
  );
}

export default App;
