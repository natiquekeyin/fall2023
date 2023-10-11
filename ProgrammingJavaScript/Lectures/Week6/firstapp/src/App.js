import logo from "./logo.svg";
import "./App.css";

// App is the main compnent tha always run when we run our react applicaiton. rest all componentrs will be embedded here...
function App() {
  var name = "Alan Smith";
  return (
    <div className="App">
      <h1>First React Application</h1>
      <p>This is the start of our interesting journey of React!!!</p>
      <p>This application is created by {name}! </p>
    </div>
  );
}

// return JSX..is the combination of html,css and javascript

export default App;
