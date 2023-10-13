import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

// App is the main compnent tha always run when we run our react applicaiton. rest all componentrs will be embedded here...
function App() {
  var name = "Alan Smith";
  return (
    <>
      <div className="App">
        <h1>First React Application</h1>
        <Header title="Hello" msg="This is the first user defined component" />
        <About />
        <Header title={name} />
        <About />
      </div>
    </>
  );
}

// return JSX..is the combination of html,css and javascript

// fragment is <> </> ...
// fragment does not produce any code of itself

export default App;
