import "./App.css";
import useDocTitle from "./hooks/useDocTitle";
import useSmoothScroll from "./hooks/useSmoothScroll";
// Ryan! thumbs up!
function App() {
  const [docTitle, setDocTitle] = useDocTitle({ title: "Start Page" });
  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollTop] = useSmoothScroll();
  return (
    <div className="App">
      <button onClick={() => setDocTitle("New ONE!!!")}>Change Title</button>

      <button onClick={smoothScroll} ref={topRef}>
        Scroll
      </button>
      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        I am here
      </div>
      <button onClick={smoothScrollTop}>Go UP!</button>
    </div>
  );
}

export default App;
