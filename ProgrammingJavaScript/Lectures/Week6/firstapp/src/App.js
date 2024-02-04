import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

// App is the main compnent tha always run when we run our react applicaiton. rest all componentrs will be embedded here...
function App() {
  var name = "Alan Smith";
  return (
    <>
      <div className="App">
        <h1>First React Application</h1>
        <About />
        {/* <Header title="Hello" msg="This is the first user defined component" /> */}

        {/* <Footer /> */}
      </div>
    </>
  );
}

// return JSX..is the combination of html,css and javascript

// fragment is <> </> ...
// fragment does not produce any code of itself

export default App;
