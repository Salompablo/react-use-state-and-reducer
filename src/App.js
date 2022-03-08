import CounterState from "./components/CounterState/CounterState";
import CounterReducer from "./components/CounterReducer/CounterReducer";
import LoginUseState from "./components/LoginUseState/LoginUseState";
import LoginReducer from "./components/LoginReducer/LoginReducer";

function App() {
  return (
    <div className="App">
      {/* <CounterState />
      <CounterReducer /> */}
      {/* <LoginUseState /> */}
      <LoginReducer />
    </div>
  );
}

export default App;
