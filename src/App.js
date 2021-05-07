import { useReducer } from "react";
import { Header, Divider } from "semantic-ui-react";
import Calculator from "./components/Calculator";
import { Reducer, initialState } from "./hooks/reducer";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <Header textAlign="center" as="h1">
        Calculator
      </Header>
      <Calculator state={state} dispatch={dispatch} id="calculator" />
      <a href="https://yamacozdil.com/">
        <Divider hidden></Divider>
        <Header floated="right" color="blue" as="h4">
          by Yamac Ozdil
        </Header>
      </a>
    </div>
  );
}

export default App;
