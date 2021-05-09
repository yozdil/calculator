import { useReducer } from "react";
import { Header, Divider } from "semantic-ui-react";
import Calculator from "./components/Calculator";
import { Reducer, initialState } from "./hooks/reducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <div className="animate__animated animate__backInDown">
        <Calculator state={state} dispatch={dispatch} id="calculator" />
      </div>
      <div className="animate__animated animate__backInRight">
        <a href="https://yamacozdil.com/">
          <Divider hidden></Divider>
          <Header floated="right" color="blue" as="h4">
            by Yamac Ozdil
          </Header>
        </a>
      </div>
    </div>
  );
}

export default App;
