import "./App.css";
import CounterView from "./components/CounterView";
import PostView from "./components/PostView";

function App() {
  return (
    <div className="App">
      <h1>Counter-App using Redux-Toolkit</h1>
      <CounterView />
      <PostView/>
    </div>
  );
}

export default App;
