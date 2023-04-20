import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Stage } from "./Stage.js";

function App() {
  const Main = () => {
    return (
      <div id="open">
        <h1 className="title">
          Hidden Picture Puzzle
          <div className="manual">동그란 빨간 점을 찾으세요!</div>
        </h1>
        <Link to="1">
          <button className="start" type="button">
            START
          </button>
        </Link>
      </div>
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/1"
          element={<Stage stageNumber="1" stageID="one" />}
        ></Route>
        <Route
          path="/2"
          element={<Stage stageNumber="2" stageID="two" />}
        ></Route>
        <Route
          path="/3"
          element={<Stage stageNumber="3" stageID="three" />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
