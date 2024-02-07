import "./App.css";
import useDocTitle from "./hooks/useDocTitle";
import useSmoothScroll from "./hooks/useSmoothScroll";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
// Ryan! thumbs up!
// function App() {
//   const [docTitle, setDocTitle] = useDocTitle({ title: "Start Page" });
//   const [refToScroll, smoothScroll] = useSmoothScroll();
//   const [topRef, smoothScrollTop] = useSmoothScroll();
//   return (
//     <div className="App">
//       <button onClick={() => setDocTitle("New ONE!!!")}>Change Title</button>

//       <button onClick={smoothScroll} ref={topRef}>
//         Scroll
//       </button>
//       <div style={{ marginTop: "150vh" }} ref={refToScroll}>
//         I am here
//       </div>
//       <button onClick={smoothScrollTop}>Go UP!</button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useLocalStorage("count1", 0);
//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

function App() {
  const { data, loading, error } = useFetch("https://reqres.in/api/users");

  if (loading) {
    return <div>Loading......</div>;
  }
  if (error) {
    return <div> Error: {error.message}</div>;
  }
  return <div>{data.data[2].email}</div>;
}

export default App;
