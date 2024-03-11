import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let firstName = "Alan";
  return (
    <>
      <div className="App">
        <h1>First React APP</h1>
        <Header
          title="Calculator App"
          text="This is going to be a calculator app used for calucation"
        />
        <Header
          title="Todo App"
          text="Todo application for different purposes"
        />
        <Header title="Some new App" />
      </div>
    </>
  );
}

export default App;
